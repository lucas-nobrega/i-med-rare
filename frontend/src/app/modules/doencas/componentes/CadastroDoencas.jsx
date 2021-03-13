import React from "react";
import doencaService from "services/doencaService";
import ModalDoencaEditar from "./ModalDoencaEditar";
import ModalDoencaAdicionar from "./ModalDoencaAdicionar";

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    Row,
    Col,
    Table,
} from "reactstrap";

class CadastroDoencas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doencas: [],
            mensagemRetorno: "",
            aguardandoEnvio: false,
            tipoMensagem: "success",
            dadosCadastrados: false,
            isOpen: false,
            dropdownOpen: false,
        };
    }
    carregarDoencas = () => {
        this.setState({ aguardandoDados: true });
        doencaService.getDoencas().then((resposta) => {
            this.setState({ doencas: resposta.data, aguardandoDados: false });
        });
    };
    deletarDoenca = (id) => {
        doencaService.deleteDoenca(id).then((resposta) => {
            if (resposta.resultado === "erro") {
                this.setState({
                    mensagemRetorno: resposta.motivo,
                    tipoMensagem: "danger",
                });
            } else {
                this.setState({
                    mensagemRetorno: "Doença deletada com sucesso",
                    tipoMensagem: "success",
                    dadosCadastrados: true,
                    aguardandoEnvio: true
                });
            }
            this.carregarDoencas();
        });
    };

    componentDidMount() {
        this.carregarDoencas();
    }

    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col className="offset-md-1 offset-xl-3" xl="6" md="10" xs="12">
                            <Card>
                                <CardBody>
                                    <Table responsive>
                                        <thead className="text-primary">
                                            <tr>
                                                <th>#</th>
                                                <th>Doença</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        {!this.state.aguardandoPacientes && (
                                            <tbody>
                                                {this.state.doencas.map(
                                                    (doenca, index) => (
                                                        <tr
                                                            key={doenca.id}
                                                        >
                                                            <td>{index + 1}</td>
                                                            <td>
                                                                {doenca.nome}
                                                            </td>
                                                            <td>
                                                                <Row>
                                                                    <ModalDoencaEditar
                                                                        doencaId={doenca.id}
                                                                        carregarDoencas={this.carregarDoencas}
                                                                    ></ModalDoencaEditar>
                                                                    <Col>
                                                                        <Button
                                                                            color="danger"
                                                                            onClick={() => this.deletarDoenca(doenca.id)}
                                                                        >
                                                                            Deletar
                                                                        </Button>
                                                                    </Col>
                                                                </Row>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        )}
                                    </Table>
                                    <Row>
                                        <Col className="col-4 offset-4">
                                            <ModalDoencaAdicionar carregarDoencas={this.carregarDoencas} ></ModalDoencaAdicionar>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default CadastroDoencas;
