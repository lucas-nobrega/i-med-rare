import api from '../services/api'

export default {
    getEstados() {
        return api.get('estados')
            .then(response => response.data)
    },
    getCidades(estado) {
        return api.get('cidades?estado_id='+estado)
            .then(response => response.data)
    },
}