import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: () => import('../views/WelcomeView.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/auth/LoginView.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/auth/RegisterView.vue')
        },
        {
            path: '/app/',
            name: 'home',
            components: {
                Nav: () => import('../components/NavBar.vue'),
                default: () => import('../views/HomeView.vue'),
            },
        },
        {
            path: '/app/anim',
            name: 'animation',
            components: {
                Nav: () => import('../components/NavBar.vue'),
                default: () => import('../views/modules/animation/MainAnimation.vue'),
            },
        },
        {
            path: '/app/eco',
            name: 'economy',
            components: {
                Nav: () => import('../components/NavBar.vue'),
                default: () => import('../views/modules/economy/MainEconomy.vue'),
            },
        },
        {
            path: '/app/secu',
            name: 'security',
            components: {
                Nav: () => import('../components/NavBar.vue'),
                default: () => import('../views/modules/security/MainSecurity.vue'),
            },
        },
        {
            path: '/app/company',
            name: 'company',
            components: {
                Nav: () => import('../components/NavBar.vue'),
                default: () => import('../views/modules/company/MainCompany.vue'),
            },
        },
        {
            path: '/app/festival',
            name: 'festival',
            components: {
                Nav: () => import('../components/NavBar.vue'),
                default: () => import('../views/modules/festival/MainFestival.vue'),
            },
        },
        {
            path: '/app/profil',
            name: 'profil',
            components: {
                Nav: () => import('../components/NavBar.vue'),
                default: () => import('../views/auth/ProfilView.vue'),
            },
        },
    ]
})

export default router