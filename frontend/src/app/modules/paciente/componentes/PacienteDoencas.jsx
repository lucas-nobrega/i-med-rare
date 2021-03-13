import React from "react";
import { connect } from "react-redux";
import pacienteService from "services/pacienteService";

import {
    Form,
    CardBody,
    Row,
    Col,
    Table,
    Card,
    CardTitle,
    Spinner,
} from "reactstrap";
import {
    Link,
    withRouter,
} from "react-router-dom";

class PacienteDoencas extends React.Component {
    constructor(props) {
        super();
        this.state = {
            aguardandoDados: false,
            doencas: [],
        };
    }

    componentDidMount() {
        this.setState({ aguardandoDados: true });
        pacienteService.getPacienteIdDoencas(this.props.dadosUsuario.paciente.id).then((resposta) => {
            this.setState({
               doencas: resposta,
                aguardandoDados: false,
            });
        });
    }

    render() {
        console.info(this.props);
        return (
            <div className="content">
                <Row>
                    <Col className="col-md-12">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Selecione a doença</CardTitle>
                                {this.state.aguardandoDados && (
                                    <div>
                                        <Spinner color="primary" />
                                    </div>
                                )}
                                {!this.state.aguardandoDados && (
                                    <Form>
                                        <Row>
                                            <Col>
                                                <Table>
                                                    <thead className="text-primary">
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Doença</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {this.state.doencas.map(
                                                            (
                                                                doenca,
                                                                index
                                                            ) => (
                                                                <tr key={index}>
                                                                   <td>
                                                                      { index+1 }
                                                                   </td>
                                                                    <td>
                                                                        <Link
                                                                            to={`${this.props.match.url}/${doenca.pivot.id}/acompanhamento`}
                                                                        >
                                                                            {
                                                                                doenca.nome
                                                                            }
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Form>
                                )}
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

export default withRouter(connect(mapStateToProps)(PacienteDoencas));


