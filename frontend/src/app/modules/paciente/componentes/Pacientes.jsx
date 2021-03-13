import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ModalPacienteEditar from "app/modules/paciente/componentes/ModalPacienteEditar";
import ModalPacienteDoencas from "app/modules/paciente/componentes/ModalPacienteDoencas";
import pacienteService from 'services/pacienteService';
import { withRouter } from "react-router-dom";
import Moment from 'moment';
import {
    loginAction,
    fecharMensagemAction,
    setMensagemAction,
} from "app/modules/usuario/usuario.slice";
// reactstrap components
import { Card, CardBody, Table, Row, Col, Button, FormGroup, Input, Label, Form } from "reactstrap";

const estilo = {};

class Pacientes extends React.Component {
    constructor(props) {
        super(props);
        this.pacienteDoencas = React.createRef();
        this.state = {
            modal: false,
            pacienteAtual: {},
            abrirModalDoencas: false,
            doencas: [],
            arguardandoDoencas: false,
            pacientes: [],
            aguardandoPacientes: false,
        };
    }

    visualizarDoencas = (paciente_id) => {
        console.info("Chamou visualizar Doenças");
        this.pacienteDoencas.current.abrirModal(paciente_id);
        this.setState({
            pacienteAtual: 1,
            abrirModalDoencas: true,
        });
    };
    limparFiltro = (event) => {
        console.log("dsfsdf", event)

    };

    getPacienteFiltros = (event) => {
        event.preventDefault();
        var url = 'nomePaciente=' + event.target.nomePaciente.value + '&pacientes='
            + event.target.pacientes.value + '&doencaPaciente=' + event.target.doencaPaciente.value
            + '&cpfPaciente=' + event.target.cpfPaciente.value + '';
        pacienteService.getPacienteFiltros(url).then(resposta => {
            this.setState({ pacientes: resposta.data });
        })
    }
    carregarDoencas = () => {
        this.setState({ arguardandoDoencas: true });

        pacienteService.getDoencas().then(resposta => {
            this.setState({
                doencas: resposta.data,
                arguardandoDoencas: false
            });

        })
    };

    carregarPacientes = () => {
        this.setState({ arguardandoPacientes: true });
        pacienteService.getPacientes().then(resposta => {
            console.log(resposta.data)
            this.state.pacientes = [];
            this.setState({
                pacientes: resposta.data,
                arguardandoPacientes: false
            });
        });
    }


    componentDidMount() {
        this.carregarPacientes();
        this.carregarDoencas();
    }

    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardBody>
                                    <Form onSubmit={(e) => this.getPacienteFiltros(e)} >
                                        <FormGroup check>
                                            <Row>

                                            </Row>
                                            <Row>
                                                <Col md="4">
                                                    <Input style={{ padding: '11px' }}
                                                        name="nomePaciente"
                                                        placeholder="Nome do paciente"
                                                        type="text"
                                                    />
                                                    <Input style={{ margin: '20px 0px 10px 0px' }} type="radio" defaultChecked name="pacientes" id="todosPacientes" value="todosPacientes" />
                                                    <Label style={{ margin: '13px 0px 10px -15px' }} check for="todosPacientes">
                                                        Todos os pacientes
                                                </Label>
                                                    <Input style={{ margin: '20px 0px 10px 25px' }} type="radio" name="pacientes" id="idMedido" value={this.props.dadosUsuario.id} />
                                                    <Label style={{ margin: '13px 0px 10px 10px' }} check for="idMedido" >
                                                        Meus pacientes
                                                </Label>



                                                </Col>
                                                <Col md="4">


                                                    <Input
                                                        name="doencaPaciente"
                                                        type="select"
                                                    >
                                                        <option value="0">
                                                            Selecione a doença
                                                        </option>
                                                        {this.state.doencas.map(
                                                            (doenca) => (
                                                                <option
                                                                    value={
                                                                        doenca.id
                                                                    }
                                                                    key={
                                                                        doenca.id
                                                                    }
                                                                >
                                                                    {doenca.nome}
                                                                </option>
                                                            )
                                                        )}
                                                    </Input>

                                                    <Input style={{ margin: '20px 0px 10px 0px' }} type="radio" name="pacientes" id="comDoenca" value="comDoenca" />
                                                    <Label style={{ margin: '13px 0px 10px -15px' }} check for="comDoenca">
                                                        Paciente com doenças raras
                                            </Label>

                                                </Col>
                                                <Col md="4">
                                                    <Input style={{ padding: '11px' }}
                                                        name="cpfPaciente"
                                                        placeholder="CPF do paciente"
                                                        type="text"
                                                    />
                                                    <Button type="submit" className="float-right" color="danger">Filtrar</Button>
                                                    <Button onClick={(e) => this.limparFiltro(this)} className="float-right" color="grecy">Limpar</Button>



                                                </Col>
                                            </Row>
                                        </FormGroup>
                                    </Form>
                                </CardBody>

                            </Card>
                        </Col>
                    </Row>


                    <Row>
                        <Col md="12">
                            <Card>
                                <CardBody>
                                    <Table responsive>
                                        <thead className="text-primary">
                                            <tr>
                                                <th>#</th>
                                                <th>Nome</th>
                                                <th>CPF</th>
                                                <th>Estado</th>
                                                <th>Data do cadastro</th>
                                                <th>Código do Médico</th>
                                                <th>Doença</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        {!this.state.aguardandoPacientes && (
                                            <tbody>
                                                {this.state.pacientes.map(
                                                    (paciente, index) => (
                                                        <tr
                                                            key={
                                                                index + 1
                                                            }
                                                        >
                                                            <td>
                                                                {
                                                                    index + 1
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    paciente.user_nome
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    paciente.cpf
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    paciente.estdado_nome
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    Moment(paciente.created_at).format('d MMM Y')
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    paciente.medico_id ? paciente.medico_id : 'Não há médico cadastrado'
                                                                }
                                                            </td>
                                                            <td>
                                                                <Row>
                                                                    <Col>
                                                                        <Button
                                                                            color="danger"
                                                                            onClick={() => this.visualizarDoencas(paciente)}
                                                                        >
                                                                            Doenças
                                                                        </Button> 
                                                                        </Col>
                                                                   
                                                                    <Col>
                                                                    <ModalPacienteEditar
                                                                        isModalAberto={
                                                                            this.state.abrirModalDoencas
                                                                        }
                                                                        paciente={paciente}
                                                                    ></ModalPacienteEditar>
                                                                    </Col>
                                                                </Row>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        )}
                                    </Table>
                                    <div>
                                        <ModalPacienteDoencas
                                            ref={this.pacienteDoencas}
                                            isModalAberto={
                                                this.state.abrirModalDoencas
                                            }
                                            paciente={this.state.pacienteAtual}
                                        ></ModalPacienteDoencas>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}



const mapStateToProps = (state) => ({
    dadosUsuario: state.usuario.dados,
    aguardandoDados: state.usuario.aguardandoDados,
    mensagemRetorno: state.usuario.mensagemRetorno,
    tipoMensagem: state.usuario.tipoMensagem,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(
            {
                login: loginAction,
                fecharMensagem: fecharMensagemAction,
                setMensagem: setMensagemAction,
            },
            dispatch
        ),
        dispatch,
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pacientes));

