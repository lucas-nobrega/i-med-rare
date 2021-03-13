import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
    Button,
    Row,
    Col,
    Modal, 
    ModalBody, 
} from "reactstrap";

const OpcaoCadastro = (props) => {
        const {
          buttonLabel,
        } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div class="container">
            <Button className="btn btn-round" color="secondary" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} id="opcaoModal">
                <ModalBody>
                    <Row className="justify-content-center">
                        <Col className="col-5">
                            <Link
                                to="/admin/cadastro/medico"
                                className="btn btn-round btn-lg bg-success"
                            >
                                Sou médico
                            </Link>
                        </Col>
                        <Col className="col-5">
                            <Link
                                to="/admin/cadastro/paciente"
                                className="btn btn-round btn-lg bg-primary"
                            >
                                Sou paciente
                            </Link>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default OpcaoCadastro;
