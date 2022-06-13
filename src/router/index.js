import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'

// lazy-loaded
const Nav = () => import('../components/NavBar.vue')

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: WelcomeView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/app/',
            name: 'home',
            components: {
                Nav,
                default: () => import('../views/HomeView.vue'),
            },
        },
        {
            path: '/app/anim',
            name: 'animation',
            components: {
                Nav,
                default: () => import('../views/modules/animation/MainAnimation.vue'),
            },
        },
        {
            path: '/app/eco',
            name: 'economy',
            components: {
                Nav,
                default: () => import('../views/modules/economy/MainEconomy.vue'),
            },
        },
        {
            path: '/app/secu',
            name: 'security',
            components: {
                Nav,
                default: () => import('../views/modules/security/MainSecurity.vue'),
            },
        },
        {
            path: '/app/company',
            name: 'company',
            components: {
                Nav,
                default: () => import('../views/modules/company/MainCompany.vue'),
            },
        },
        {
            path: '/app/festival',
            name: 'festival',
            components: {
                Nav,
                default: () => import('../views/modules/festival/MainFestival.vue'),
            },
        },
        {
            path: '/app/profil',
            name: 'profil',
            components: {
                Nav,
                default: () => import('../views/auth/ProfilView.vue'),
            },
        },
    ]
})

export default router