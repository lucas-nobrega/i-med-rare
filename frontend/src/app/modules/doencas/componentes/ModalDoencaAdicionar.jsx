import React from "react";
import doencaService from "services/doencaService";

import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup,
    CardBody,
    Row,
    Col,
    Alert,    
} from 'reactstrap';

class ModalDoencaAdicionar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            sair: false,
            dadosAlterados: false,
            setModal: false,
            setUnmountOnClose: true,
            unmountOnClose: true,
            mensagemRetorno: '',
            aguardandoEnvio: false,
            doenca: [],
        }
    }


    tratarCadastro = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        this.setState({ aguardandoEnvio: true });
        const dados_cadastrais = {
            nome: data.get("nome"),
        };
        doencaService.cadastro(dados_cadastrais).then((resposta) => {
            this.setState({ aguardandoEnvio: false });
            if (resposta.resultado === "erro") {
                this.setState({
                    mensagemRetorno: resposta.motivo,
                    tipoMensagem: "danger",
                });
            } else {
               this.props.carregarDoencas();
                this.setState({
                    mensagemRetorno: "Doença cadastrada com sucesso",
                    tipoMensagem: "success",
                    dadosCadastrados: true,
                    aguardandoEnvio: true
                });
            }
            this.toggle();
        });
    };

    componentDidMount() {
        this.setState({doenca: this.props.doenca});
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            setModal: !this.state.modalsetModal

        });
    }

    render() {
        return (
            <div>
                <Form inline onSubmit={(e) => e.preventDefault()}>
                    <Button style={{ marginRight: '5px' }} color="primary" onClick={this.toggle}>Adicionar doença</Button>
                </Form>
                <Modal size="sm" isOpen={this.state.modal} toggle={this.toggle} unmountOnClose={this.unmountOnClose}>
                    <ModalHeader>Adicionar Doença</ModalHeader>
                    <ModalBody>
                        <div className="content">
                            <CardBody>
                                {
                                    <Form onSubmit={(e) => this.tratarCadastro(e)}>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label for="exampleSelect">Nome da doença</Label>
                                                    <Input
                                                        name="nome"
                                                        placeholder="Digite o nome"
                                                        type="text"
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
                                        <Row>
                                            <ModalFooter>
                                                <Button color="primary" type="submit" >Adicionar</Button>
                                                <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
                                            </ModalFooter>
                                        </Row>
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

export default ModalDoencaAdicionar;