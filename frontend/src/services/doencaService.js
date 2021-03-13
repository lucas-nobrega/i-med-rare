import api from '../services/api'

export default {
    getRanking(quantidade) {
        return api.get('doencas?relatorio=pacientes+&quant='+quantidade)
            .then(response => response.data)
    },
    cadastro(dados_cadastrais) {
        return api.post('doencas', dados_cadastrais)
            .then(response => response.data)
    },
    getDoencas() {
        return api.get('doencas')
            .then(response => response.data)
    },
    putDoenca(dados, id) {
        return api.put('doencas/'+id, dados)
            .then(response => response.data)
    },
    deleteDoenca(id) {
        return api.delete('doencas/' + id)
            .then(response => response.data)
    },
    getDoenca(id) {
        return api.get('doencas/'+id)
            .then(response => response.data)
    },
}