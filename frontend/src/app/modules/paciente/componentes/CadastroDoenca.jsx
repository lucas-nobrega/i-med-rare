import React from "react";
import { connect } from "react-redux";
import {
    Button,
    Label,
    Form,
    FormGroup,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Input,
} from "reactstrap";
import {
    withRouter,
} from "react-router-dom";
import pacienteService from "services/pacienteService";
import doencaService from "services/doencaService";

//import TextField from '@material-ui/core/TextField';
//import Autocomplete from '@material-ui/lab/Autocomplete';

class CadastroDoenca extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aguardandoDados: true,
            aguardandoEnvio: false,
            mensagemRetorno: "",
            tipoMensagem: "success",
            pacientes: [],
            doencas: [],
        };
    }

    cadastrarDoenca = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.info(data.get("paciente"));//console.info(this.props);
        this.setState({aguardandoEnvio : true});
        
        const dados = {
           doenca_id : data.get("doenca"),
           medico_id : this.props.dadosUsuario.medico.id,
           data_diagnostico : data.get("data_diagnostico"),
           data_inicio_sintomas : data.get("data_inicio_sintomas"),
           sintomas_identificados : data.get("sintomas_identificados"),
           orientacoes_realizadas : data.get("orientacoes_realizadas"),
           data_acompanhamento : data.get("data_acompanhamento"),
           data_proxima_consulta : data.get("data_proxima_consulta"),
        }

        pacienteService.cadastrarDoenca(data.get("paciente"), dados).then((resposta) => {
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

    componentDidMount() {
        this.setState({ aguardandoDados: true });
        pacienteService.getPacientesSemDoenca().then((resposta) => {
            this.setState({pacientes: resposta, aguardandoDados: false});
        });
        doencaService.getDoencas().then((resposta) => {
            this.setState({doencas: resposta.data, aguardandoDados: false});
        });
    }

    render() {
        //console.info(this.props);
        return (
            <div className="content">
                <Row>
                    <Col className="col-sm-12 col-md-10 offset-md-1">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center" tag="h4">
                                    Cadastro de doença do paciente
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                {
                                    <Form onSubmit={(e) => this.cadastrarDoenca(e)}>
                                        <Row xs="2" md="2" sm="2">
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Paciente
                                                    </Label>
                                                    <Input
                                                        name="paciente"
                                                        placeholder="Informe o paciente"
                                                        type="select"
                                                    >
                                                        <option value="0">
                                                            Selecione o paciente
                                                        </option>
                                                        {this.state.pacientes.map(
                                                            (paciente) => (
                                                            <option
                                                                value={
                                                                    paciente.id
                                                                }
                                                                key={
                                                                    paciente.id
                                                                }
                                                            >
                                                                {
                                                                    paciente.user.nome
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
                                                        Doença
                                                    </Label>
                                                    <Input
                                                        name="doenca"
                                                        placeholder="Informe a doenca"
                                                        type="select"
                                                    >
                                                        <option value="0">
                                                            Selecione a doença
                                                        </option>
                                                        {this.state.doencas.map(
                                                            (doenca) => (
                                                            <option value={doenca.id} key={doenca.id}>
                                                                {doenca.nome}
                                                            </option>
                                                        ))}
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row xs="1" md="2" sm="2">
                                            <Col className="col-xl-6">
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Data do diagnostico
                                                    </Label>
                                                    <Input
                                                        name="data_diagnostico"
                                                        placeholder="Digite a data do diagnostico"
                                                        type="date"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="col-xl-6">
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Data do inicio dos sintomas
                                                    </Label>
                                                    <Input
                                                        name="data_inicio_sintomas"
                                                        placeholder="Digite a data do inicio dos sintomas"
                                                        type="date"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row xs="2" md="2" sm="2">
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Sintomas identificados
                                                    </Label>
                                                    <Input
                                                        name="sintomas_identificados"
                                                        placeholder="Digite os sintomas identificados"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Orientações realizadas
                                                    </Label>
                                                    <Input
                                                        name="orientacoes_realizadas"
                                                        placeholder="Digite as orientações realizadas"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row xs="2" md="2" sm="2">
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Data do acompanhamento
                                                    </Label>
                                                    <Input
                                                        name="data_acompanhamento"
                                                        placeholder="Digite a data do acompanhamento"
                                                        type="date"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Data da proxima consulta
                                                    </Label>
                                                    <Input
                                                        name="data_proxima_consulta"
                                                        placeholder="Digite a data da proxima consulta"
                                                        type="date"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button block className="btn-round" color="primary" type="submit">
                                            Cadastrar
                                        </Button>
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
    dadosUsuario: state.usuario.dados,
});
export default withRouter(connect(mapStateToProps, null)(CadastroDoenca));
