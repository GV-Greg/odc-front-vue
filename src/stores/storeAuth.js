import { defineStore } from 'pinia'
import AuthService from '../services/auth.service.js';

const user = JSON.parse(localStorage.getItem('auth_username'));

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: {
            status: {
                loggedIn: false
            },
            username: null
        }
    }),
    getters: {
        getUsername: (state) => {
            return state.user.username
        },
        isLoggedIn: (state) => {
            return state.user.status.loggedIn
        }
    },
    actions: {
        initializeAuth() {
            return new Promise((resolve) => {
                if(user) {
                    this.user.status.loggedIn = true
                    this.user.username = user
                } else {
                    this.user.status.loggedIn = false
                    this.user.username = null
                }
                resolve(true)
            })
        },
        async register(user) {
            await AuthService.register(user)
                .then(response => {
                    if(response.data.success === true) {
                        this.user.username = response.data.username
                        this.user.status.loggedIn = true
                    }
                })
                .catch(error => {
                    this.user.status.loggedIn = false
                    this.user.username = null
                    return Promise.reject(error);
                })
        },
        async login(user) {
            await AuthService.login(user)
                .then(response => {
                    if(response.data.success === true) {
                        this.user.username = response.data.username
                        this.user.status.loggedIn = true
                    }
                })
                .catch(error => {
                    this.user.status.loggedIn = false
                    this.user.username = null
                    return Promise.reject(error);
                })
        },
        logout() {
            AuthService.logout()
            this.user.status.loggedIn = false;
            this.user.username = null;
        },
    }
})