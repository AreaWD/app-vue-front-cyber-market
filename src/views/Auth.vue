<template>
  <div class="auth-page main-container">
    <div class="title-auth">
      <h1>Вход</h1>
      <h3>Добро пожаловать обратно!</h3>
    </div>
    <form @submit.prevent="auth">
      <div v-if="authStore.errorMessage" class="error-message">{{ authStore.errorMessage }}</div>
      <div class="form-group">
        <label for="username">Логин</label>
        <input type="text" v-model="username" placeholder="exampl@gmail.com" id="username" required />
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" v-model="password" placeholder="****************" id="password" required />
      </div>
      <div class="form-actions">
        <div class="remember-me">
          <input type="checkbox" id="remember" v-model="rememberMe" />
          <label for="remember" style="color: #93A0B9;">Запомнить меня</label>
        </div>
        <div class="forgot-password">
          <a href="#">Забыл пароль</a>
        </div>
      </div>
      <button type="submit" class="btn">Вход</button>
      <div class="or-separator">
        <span>или</span>
      </div>
      <div class="social-buttons">
        <div class="social-button google">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_2799)">
          <path d="M24.8297 13.2882C24.8297 12.4359 24.7606 11.5791 24.6132 10.7407H12.7881V15.5684H19.5598C19.2788 17.1254 18.3759 18.5028 17.0538 19.3781V22.5105H21.0938C23.4662 20.327 24.8297 17.1024 24.8297 13.2882Z" fill="#4285F4"/>
          <path d="M12.789 25.5371C16.1702 25.5371 19.0217 24.4269 21.0993 22.5105L17.0593 19.3781C15.9353 20.1428 14.4842 20.5758 12.7936 20.5758C9.52294 20.5758 6.74978 18.3692 5.75476 15.4026H1.5858V18.6318C3.71404 22.8652 8.04883 25.5371 12.789 25.5371Z" fill="#34A853"/>
          <path d="M5.74926 15.4025C5.22411 13.8455 5.22411 12.1595 5.74926 10.6025V7.37326H1.58492C-0.193223 10.9157 -0.193223 15.0893 1.58492 18.6317L5.74926 15.4025Z" fill="#FBBC04"/>
          <path d="M12.789 5.42472C14.5764 5.39708 16.3038 6.06964 17.5983 7.3042L21.1776 3.72489C18.9111 1.59665 15.9031 0.426578 12.789 0.46343C8.04883 0.46343 3.71404 3.13525 1.5858 7.3733L5.75015 10.6025C6.74056 7.63127 9.51833 5.42472 12.789 5.42472Z" fill="#EA4335"/>
          </g>
          <defs>
          <clipPath id="clip0_1_2799">
          <rect width="25.0736" height="25.0736" fill="white" transform="translate(0.000854492 0.462585)"/>
          </clipPath>
          </defs>
          </svg>
        </div>
        <div class="social-button github">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.267 2.552C11.895 2.552 10.5365 2.82223 9.26898 3.34726C8.00145 3.87229 6.84974 4.64183 5.87962 5.61196C3.92036 7.57121 2.81966 10.2285 2.81966 12.9993C2.81966 17.6171 5.81805 21.5348 9.96564 22.9243C10.488 23.0079 10.6552 22.684 10.6552 22.4019V20.6363C7.76126 21.2632 7.14486 19.2364 7.14486 19.2364C6.66429 18.0245 5.98521 17.7006 5.98521 17.7006C5.0345 17.0529 6.05834 17.0738 6.05834 17.0738C7.10307 17.1469 7.65678 18.1499 7.65678 18.1499C8.5657 19.7379 10.1015 19.2677 10.697 19.017C10.791 18.3379 11.0626 17.8782 11.3551 17.6171C9.03583 17.3559 6.6016 16.4574 6.6016 12.477C6.6016 11.3173 6.9986 10.3875 7.67768 9.64574C7.5732 9.38456 7.20755 8.29804 7.78215 6.88765C7.78215 6.88765 8.65973 6.60557 10.6552 7.95328C11.4805 7.72343 12.379 7.60851 13.267 7.60851C14.155 7.60851 15.0535 7.72343 15.8788 7.95328C17.8743 6.60557 18.7519 6.88765 18.7519 6.88765C19.3265 8.29804 18.9608 9.38456 18.8563 9.64574C19.5354 10.3875 19.9324 11.3173 19.9324 12.477C19.9324 16.4679 17.4877 17.3454 15.158 17.6066C15.5341 17.9305 15.8788 18.5678 15.8788 19.5394V22.4019C15.8788 22.684 16.046 23.0183 16.5788 22.9243C20.7264 21.5244 23.7143 17.6171 23.7143 12.9993C23.7143 11.6274 23.4441 10.2688 22.9191 9.00132C22.3941 7.73379 21.6245 6.58208 20.6544 5.61196C19.6843 4.64183 18.5326 3.87229 17.265 3.34726C15.9975 2.82223 14.639 2.552 13.267 2.552Z" fill="white"/>
          </svg>
        </div>
        <div class="social-button discord">
          <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_2808)">
          <path d="M21.6988 1.87951C20.0545 1.11013 18.3149 0.563459 16.526 0.253937C16.3032 0.65678 16.0429 1.1986 15.8633 1.62966C13.9346 1.33964 12.0236 1.33964 10.1304 1.62966C9.95095 1.1987 9.68474 0.65678 9.45986 0.253937C7.66924 0.563601 5.92816 1.11167 4.28304 1.88353C1.00936 6.83057 0.121894 11.6546 0.56558 16.4104C2.7369 18.0318 4.84112 19.0168 6.90989 19.6614C7.42403 18.9544 7.87852 18.2058 8.26866 17.4235C7.52588 17.1407 6.80982 16.7922 6.12898 16.3821C6.30815 16.2494 6.4831 16.111 6.65357 15.9672C10.7792 17.8968 15.2619 17.8968 19.3383 15.9672C19.5095 16.11 19.6844 16.2484 19.8628 16.3821C19.1808 16.7933 18.4634 17.1425 17.7192 17.4255C18.1115 18.2111 18.5652 18.9603 19.0779 19.6634C21.1487 19.0189 23.2549 18.0339 25.4262 16.4104C25.9468 10.8973 24.5368 6.11754 21.6988 1.87951ZM8.83076 13.4857C7.59226 13.4857 6.57659 12.3294 6.57659 10.9215C6.57659 9.51355 7.57062 8.35536 8.83076 8.35536C10.091 8.35536 11.1066 9.51149 11.0849 10.9215C11.0869 12.3294 10.091 13.4857 8.83076 13.4857ZM17.161 13.4857C15.9225 13.4857 14.9069 12.3294 14.9069 10.9215C14.9069 9.51355 15.9008 8.35536 17.161 8.35536C18.4212 8.35536 19.4368 9.51149 19.4152 10.9215C19.4152 12.3294 18.4212 13.4857 17.161 13.4857Z" fill="#5865F2"/>
          </g>
          <defs>
          <clipPath id="clip0_1_2808">
          <rect width="25.0736" height="19.4908" fill="white" transform="translate(0.459534 0.253967)"/>
          </clipPath>
          </defs>
          </svg>
        </div>
      </div>
      <div class="no-account">
        <span>У вас нет учетной записи?</span>
        <a href="/auth/registration">Регистрация</a>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/store/auth';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const username = ref('');
const password = ref('');
const rememberMe = ref(false);
const errorMessage = ref('');
const next = route.query.next || '/main';

const auth = async () => {
  const result = await authStore.login({ username: username.value, password: password.value });
  
  if (result.success) {
    router.push(next);
    
  } else {
    errorMessage.value = 'Неверные данные. Пожалуйста, попробуйте снова.';
  }
};
</script>

<style scoped>
.auth-page {
  text-align: center;
  margin-top: 50px;
  color: white;
  background-color: #18191c;
  min-height: 100vh;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
}

.error-message {
  color: red;
  margin-bottom: 15px;
  font-size: 16px;
}

.form-group {
  margin-bottom: 15px;
  position: relative;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  max-width: 476px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #5B657E;
  font-size: 20px;
  border-radius: 14px;
  background-color: #20242D;
  color: white;
  outline: none;
  transition: border-color 0.3s ease;
}

input::placeholder {
  color: #5B657E;
}

input:focus {
  border-color: #007bff;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.remember-me {
  display: flex;
  align-items: center;
}

.remember-me input {
  margin-right: 5px;
  background-color: #20242D;
  border: 2px solid #5B657E;
  border-radius: 10px;
  width: 30px;
  height: 30px;
  appearance: none;
  position: relative;
}

.remember-me input:checked::after {
  content: '✔';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #5B657E;
  font-size: 16px;
}

.forgot-password a {
  color: #1A5CFF;
  font-size: 20px;
  text-decoration: none;
}

.forgot-password a:hover {
  text-decoration: underline;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 14px;
  cursor: pointer;
  width: 100%;
  font-size: 20px;
}

button:hover {
  background-color: #0056b3;
}

.or-separator {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  position: relative;
  width: 100%;
}

.or-separator::before,
.or-separator::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #20242D;
  margin: 0 10px;
}

.or-separator span {
  color: #93A0B9;
  font-size: 16px;
  background-color: #18191c;
  padding: 0 10px;
}

.social-buttons {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 20px;
}

.social-button {
  background-color: #20242D;
  border-radius: 10px;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.social-button:hover {
  background-color: #333;
}

.social-button img {
  width: 24px;
  height: 24px;
}

.no-account {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  color: #93A0B9;
  font-size: 20px;
}

.no-account a {
  color: #1A5CFF;
  margin-left: 5px;
  text-decoration: none;
}

.no-account a:hover {
  text-decoration: underline;
}
</style>
