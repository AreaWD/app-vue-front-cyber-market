<template>
  <div class="header">
    <div class="logo">
      <img src="/img/logo.svg" alt="">
    </div>
    <div class="nav-buttons">
      <div style="color: #93A0B9; cursor: pointer;" @click="navigateTo('/main')">Каталог</div>
      <div style="color: #93A0B9; cursor: pointer; margin: 0 10px;" @click="navigateTo('/about')">Контакты</div>
    </div>
    <div class="auth-buttons">
      <template v-if="isRegistrationPage && !isAuth">
        <button @click="navigateTo('/auth/login')">Вход</button>
      </template>
      <template v-else-if="isLoginPage && !isAuth">
        <button @click="navigateTo('/auth/registration')">Регистрация</button>
      </template>
      <template v-else-if="isAuth">
        <button @click="logout">Выход</button>
      </template>
    </div>
  </div>
  <div class="main-content">
    <router-view />
  </div>
</template>

<script setup>
import { useAuthStore } from '@/store/auth';
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();

onMounted(() => {
  authStore.loadTokensFromSessionStorage();
});

const isAuth = computed(() => {
  return authStore.accessToken !== null;
});

const isLoginPage = computed(() => {
  return route.path === '/auth/login';
});

const isRegistrationPage = computed(() => {
  return route.path === '/auth/registration';
});

const navigateTo = (path) => {
  router.push(path);
};

const logout = () => {
  authStore.logout();
  navigateTo('/auth/login');
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #18191c;
  color: white;
  padding: 10px 20px;
  border-bottom: #5B657E solid 1px;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
}

.nav-buttons {
  display: flex;
  gap: 10px;
}

.nav-buttons button,
.auth-buttons button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  padding: 10px 30px;
}

.nav-buttons button:hover,
.auth-buttons button:hover {
  background-color: #0056b3;
}

.main-content {
  background-color: #18191c;
  color: white;
  min-height: calc(100vh - 60px);
  padding: 20px;
}
</style>
