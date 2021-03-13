import React from "react";
import acompanhamentoService from "services/acompanhamentoService";

import {
    Button,
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

class Acompanhamentos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            aguardandoDados: false,
            acompanhamentos: [],
        };
    }

    visualizarAcompanhamento = (acompanhamento) => {
        console.info(acompanhamento.acompanhamento_id);
    };

    componentDidMount() {
        console.info(this.props.match.params.idCaso);
        this.setState({ aguardandoDados: true });
        acompanhamentoService
            .getAcompanhamentos(this.props.match.params.idCaso)
            .then((resposta) => {
                this.setState({
                    acompanhamentos: resposta,
                    aguardandoDados: false,
                });
            });
    }

    render() {
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
                                <CardTitle tag="h5">Acompanhamento</CardTitle>
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
                                                            <th>Data</th>
                                                            <th>Médico</th>
                                                            <th>
                                                                Prox. Consulta
                                                            </th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {this.state.acompanhamentos.map(
                                                            (
                                                                acompanhamento,
                                                                index
                                                            ) => (
                                                                <tr key={index}>
                                                                    <td>
                                                                        <Link
                                                                            to={`${this.props.match.url}/${acompanhamento.acompanhamento_id}/consulta`}
                                                                        >
                                                                            {
                                                                                acompanhamento.data_acompanhamento
                                                                            }
                                                                        </Link>
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            acompanhamento.medico_nome
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            acompanhamento.data_proxima_consulta
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                        <Button
                                            color="info"
                                            onClick={() =>
                                                this.props.history.goBack()
                                            }
                                        >
                                            Voltar
                                        </Button>
                                        {this.props.podeEditar && (
                                        <Link
                                            to={`${this.props.match.url}/novaconsulta`}
                                        >
                                            <Button color="primary">
                                                Cadastrar Nova Consulta
                                            </Button>
                                        </Link>
                                        )}
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

export default withRouter(Acompanhamentos);
