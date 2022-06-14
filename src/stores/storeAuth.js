import { defineStore } from 'pinia'
import AuthService from '../services/auth.service.js';
import Toast from "../directives/toast";

const user = JSON.parse(localStorage.getItem('auth_username'));

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: {
            status: {
                loggedIn: false
            },
            username: null,
            roles: []
        }
    }),
    getters: {
        getUsername: (state) => {
            return state.user.username
        },
        isLoggedIn: (state) => {
            return state.user.status.loggedIn
        },
        getRoles: (state) => {
            return state.user.roles
        },
        isAdmin: (state) => {
            return state.user.roles.includes("Admin")
        }
    },
    actions: {
        initializeAuth() {
            return new Promise((resolve) => {
                if(user) {
                    this.user.status.loggedIn = true
                    this.user.username = user
                    AuthService.check(user)
                        .then(response => {
                            if(response.success === true) {
                                this.user.roles = response.data.roles
                            }
                        })
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
                    if(response.success === true) {
                        this.user.username = response.data.username
                        this.user.status.loggedIn = true
                        Toast(350,'success', 'top-right', response.message)
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
                    if(response.success === true) {
                        this.user.username = response.data.username
                        this.user.status.loggedIn = true
                        this.user.roles = response.data.roles
                        Toast(350,'success', 'top', response.message)
                    }
                })
                .catch(error => {
                    this.user.status.loggedIn = false
                    this.user.username = null
                    return Promise.reject(error);
                })
        },
        async logout() {
            await AuthService.logout(this.user)
                .then(response => {
                    if(response.success === true) {
                        this.user.status.loggedIn = false;
                        this.user.username = null;
                        Toast(350,'info', 'top-right', response.message)
                    }
                })
                .catch(error => {
                    this.user.status.loggedIn = false
                    this.user.username = null
                    return Promise.reject(error);
                })
        },
    }
})