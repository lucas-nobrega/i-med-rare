import React from "react";
import moment from "moment";
import { connect } from "react-redux";
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
    Alert,
} from "reactstrap";
import { withRouter } from "react-router-dom";
import acompanhamentoService from "services/acompanhamentoService";

class NovaConsulta extends React.Component {
    constructor(props) {
        super();
        this.state = {
            aguardandoDados: false,
            edicaoDesabilitada: false,
            dataAtual: moment().format("YYYY-MM-DD"),
            tipoMensagem: "",
            mensagemRetorno: "",
            cadastradoComSucesso: false,
        };
    }

    fecharMensagem = () => {
        this.setState({
            mensagemRetorno: "",
        });
    };

    cadastrar = (event) => {
      event.preventDefault();
        console.info("Cadastrando nova consulta");
        const data = new FormData(event.target);
        const dados = {
            sintomasIdentificados: data.get("sintomasIdentificados"),
            orientacoesRealizadas: data.get("orientacoesRealizadas"),
            dataAcompanhamento: data.get("dataAcompanhamento"),
            dataProximaConsulta: data.get("dataProximaConsulta"),
            idMedico: this.props.dadosUsuario.medico.id,
            idCaso: this.props.match.params.idCaso,
        };
        if (
            dados.sintomasIdentificados === "" ||
            dados.orientacoesRealizadas === "" ||
            dados.dataAcompanhamento === "" ||
            dados.dataProximaConsulta === "" 

        ) {
            this.setState({
                mensagemRetorno: "Todos os campos precisam ser preenchidos",
                tipoMensagem: "danger",
            });
            return true;
        }
        console.info(dados);
        this.setState({ aguardandoDados: true, mensagemRetorno: "" });
        acompanhamentoService.salvarAcompanhamento(dados).then((resposta) => {
           console.info(resposta);
            if (resposta.resultado === "erro") {
                this.setState({
                    aguardandoDados: false,
                    mensagemRetorno: resposta.motivo,
                    tipoMensagem: "danger",
                });
                return true;
            }
            this.setState({
                aguardandoDados: false,
                mensagemRetorno: "Dados cadastrados com sucesso!",
                tipoMensagem: "success",
                cadastradoComSucesso: true,
            });
        });
    };

    render() {
        return (
            <div className="content">
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">
                            Cadastro de Nova Consulta
                        </CardTitle>
                        {this.state.aguardandoDados && (
                            <div>
                                <Spinner color="primary" />
                            </div>
                        )}

                        {(!this.state.cadastradoComSucesso)  && (
                            <Form
                                className="form-consulta"
                                onSubmit={(e) => this.cadastrar(e)}
                            >
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
                                    />
                                </FormGroup>
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
                                                    this.state.dataAtual
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
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Button
                                    color="danger"
                                    onClick={() => this.props.history.goBack()}
                                >
                                    Cancelar
                                </Button>
                                <Button type="submit" color="primary">
                                    Cadastrar
                                </Button>
                            </Form>
                        )}
                        <Row>
                            <Col>
                                {this.state.mensagemRetorno !== "" && (
                                    <Alert
                                        toggle={() => {
                                            this.fecharMensagem();
                                        }}
                                        color={this.state.tipoMensagem}
                                    >
                                        {this.state.mensagemRetorno}
                                    </Alert>
                                )}
                            </Col>
                        </Row>
                        <Row>
                           <Col>
                           {this.state.cadastradoComSucesso && (       
                                 <Button
                                 color="danger"
                                 onClick={() => this.props.history.goBack()}
                             >
                                 Votlar
                             </Button>
                           )}
                           </Col>
                        </Row>

                    </CardBody>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dadosUsuario: state.usuario.dados,
});

export default withRouter(connect(mapStateToProps)(NovaConsulta));
