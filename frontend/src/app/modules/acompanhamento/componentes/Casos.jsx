import React from "react";
import pacienteService from "services/pacienteService";

import {
    Form,
    CardBody,
    Row,
    Col,
    Table,
    Card,
    CardTitle,
    Spinner,
} from "reactstrap";
import {
    Link,
    withRouter,
} from "react-router-dom";
//import Acompanhamentos from "./Acompanhamentos";

class Casos extends React.Component {
    constructor(props) {
        super();
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
                {/* <Row>
                    <Col className="col-md-12">
                        <div>
                            <Breadcrumb tag="nav" listTag="div">
                                <BreadcrumbItem tag="a" href="/">
                                    Inicio
                                </BreadcrumbItem>
                                <BreadcrumbItem tag="a" href="/acompanhamento">
                                    Acompanhamento
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row> */}
                <Row>
                    <Col className="col-md-12">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Selecione o caso</CardTitle>
                                {this.state.aguardandoDados && (
                                    <div>
                                        <Spinner color="primary" />
                                    </div>
                                )}
                                {!this.state.aguardandoDados && (
                                    <Form>
                                        <Row>
                                            <Col>
                                                <Table>
                                                    <thead className="text-primary">
                                                        <tr>
                                                            <th>Nome</th>
                                                            <th>Doença</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {this.state.pacientes.map(
                                                            (
                                                                paciente,
                                                                index
                                                            ) => (
                                                                <tr key={index}>
                                                                    <td>
                                                                        <Link
                                                                            to={`${this.props.match.url}/${paciente.caso_id}/acompanhamento`}
                                                                        >
                                                                            {
                                                                                paciente.nome
                                                                            }
                                                                        </Link>
                                                                    </td>
                                                                    <td>
                                                                        <Link
                                                                            to={`${this.props.match.url}/${paciente.caso_id}/acompanhamento`}
                                                                        >
                                                                            {
                                                                                paciente.doenca
                                                                            }
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Form>
                                )}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(Casos);
