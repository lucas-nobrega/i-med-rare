import React from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { validate } from 'gerador-validador-cpf';
import { cpfMask } from '../../medico/componentes/mask'
import {
    getCidadesAction,
    getEstadosAction,
    fecharMensagemAction,
    setMensagemAction,
} from "../../localizacao/localizacao.slice";

import usuarioService from "services/usuarioService";
import pacienteService from "services/pacienteService";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    Alert,
    Label,
} from "reactstrap";

class CadastroPaciente extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sexos: [],
            mensagemRetorno: "",
            aguardandoEnvio: false,
            tipoMensagem: "success",
            data_nascimento: "",
            isDataConfirmada: true,
            isSenhaConfirmada: true,
            dadosCadastrados: false,
            documentId: '',
        };
        this.handlechange = this.handlechange.bind(this)
    }

    handlechange(e) {
        this.setState({ documentId: cpfMask(e.target.value) })
    }

    tratarCadastro = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get("cpf")); // CONSOLE LOG
        this.setState({aguardandoEnvio : true});
        const dados_cadastrais = {
            nome: data.get("nome"),
            email: data.get("email"),
            email_verified_at: "2021-02-27 12:52:11",
            sexo_id: data.get("sexo"),
            cpf: data.get("cpf"),
            crm: data.get("crm"),
            perfil_id: "1",// Ver se tem perfil
            password: data.get("password"),
            data_nascimento: data.get("data_nascimento"),
            profissao: data.get("profissao"),
            telefone: data.get("telefone"),
            cep: data.get("cep"),
            estado_id: data.get("estado"),
            cidade_id: data.get("cidade"),
            bairro: data.get("bairro"),
            logradouro: data.get("logradouro"),
            numero: data.get("numero"),
        };

        pacienteService.cadastroPaciente(dados_cadastrais).then((resposta) => {
            this.setState({aguardandoEnvio : false});
            if (resposta.resultado === "erro") {
                this.setState({
                    mensagemRetorno: resposta.motivo,
                    tipoMensagem: "danger",
                });
            } else {
                this.setState({
                    mensagemRetorno: "Paciente cadastrado com sucesso",
                    tipoMensagem: "success",
                    dadosCadastrados: true,
                });
            }
        });
    };

    validacaoCPF = (event) => {
        if(!validate(event.target.value)){
            this.setState({mensagemRetorno: "CPF inválido", tipoMensagem: "danger"});
            event.currentTarget.style.border = "1px solid #fc2b2b";
        }else{
            event.currentTarget.style.border = "1px solid #DDDDDD";
            this.setState({mensagemRetorno: "", tipoMensagem: "danger"});
        }
    }

    carregarSexos = () => {
        usuarioService.getSexos().then((resposta) => {
            this.setState({ sexos: resposta.data });
        });
    };

    confirmacaoSenha = (event) => {
        let senhaConfirmada = event.target.value;
        if (senhaConfirmada !== "" && senhaConfirmada !== this.state.senha) {
            this.setState({isSenhaConfirmada: false, mensagemRetorno: "As senhas estão diferentes", tipoMensagem: "danger"});
            event.currentTarget.style.border = "1px solid #fc2b2b";
        } else {
            event.currentTarget.style.border = "1px solid #DDDDDD";
            this.setState({isSenhaConfirmada: true, mensagemRetorno: "", tipoMensagem: "danger"});
        }
    };
    

    validacaoDataNascimento = (event) => {
        let data_nascimento = event.target.value;
        let hoje = new Date().toISOString();
        //hoje = this.formatDate(hoje);
        hoje = new Date(hoje);
        data_nascimento = new Date(data_nascimento);
        console.log(data_nascimento);
        console.log(hoje);
        if(this.data_nascimento === "" || data_nascimento.getTime() > hoje.getTime()){
            this.setState({isDataConfirmada: false, mensagemRetorno: "A data de nascimento está incorreta", tipoMensagem: "danger"});
            event.currentTarget.style.border = "1px solid #fc2b2b";
        } else {
            event.currentTarget.style.border = "1px solid #DDDDDD";
            this.setState({isDataConfirmada: true, mensagemRetorno: "", tipoMensagem: "danger"});
        }
    };

    requiredInput = (event) => {
        console.log(event.target.value);
        if(event.target.value === "" || event.target.value === 0){
            event.currentTarget.style.border = "1px solid #fc2b2b";
            this.setState({mensagemRetorno: "Campos obrigatórios não podem estar vazios", tipoMensagem: "danger"});
        }else{
            event.currentTarget.style.border = "1px solid #DDDDDD";
        }
    }

    styledAsteriscos = () => {
        return <><span style={{color: "#FF0000"}}>*</span></>
    }

    componentDidMount() {
        this.props.getEstados();
        this.carregarSexos();
    }
    tratarSelectEstado = (event) => {
        const estadoID = event.target.value;
        this.props.getCidades(estadoID);
    };
    render() {
        return (
            <div className="content">
                <Row>
                    <Col className="col-sm-12 col-md-10 offset-md-1">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center" tag="h4">
                                    Cadastro de Paciente
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                {
                                    <Form
                                        onSubmit={(e) => this.tratarCadastro(e)}
                                    >
                                        <Row xs="1" md="2" sm="2">
                                            {" "}
                                            {/* numero de linhas dependendo do width da tela xs= extra small */}
                                            <Col className="col-xl-8">
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Nome Completo
                                                    </Label>{this.styledAsteriscos()}
                                                    <Input
                                                        name="nome"
                                                        placeholder="Digite seu nome"
                                                        type="text"
                                                        onBlur={(e) => this.requiredInput(e)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="col-xl-4">
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Sexo
                                                    </Label>{this.styledAsteriscos()}
                                                    <Input
                                                        name="sexo"
                                                        type="select"
                                                        onBlur={(e) => this.requiredInput(e)}
                                                    >
                                                        <option value="0">
                                                            Selecione seu sexo
                                                        </option>
                                                        {this.state.sexos.map(
                                                            (sexo) => (
                                                                <option
                                                                    value={
                                                                        sexo.id
                                                                    }
                                                                    key={
                                                                        sexo.id
                                                                    }
                                                                >
                                                                    {sexo.nome}
                                                                </option>
                                                            )
                                                        )}
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row xs="1" md="2" sm="2">
                                            <Col className="col-xl-6">
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Email
                                                    </Label>
                                                    <Input
                                                        name="email"
                                                        placeholder="Digite seu email"
                                                        type="email"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="col-xl-6">
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        CPF
                                                    </Label>{this.styledAsteriscos()}
                                                    <Input
                                                        name="cpf"
                                                        placeholder="Digite seu CPF"
                                                        type="text"
                                                        value={this.state.documentId}
                                                        onChange={this.handlechange}
                                                        onBlur={(e) => this.validacaoCPF(e)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row xs="1" md="2" sm="2">
                                            <Col className="col-xl-6">
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Senha
                                                    </Label>{this.styledAsteriscos()}
                                                    <Input
                                                        name="password"
                                                        placeholder="Digite sua senha"
                                                        type="password"
                                                        onBlur={(e) => {(this.setState({senha: e.target.value})); this.requiredInput(e)}}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="col-xl-6">
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Confirmação de Senha
                                                    </Label>{this.styledAsteriscos()}
                                                    <Input
                                                        name="password"
                                                        placeholder="Confirme sua senha"
                                                        type="password"
                                                        id="senha"
                                                        onBlur={(e) =>{
                                                            this.confirmacaoSenha(
                                                                e
                                                            );
                                                            this.requiredInput(e);
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row xs="1" md="2" sm="2">
                                            <Col className="col-xl-6">
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Data de nascimento
                                                    </Label>{this.styledAsteriscos()}
                                                    <Input
                                                        name="data_nascimento"
                                                        placeholder="Insira sua data de nascimento"
                                                        type="date"
                                                        onBlur={(e) => {(this.validacaoDataNascimento(e)); this.requiredInput(e)}}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="col-xl-6">
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Profissão
                                                    </Label>
                                                    <Input
                                                        name="profissao"
                                                        placeholder="Digite sua profissão"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row xs="2" md="2" sm="2">
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Telefone
                                                    </Label>
                                                    <Input
                                                        name="telefone"
                                                        placeholder="Digite seu telefone"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        CEP
                                                    </Label>
                                                    <Input
                                                        name="cep"
                                                        placeholder="Digite seu CEP"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row></Row>
                                        <Row xs="2" md="2" sm="2">
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Estado
                                                    </Label>
                                                    <Input
                                                        name="estado"
                                                        placeholder="Digite seu estado"
                                                        type="select"
                                                        onChange={(e) =>
                                                            this.tratarSelectEstado(
                                                                e
                                                            )
                                                        }
                                                    >
                                                        <option value="0">
                                                            Selecione o estado
                                                        </option>
                                                        {this.props.estados.map(
                                                            (estado) => (
                                                                <option
                                                                    value={
                                                                        estado.id
                                                                    }
                                                                    key={
                                                                        estado.id
                                                                    }
                                                                >
                                                                    {
                                                                        estado.nome
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Cidade
                                                    </Label>
                                                    <Input
                                                        name="cidade"
                                                        placeholder="Digite sua Cidade"
                                                        type="select"
                                                    >
                                                        <option value="0">
                                                            Selecione a cidade
                                                        </option>
                                                        {this.props.cidades.map(
                                                            (cidade) => (
                                                                <option
                                                                    value={
                                                                        cidade.id
                                                                    }
                                                                    key={
                                                                        cidade.id
                                                                    }
                                                                >
                                                                    {
                                                                        cidade.nome
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row xs="1" md="3" sm="2">
                                            <Col className="col-xl-4">
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Bairro
                                                    </Label>
                                                    <Input
                                                        name="bairro"
                                                        placeholder="Digite seu bairro"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="col-xl-5">
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Logradouro
                                                    </Label>
                                                    <Input
                                                        name="logradouro"
                                                        placeholder="Digite seu logradouro"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="col-xl-3">
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Número residencial
                                                    </Label>
                                                    <Input
                                                        name="numero"
                                                        placeholder="Digite o número residencial"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            {this.state.dadosCadastrados && (
                                                <div className="update ml-auto mr-auto">
                                                    <Button
                                                        block
                                                        className="btn-round"
                                                        color="primary"
                                                        type="submit"
                                                        onClick={() => this.props.history.push("/")}
                                                    >
                                                        Ir para pagina inicial
                                                    </Button>
                                                </div>
                                            )}
                                            {!this.state.dadosCadastrados && (
                                                <div className="update ml-auto mr-auto">
                                                    <Button
                                                        block
                                                        className="btn-round"
                                                        color="primary"
                                                        type="submit"
                                                    >
                                                        Cadastrar
                                                    </Button>
                                                </div>
                                            )}
                                        </Row>
                                        <Row>
                                            <Col>
                                                {this.state.mensagemRetorno !==
                                                    "" && (
                                                    <Alert
                                                        toggle={() => {
                                                            this.setState({
                                                                mensagemRetorno:
                                                                    "",
                                                            });
                                                        }}
                                                        color={
                                                            this.state
                                                                .tipoMensagem
                                                        }
                                                    >
                                                        {
                                                            this.state
                                                                .mensagemRetorno
                                                        }
                                                    </Alert>
                                                )}
                                            </Col>
                                        </Row>
                                    </Form>
                                }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
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
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CadastroPaciente)
);
