import api from './api'

export default {
    getEspecialidades() {
        return api.get('especialidades')
            .then(response => response.data)
    },
    cadastro(dados_cadastrais) {
        return api.post('medicos', dados_cadastrais)
            .then(response => response.data)
    },
    getMedicosCount() {
        return api.get('medicos/medicoscount')
            .then(response => response.data)
    },
    getMedico(id) {
        return api.get('medicos/'+id)
           .then(response => response.data)
     },
}