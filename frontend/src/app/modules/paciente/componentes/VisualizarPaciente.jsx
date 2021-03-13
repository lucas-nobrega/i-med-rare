import React from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    getCidadesAction,
    getEstadosAction,
    fecharMensagemAction,
    setMensagemAction,
} from "../../localizacao/localizacao.slice";

import pacienteService from "services/pacienteService";

import usuarioService from "services/usuarioService";
import {
    Input,
    Label,
    Form,
    FormGroup,
    CardBody,
    Row,
    Col,
    Alert,
    Card,
} from "reactstrap";

class ModalPacienteEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            sair: false,
            visualizandoPaciente: true,
            editarPaciente: false,
            dadosAlterados: false,
            setModal: false,
            setUnmountOnClose: true,
            unmountOnClose: true,
            sexos: [],
            mensagemRetorno: "",
            aguardandoEnvio: false,
            paciente: {},
        };
    }

    carregarSexos = () => {
        usuarioService.getSexos().then((resposta) => {
            this.setState({ sexos: resposta.data });
        });
    };

    carregarPacientes = () => {
        pacienteService
            .getPaciente(this.props.usuario.paciente.id)
            .then((resposta) => {
                this.setState({ paciente: resposta.data });
            });
    };

    componentDidMount() {
        this.props.getEstados();
        this.carregarSexos();
        this.carregarPacientes();
    }
    tratarSelectEstado = (event) => {
        const estadoID = event.target.value;
        this.props.getCidades(estadoID);
    };

    editarPaciente = () => {
        this.setState({
            editarPaciente: true,
            visualizandoPaciente: false,
        });
    };

    render() {
        return (
            <div className="content">
                <Card>
                    <CardBody>
                        {
                            <Form onSubmit={(e) => this.tratarCadastro(e)}>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                                Nome Completo
                                            </Label>
                                            <Input
                                                name="nome"
                                                placeholder="Digite seu nome"
                                                type="text"
                                                defaultValue={
                                                    this.state.paciente
                                                        .user_nome
                                                }
                                                disabled={
                                                    !this.state.editarPaciente
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                                Email
                                            </Label>
                                            <Input
                                                name="email"
                                                placeholder="Digite seu email"
                                                type="email"
                                                defaultValue={
                                                    this.state.paciente.email
                                                }
                                                disabled={
                                                    !this.state.editarPaciente
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                                Profissão
                                            </Label>
                                            <Input
                                                name="profissao"
                                                placeholder="Digite seu email"
                                                type="text"
                                                defaultValue={
                                                    this.state.paciente
                                                        .profissao
                                                }
                                                disabled={
                                                    !this.state.editarPaciente
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                        <Label for="exampleSelect">
                                                Sexo
                                            </Label>
                                            <Input
                                                name="profissao"
                                                placeholder="Digite seu email"
                                                type="text"
                                                defaultValue={
                                                    this.state.paciente
                                                        .sexo_nome
                                                }
                                                disabled={
                                                    !this.state.editarPaciente
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                                CPF
                                            </Label>
                                            <Input
                                                name="cpf"
                                                placeholder="Digite seu CPF"
                                                type="text"
                                                defaultValue={
                                                    this.state.paciente.cpf
                                                }
                                                disabled={
                                                    !this.state.editarPaciente
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                                Telefone
                                            </Label>
                                            <Input
                                                name="telefone"
                                                placeholder="Digite seu telefone"
                                                type="text"
                                                defaultValue={
                                                    this.state.paciente.telefone
                                                }
                                                disabled={
                                                    !this.state.editarPaciente
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                                CEP
                                            </Label>
                                            <Input
                                                name="cep"
                                                placeholder="Digite seu CEP"
                                                type="text"
                                                defaultValue={
                                                    this.state.paciente.cep
                                                }
                                                disabled={
                                                    !this.state.editarPaciente
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                                Data de nascimento
                                            </Label>
                                            <Input
                                                name="data_nascimento"
                                                placeholder="Data nascimento"
                                                type="date"
                                                defaultValue={
                                                    this.state.paciente
                                                        .data_nascimento
                                                }
                                                disabled={
                                                    !this.state.editarPaciente
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                                Estado
                                            </Label>
                                            <Input
                                                name="estado"
                                                
                                                type="text"
                                                defaultValue={
                                                    this.state.paciente.nome_estdado
                                                }
                                                disabled={
                                                    !this.state.editarPaciente
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                                Cidade
                                            </Label>
                                            <Input
                                                name="cidade"
                                                type="text"
                                                defaultValue={
                                                    this.state.paciente.nome_cidade
                                                }
                                                disabled={
                                                    !this.state.editarPaciente
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                                Bairro
                                            </Label>
                                            <Input
                                                name="bairro"
                                                placeholder="Digite seu bairro"
                                                type="text"
                                                defaultValue={
                                                    this.state.paciente.bairro
                                                }
                                                disabled={
                                                    !this.state.editarPaciente
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                                Logradouro
                                            </Label>
                                            <Input
                                                name="logradouro"
                                                placeholder="Digite seu logradouro"
                                                type="text"
                                                defaultValue={
                                                    this.state.paciente
                                                        .logradouro
                                                }
                                                disabled={
                                                    !this.state.editarPaciente
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                                Número
                                            </Label>
                                            <Input
                                                name="numero"
                                                placeholder="Digite o número da sua residência"
                                                type="text"
                                                defaultValue={
                                                    this.state.paciente.numero
                                                }
                                                disabled={
                                                    !this.state.editarPaciente
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        {this.state.mensagemRetorno !== "" && (
                                            <Alert
                                                toggle={() => {
                                                    this.setState({
                                                        mensagemRetorno: "",
                                                    });
                                                }}
                                                color={this.state.tipoMensagem}
                                            >
                                                {this.state.mensagemRetorno}
                                            </Alert>
                                        )}
                                    </Col>
                                </Row>
                            </Form>
                        }
                    </CardBody>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    usuario: state.usuario.dados,
    cidades: state.localizacao.cidades,
    estados: state.localizacao.estados,
    aguardandoDados: state.localizacao.aguardandoDados,
    mensagemRetorno: state.localizacao.mensagemRetorno,
    tipoMensagem: state.localizacao.tipoMensagem,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(
            {
                getCidades: getCidadesAction,
                getEstados: getEstadosAction,
                fecharMensagem: fecharMensagemAction,
                setMensagem: setMensagemAction,
            },
            dispatch
        ),
        dispatch,
    };
};
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ModalPacienteEditar)
);
