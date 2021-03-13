import api from './api'

export default {
    login(credenciais) {
        return api.post('user/login', credenciais)
            .then(response => response.data)
    },
    verLogin() {
        return api.get('user/verlogin')
            .then(response => response.data)
    },
    logout() {
        return api.get('user/logout')
            .then(response => response.data)
    },
    getSexos() {
        return api.get('sexos')
            .then(response => response.data)
    }
}