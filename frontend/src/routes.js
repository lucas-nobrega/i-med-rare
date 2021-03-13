import Login from "app/modules/usuario/componentes/Login"
import CadastroMedico from "app/modules/medico/componentes/CadastroMedico"
import CadastroPaciente from "app/modules/paciente/componentes/CadastroPaciente"
import CadastroDoencas from "app/modules/doencas/componentes/CadastroDoencas"
import PaginaInicial from "app/modules/dashboard/componentes/PaginaInicial";
import Pacientes from "app/modules/paciente/componentes/Pacientes";
import RotasPaciente from "app/modules/paciente/componentes/RotasPaciente";
import RotasAcompanhamento from "app/modules/acompanhamento/componentes/RotasAcompanhamento";

import CadastroDoenca from "app/modules/paciente/componentes/CadastroDoenca"
import VisualizarPaciente from "app/modules/paciente/componentes/VisualizarPaciente";

var routes = [
  {
    path: "/login",
    name: "",
    icon: "nc-icon nc-single-02",
    component: Login,
    layout: "/admin",
  },

  {
    path: "/cadastro/medico",
    name: "",
    icon: "nc-icon nc-single-02",
    component: CadastroMedico,
    layout: "/admin",
  },
  {
    path: "/cadastro/paciente",
    name: "",
    icon: "nc-icon nc-single-02",
    component: CadastroPaciente,
    layout: "/admin",
  },
  {
    path: "/cadastro/doencas",
    name: "Gerenciamento de Doenças",
    icon: "nc-icon nc-sound-wave",  
    component: CadastroDoencas,
    layout: "/admin",
    permissions: ['medico', 'medicoadm'],
  },
  {
    path: "/pacientes",
    name: "Gerenciamento de Pacientes",
    icon: "nc-icon nc-circle-10",
    component: Pacientes,
    layout: "/admin",
    permissions: ['medico', 'medicoadm'],
  },
  {
    path: "/meus_acompanhamentos",
    name: "Meus acompanhamentos",
    icon: "nc-icon nc-paper",
    component: RotasPaciente,
    layout: "/admin",
    permissions: ['paciente'],
  },

  {
   path: "/meus_dados",
   name: "Meus dados",
   icon: "nc-icon nc-paper",
   component: VisualizarPaciente,
   layout: "/admin",
   permissions: ['paciente'],
 },
  
  {
    path: "/casos",
    name: "Casos de Acompanhamento",
    icon: "nc-icon nc-briefcase-24",
    component: RotasAcompanhamento,
    layout: "/admin",
    permissions: ['medico', 'medicoadm'],
  },
  {
    path: "/cadastro/pacientedoenca",
    name: "Cadastrar Doença do Paciente",
    icon: "nc-icon nc-single-02",
    component: CadastroDoenca,
    layout: "/admin",
    permissions: ['medico', 'medicoadm'],
  },

  // Rotas do Template ## RERVISAR
  {
    path: "/pagina_inicial",
    name: "Pagina Inicial",
    icon: "nc-icon nc-bank",
    component: PaginaInicial,
    layout: "/admin",
  },
];
export default routes;
