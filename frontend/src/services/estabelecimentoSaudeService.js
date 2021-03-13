import api from '../services/api'

export default {
    getEstabelecimentoSaudes() {
        return api.get('estabelecimentosaudes')
            .then(response => response.data)
    },
    cadastro(dados_cadastrais) {
        return api.post('estabelecimentosaudes', dados_cadastrais)
            .then(response => response.data)
    },
    putEstabelecimentoSaude(dados, id) {
        return api.put('estabelecimentosaudes/'+id, dados)
            .then(response => response.data)
    },
    deleteEstabelecimentoSaude(id) {
        return api.delete('estabelecimentosaudes', id)
            .then(response => response.data)
    },
}