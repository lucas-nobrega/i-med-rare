import React from "react";
import pacienteService from "services/pacienteService";

import {
    Switch,
    Route,
    withRouter,
} from "react-router-dom";
import Acompanhamentos from "./Acompanhamentos";
import Casos from "./Casos";
import Consulta from "./Consulta";
import NovaConsulta from "./NovaConsulta";

class RotasAcompanhamento extends React.Component {
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
                        <Casos />
                    </Route>
                    <Route exact path={`${this.props.match.path}/:idCaso/acompanhamento`}>
                        <Acompanhamentos podeEditar={true} />
                    </Route>
                    <Route exact path={`${this.props.match.path}/:idCaso/acompanhamento/:idAcompanhamento/consulta`}>
                        <Consulta />
                    </Route>
                    <Route exact path={`${this.props.match.path}/:idCaso/acompanhamento/novaconsulta`}>
                        <NovaConsulta />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(RotasAcompanhamento);
