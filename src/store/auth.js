import {
    defineStore
} from "pinia";
import UserDataService from "@/services/UserDataService.js";

const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL
export const useAuthStore = defineStore("auth", {
    state: () => ({
        accessToken: null,
        user: null,
        errorMessage: null,
    }),
    actions: {
        async login(credentials) {
            this.errorMessage = null;
            try {
                const response = await UserDataService.postLogin(credentials);
                const data = response.data;
                this.accessToken = data.access_token;

                sessionStorage.setItem('accessToken', this.accessToken);

                return { success: true, data };
            } catch (e) {
                console.log(e);
                this.errorMessage = 'Ошибка авторизации: неверные данные' + e;
                return { success: false, error: e };
            }
        },
        logout() {
            this.accessToken = null;
            this.user = null;
            this.removeFromSessionStorage();
        },
        removeFromSessionStorage() {
            sessionStorage.removeItem('accessToken');
        },
        loadTokensFromSessionStorage() {
            this.accessToken = sessionStorage.getItem('accessToken');
            this.refreshToken = sessionStorage.getItem('refreshToken');
        },
        async refreshAccessToken() {
            try {
                const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        refreshToken: this.refreshToken
                    }),
                });

                if (!response.ok) {
                    throw new Error('Ошибка обновления токена');
                }

                const data = await response.json();
                this.accessToken = data.access_token;
                sessionStorage.setItem('accessToken', this.accessToken);
                return this.accessToken;
            } catch (error) {
                console.error('Ошибка обновления токена:', error);
                this.logout();
                return null;
            }
        }
    },
});
