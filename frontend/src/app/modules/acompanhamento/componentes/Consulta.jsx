import React from "react";

import {
    Button,
    Input,
    Label,
    Form,
    FormGroup,
    CardBody,
    Row,
    Col,
    Card,
    CardTitle,
    Spinner,
} from "reactstrap";
import {
    withRouter
} from "react-router-dom";
import acompanhamentoService from "services/acompanhamentoService";

class Consulta extends React.Component {
    constructor(props) {
        super();
        this.state = {
            aguardandoDados: false,
            edicaoDesabilitada: true,
            dados: {},
        };
    }

    componentDidMount() {
        console.info(this.props.match.params.idAcompanhamento);
        this.setState({ aguardandoDados: true });
        acompanhamentoService
            .getAcompanhamento(this.props.match.params.idAcompanhamento)
            .then((resposta) => {
                console.info(resposta);
                this.setState({
                    dados: resposta,
                    aguardandoDados: false,
                });
            });
    }

    render() {
        console.info(this.props);
        return (
            <div className="content">
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Consulta Realizada</CardTitle>
                        {this.state.aguardandoDados && (
                            <div>
                                <Spinner color="primary" />
                            </div>
                        )}

                        {!this.state.aguardandoDados && (
                            <Form className="form-consulta">
                                <Row form>
                                    <Col md={12}>
                                        <FormGroup>
                                            <Label for="exampleEmail">
                                                Médico que fez o atendimento
                                            </Label>
                                            <Input
                                                className="form-consulta"
                                                type="text"
                                                name="nomeMedico"
                                                id="nomeMedico"
                                                disabled={
                                                    this.state
                                                        .edicaoDesabilitada
                                                }
                                                defaultValue={
                                                    this.state.dados.medico_nome
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="dataAcompanhamento">
                                                Data de Acompanhamento
                                            </Label>
                                            <Input
                                                className="form-consulta"
                                                type="date"
                                                name="dataAcompanhamento"
                                                id="dataAcompanhamento"
                                                disabled={
                                                    this.state
                                                        .edicaoDesabilitada
                                                }
                                                defaultValue={
                                                    this.state.dados
                                                        .data_acompanhamento
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="dataProximaConsulta">
                                                Data Próxima Consulta
                                            </Label>
                                            <Input
                                                className="form-consulta"
                                                type="date"
                                                name="dataProximaConsulta"
                                                id="dataProximaConsulta"
                                                disabled={
                                                    this.state
                                                        .edicaoDesabilitada
                                                }
                                                defaultValue={
                                                    this.state.dados
                                                        .data_proxima_consulta
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label for="sintomasIdentificados">
                                        Sintomas Identificados
                                    </Label>
                                    <Input
                                        className="form-consulta"
                                        type="textarea"
                                        name="sintomasIdentificados"
                                        id="sintomasIdentificados"
                                        disabled={this.state.edicaoDesabilitada}
                                        defaultValue={
                                            this.state.dados
                                                .sintomas_identificados
                                        }
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="orientacoesRealizadas">
                                        Orientações Realizadas
                                    </Label>
                                    <Input
                                        className="form-consulta"
                                        type="textarea"
                                        name="orientacoesRealizadas"
                                        id="orientacoesRealizadas"
                                        disabled={this.state.edicaoDesabilitada}
                                        defaultValue={
                                            this.state.dados
                                                .orientacoes_realizadas
                                        }
                                    />
                                </FormGroup>
                            </Form>
                        )}
                        <Button
                            color="info"
                            onClick={() => this.props.history.goBack()}
                        >
                            Voltar
                        </Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default withRouter(Consulta);
