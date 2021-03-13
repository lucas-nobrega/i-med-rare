import React from "react";
import pacienteService from "services/pacienteService";

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    Form,
    FormGroup,
    CardBody,
    Row,
    Col,
    Table,
} from "reactstrap";

class ModalPacienteDoencas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            setModal: false,
            setUnmountOnClose: true,
            aguardandoDados: false,
            unmountOnClose: true,
            doencas: [],
            paciente:{}
        };
    }

    carregarDoencasPaciente = (id) => {
        this.setState({ aguardandoDados: true });
        pacienteService.getPacienteIdDoencas(id).then((resposta) => {
            this.setState({
                doencas: resposta,
                aguardandoDados: false,
            });
        });
    };

    abrirModal = (pacienteAtual) => {
        this.setState({
            modal: true,
            paciente:pacienteAtual
        });
        console.info(pacienteAtual);

        this.carregarDoencasPaciente(pacienteAtual.paciente_id);
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            setModal: !this.state.modalsetModal,
        });
    };

    render() {
        return (
            <div>
                <Modal size="lg" 
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    unmountOnClose={this.unmountOnClose}
                >
                    <ModalHeader toggle={this.toggle}>
                    Doenças raras do paciente
                    </ModalHeader>
                    <ModalBody>
                        <div className="content">
                            <CardBody>
                                {
                                    <Form
                                        onSubmit={(e) => this.tratarCadastro(e)}
                                    >
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        
                                                       <h3>{
                                                            this.state.paciente
                                                                .user_nome
                                                        }</h3> 
                                                    </Label>
                                                    <Table responsive>
                                                        <thead className="text-primary">
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Doença</th>
                                                                <th>Início Sintomas</th>
                                                                <th>Data Diagnostico</th>
                                                            </tr>
                                                        </thead>
                                                        {!this.state
                                                            .aguardandoDados && (
                                                            <tbody>
                                                                {this.state.doencas.map(
                                                                    (
                                                                        doenca,
                                                                        index
                                                                    ) => (
                                                                        <tr
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
                                                                            <td>
                                                                                {
                                                                                    index+1
                                                                                }
                                                                            </td>
                                                                            <td>
                                                                                {
                                                                                    doenca.nome
                                                                                }
                                                                            </td>
                                                                            <td>
                                                                                {
                                                                                    doenca.pivot.data_inicio_sintomas
                                                                                }
                                                                            </td>
                                                                            <td>
                                                                                {
                                                                                    doenca.pivot.data_diagnostico
                                                                                }
                                                                            </td>
                                                                            
                                                                            <td></td>
                                                                        </tr>
                                                                    )
                                                                )}
                                                            </tbody>
                                                        )}
                                                    </Table>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                       
                                    </Form>
                                }
                            </CardBody>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>
                            Sair
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalPacienteDoencas;
