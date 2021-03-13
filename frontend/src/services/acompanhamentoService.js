import api from './api'

export default {
   getAcompanhamentosCount() {
      return api.get('acompanhamentos/acompanhamentosCount')
         .then(response => response.data)
   },
   getAcompanhamentos(idCaso) {
      return api.get('acompanhamentos?caso_id=' + idCaso)
         .then(response => response.data)
   },
   getAcompanhamento(idAcompanhamento) {
      return api.get('acompanhamentos/' + idAcompanhamento)
         .then(response => response.data)
   },
   salvarAcompanhamento(dados) {
      return api.post('acompanhamentos', dados)
      .then(response => response.data)
   }

}