import {
  createRouter,
  createWebHistory
} from 'vue-router'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/my'
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('@/views/Auth.vue'),
    },
    {
      path: '/auth/registration',
      name: 'reg',
      component: () => import('@/views/Register.vue'),
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/Cart.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutUs.vue'),
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/views/ActiveView.vue'),
    }
  ],
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) document.title = to.meta.title + " | Store";
    const path = ["/auth/login", "/auth/registration", "/auth/resetpassword"];
    console.log(sessionStorage.getItem("accessToken"));
    
    if (path.includes(to.path) || sessionStorage.getItem("accessToken")) {
        return next();
    }
    next(`/auth/login?next=${to.path}`);
});

export default router
