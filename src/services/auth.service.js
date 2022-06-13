import http from "../http-common.js";

class AuthService {
    register(user) {
        return http.post('register', {
            username: user.username,
            email: user.email,
            password: user.password,
            confirmation: user.confirmation
        }).then(response => {
            if(response.data.success === true) {
                localStorage.setItem('auth_username', JSON.stringify(response.data.data.username));
                localStorage.setItem('auth_token', JSON.stringify(response.data.data.token));
            }
            return response.data
        })
    }

    login(user) {
        return http.post('login', {
            username: user.username,
            password: user.password
        }).then(response => {
            if(response.data.success === true) {
                localStorage.setItem('auth_username', JSON.stringify(response.data.data.username));
                localStorage.setItem('auth_token', JSON.stringify(response.data.data.token));
            }
            return response.data
        })
    }

    logout() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_username');
    }
}

export default new AuthService();