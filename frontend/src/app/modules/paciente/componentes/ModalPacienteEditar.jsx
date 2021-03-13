import React from "react";
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    getCidadesAction,
    getEstadosAction,
    fecharMensagemAction,
    setMensagemAction,
} from "../../localizacao/localizacao.slice";

import pacienteService from 'services/pacienteService'

import usuarioService from 'services/usuarioService'
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup,
    CardBody,
    Row,
    Col,
    Alert,    
} from 'reactstrap';

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
            mensagemRetorno: '',
            aguardandoEnvio: false
        }
    }


    tratarCadastro = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        this.setState({aguardandoEnvio: true}); // Arrumei
        const dados_cadastrais = {
            id: this.props.paciente.paciente_id,
            nome: data.get("nome"),
            email: data.get("email"),
            data_nascimento: data.get("data_nascimento"),
            profissao: data.get("profissao"),
            sexo_id: data.get("sexo"),
            cpf: data.get("cpf"),
            telefone: data.get("telefone"),
            cep: data.get("cep"),
            estado_id: data.get("estado"),
            cidade_id: data.get("cidade"),
            bairro: data.get("bairro"),
            logradouro: data.get("logradouro"),
            numero: data.get("numero"),
        };

        pacienteService.cadastro(dados_cadastrais).then(resposta => {

            this.setState({aguardandoEnvio: false});
            if (resposta.resultado === 'erro') {
                this.setState({
                    mensagemRetorno: resposta.motivo,
                    tipoMensagem: "danger"
                });
            } else {
                this.setState({
                    mensagemRetorno: "Dados do paciente atualizados com sucesso",
                    tipoMensagem: "success",
                    dadosAlterados: true,
                    editarPaciente: false,
                    visualizandoPaciente: false

                });
            }
        })
    };

    carregarSexos = () => {
        usuarioService.getSexos().then(resposta => {
            this.setState({ sexos: resposta.data });
        })
    };

    componentDidMount() {
        this.props.getEstados();
        this.carregarSexos();
    }
    tratarSelectEstado = (event) => {
        const estadoID = event.target.value;
        this.props.getCidades(estadoID);
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            setModal: !this.state.modalsetModal

        });
    }

    editarPaciente = () => {
        this.setState({
            editarPaciente: true,
            visualizandoPaciente: false

        });
    }




    render() {
        return (
            <div>
                <Form inline onSubmit={(e) => e.preventDefault()}>
                    <Button style={{ marginRight: '5px' }} color="danger" onClick={this.toggle}>Perfil</Button>
                </Form>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} unmountOnClose={this.unmountOnClose}>
                    <ModalHeader style={!this.state.editarPaciente ? {} : { display: 'none' }} toggle={this.toggle}>Perfil do Paciente</ModalHeader>
                    <ModalHeader style={this.state.editarPaciente ? {} : { display: 'none' }} toggle={this.toggle}>Editar Paciente</ModalHeader>
                    <ModalBody>
                        <div className="content">
                            <CardBody>
                                {
                                    <Form onSubmit={(e) => this.tratarCadastro(e)}>

                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">Nome Completo</Label>
                                                    <Input
                                                        name="nome"
                                                        placeholder="Digite seu nome"
                                                        type="text"
                                                        defaultValue={this.props.paciente.user_nome}
                                                        disabled={!this.state.editarPaciente}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">Email</Label>
                                                    <Input
                                                        name="email"
                                                        placeholder="Digite seu email"
                                                        type="email"
                                                        defaultValue={this.props.paciente.email}
                                                        disabled={!this.state.editarPaciente}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">Profissão</Label>
                                                    <Input
                                                        name="profissao"
                                                        placeholder="Digite seu email"
                                                        type="text"
                                                        defaultValue={this.props.paciente.profissao}
                                                        disabled={!this.state.editarPaciente}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">Sexo</Label>
                                                    <Input
                                                        name="sexo"
                                                        placeholder="Digite sua sexo"
                                                        type="select"
                                                        disabled={!this.state.editarPaciente}
                                                    >
                                                        <option value={this.props.paciente.sexo_id}>{this.props.paciente.sexo_nome}</option>
                                                        {this.state.sexos.map((sexo) => <option value={sexo.id} key={sexo.id}>{sexo.nome}</option>)}
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">CPF</Label>
                                                    <Input
                                                        name="cpf"
                                                        placeholder="Digite seu CPF"
                                                        type="text"
                                                        defaultValue={this.props.paciente.cpf}
                                                        disabled={!this.state.editarPaciente}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">Telefone</Label>
                                                    <Input
                                                        name="telefone"
                                                        placeholder="Digite seu telefone"
                                                        type="text"
                                                        defaultValue={this.props.paciente.telefone}
                                                        disabled={!this.state.editarPaciente}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">CEP</Label>
                                                    <Input
                                                        name="cep"
                                                        placeholder="Digite seu CEP"
                                                        type="text"
                                                        defaultValue={this.props.paciente.cep}
                                                        disabled={!this.state.editarPaciente}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">Data de nascimento</Label>
                                                    <Input
                                                        name="data_nascimento"
                                                        placeholder="Data nascimento"
                                                        type="date"
                                                        defaultValue={this.props.paciente.data_nascimento}
                                                        disabled={!this.state.editarPaciente}
                                                    />
                                                    
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">Estado</Label>
                                                    <Input
                                                        name="estado"
                                                        placeholder="Digite seu estado"
                                                        type="select"
                                                        onChange={(e) => this.tratarSelectEstado(e)}
                                                        disabled={!this.state.editarPaciente}
                                                    >
                                                        <option value={this.props.paciente.estado_id}>{this.props.paciente.estdado_nome}</option>
                                                        {this.props.estados.map((estado) => <option value={estado.id} key={estado.id}>{estado.nome}</option>)}
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">Cidade</Label>
                                                    <Input
                                                        name="cidade"
                                                        placeholder="Digite sua Cidade"
                                                        type="select"
                                                        disabled={!this.state.editarPaciente}
                                                    >
                                                        <option value={this.props.paciente.cidade_id}>{this.props.paciente.cidade_nome}</option>
                                                        {this.props.cidades.map((cidade) => <option value={cidade.id} key={cidade.id}>{cidade.nome}</option>)}
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">Bairro</Label>
                                                    <Input
                                                        name="bairro"
                                                        placeholder="Digite seu bairro"
                                                        type="text"
                                                        defaultValue={this.props.paciente.bairro}
                                                        disabled={!this.state.editarPaciente}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">Logradouro</Label>
                                                    <Input
                                                        name="logradouro"
                                                        placeholder="Digite seu logradouro"
                                                        type="text"
                                                        defaultValue={this.props.paciente.logradouro}
                                                        disabled={!this.state.editarPaciente}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">Número</Label>
                                                    <Input
                                                        name="numero"
                                                        placeholder="Digite o número da sua residência"
                                                        type="text"
                                                        defaultValue={this.props.paciente.numero}
                                                        disabled={!this.state.editarPaciente}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                {this.state.mensagemRetorno !== "" && (
                                                    <Alert
                                                        toggle={() => {

                                                            this.setState({ mensagemRetorno: "" });
                                                        }}
                                                        color={
                                                            this.state.tipoMensagem
                                                        }
                                                    >
                                                        {this.state.mensagemRetorno}
                                                    </Alert>
                                                )}
                                            </Col>
                                        </Row>
                                            {this.state.visualizandoPaciente && (
                                                <ModalFooter>
                                                    <Button color="primary" onClick={this.editarPaciente}>Editar paciente</Button>
                                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                                </ModalFooter>
                                            )}
                                            {this.state.editarPaciente && (
                                                <ModalFooter>
                                                    <Button color="primary" type="submit" >Salvar</Button>
                                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                                </ModalFooter>
                                            )}
                                            {this.state.dadosAlterados && (
                                                <ModalFooter>
                                                    <Button color="primary" onClick={this.toggle}>Sair</Button>
                                                </ModalFooter>
                                            )}



                                    </Form>
                                }
                            </CardBody>

                        </div>
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalPacienteEditar));