import React from "react";
import pacienteService from "services/pacienteService";

import {
    Switch,
    Route,
    withRouter,
} from "react-router-dom";
import PacienteDoencas from "./PacienteDoencas";
import Consulta from "app/modules/acompanhamento/componentes/Consulta";
import Acompanhamentos from "app/modules/acompanhamento/componentes/Acompanhamentos";


class RotasPaciente extends React.Component {
    constructor(props) {
        super(props);
        // this.props { path, url } = useRouteMatch();
        this.state = {
            aguardandoDados: false,
            pacientes: [],
        };
    }

    visualizarAcompanhamento = (paciente) => {
        console.info(paciente.caso_id);
    };

    componentDidMount() {
        this.setState({ aguardandoDados: true });
        console.info(this.props.match.path)
        // Carregar Pacientes do Médico Logado
        pacienteService.getPacientesMedico().then((resposta) => {
            this.setState({
                pacientes: resposta,
                aguardandoDados: false,
            });
        });
    }

    render() {
       
        console.info(this.props);
        return (
            <div className="content">
                <Switch>
                    <Route exact path={`${this.props.match.path}`}>
                        <PacienteDoencas />
                    </Route>
                    <Route exact path={`${this.props.match.path}/:idCaso/acompanhamento`}>
                        <Acompanhamentos podeEditar={false} />
                    </Route>
                    <Route exact path={`${this.props.match.path}/:idCaso/acompanhamento/:idAcompanhamento/consulta`}>
                        <Consulta />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(RotasPaciente);
