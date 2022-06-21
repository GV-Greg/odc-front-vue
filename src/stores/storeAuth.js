import { defineStore } from 'pinia'
import AuthService from '../services/auth.service.js';
import Toast from "../directives/toast";

const user = JSON.parse(localStorage.getItem('auth_username'));

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: !!localStorage.getItem('auth_username'),
        username: null,
        roles: []
    }),
    getters: {
        getIsLoggedIn: (state) => {
            return state.isLoggedIn
        },
        getUsername: (state) => {
            return state.username
        },
        getRoles: (state) => {
            return state.roles
        },
        isAdmin: (state) => {
            return state.roles.includes("Admin")
        }
    },
    actions: {
        setIsLoggedIn(boolean) {
            this.isLoggedIn = boolean
        },
        setUsername(user) {
            this.username = user;
        },
        setRoles(roles) {
            this.roles = roles;
        },
        // initializeAuth() {
        //     return new Promise((resolve) => {
        //         if(user) {
        //             this.user.status.loggedIn = true
        //             this.user.username = user
        //             AuthService.check(user)
        //                 .then(response => {
        //                     if(response.success === true) {
        //                         this.user.roles = response.data.roles
        //                     }
        //                 })
        //         } else {
        //             this.user.status.loggedIn = false
        //             this.user.username = null
        //         }
        //         resolve(true)
        //     })
        // },
        async register(user) {
            await AuthService.register(user)
                .then(response => {
                    if(response.success === true) {
                        this.username = response.data.username
                        this.isLoggedIn = true
                        Toast(350,'success', 'top-right', response.message)
                    }
                })
                .catch(error => {
                    this.isLoggedIn = false
                    this.username = null
                    return Promise.reject(error);
                })
        },
        async login(user) {
            await AuthService.login(user)
                .then(response => {
                    if(response.success === true) {
                        this.username = response.data.username
                        this.isLoggedIn = true
                        this.roles = response.data.roles
                        Toast(350,'success', 'top', response.message)
                    }
                })
                .catch(error => {
                    this.isLoggedIn = false
                    this.username = null
                    return Promise.reject(error);
                })
        },
        async logout(user) {
            await AuthService.logout(user)
                .then(response => {
                    if(response.success === true) {
                        this.isLoggedIn = false;
                        this.username = null;
                        this.roles = [];
                        Toast(350,'info', 'top-right', response.message)
                    }
                })
                .catch(error => {
                    return Promise.reject(error);
                })
        },
    }
})