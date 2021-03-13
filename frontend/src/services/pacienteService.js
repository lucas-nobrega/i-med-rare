import api from './api'

export default {
   getPaciente(id) {
      return api.get('pacientes/' + id)
         .then(response => response.data)
   },
   getPacientes() {
      return api.get('pacientes/')
         .then(response => response.data)
   },
   getPacientesSemDoenca() {
      return api.get('pacientes/semdoenca')
         .then(response => response.data)
   },
   // Retorna os pacientes que tenham doenças cadastras e 
   // estejam atribuidos ao médico logado
   getPacientesMedico() {
      return api.get('/pacientedoencas?quant=15')
         .then(response => response.data)
   },
   cadastro(dados_cadastrais) {
      return api.put('pacientes/' + dados_cadastrais.id, dados_cadastrais)
         .then(response => response.data)
   },
   getPacienteIdDoencas(idPaciente) {
      return api.get('pacientes/' + idPaciente + '/doencas')
         .then(response => response.data)
   },
   getPacientesCount() {
      return api.get('pacientes/pacientescount')
         .then(response => response.data)
   },
   cadastroPaciente(dados_cadastrais) {
      return api.post('pacientes', dados_cadastrais)
         .then(response => response.data)
   },
   getDoencas() {
      return api.get('doencas')
         .then(response => response.data)
   },
   getPacienteFiltros(url) {
      return api.get('pacientes?' + url)
         .then(response => response.data)
   },
   cadastrarDoenca(idPaciente, dados) {
      return api.post('pacientes/' + idPaciente + '/doencas', dados)
         .then(response => response.data)
   },
   getPacientesByUF(){
       return api.get('pacientes/pacientescountbyuf').then(response => response.data)
   }
}