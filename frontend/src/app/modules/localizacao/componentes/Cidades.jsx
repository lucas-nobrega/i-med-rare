import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    getCidadesAction,
    fecharMensagemAction,
    setMensagemAction,
    tiposMensagens,
} from "../localizacao.slice";

const estilo = {};

class Cidades extends React.Component {
    componentDidMount() {
        this.props.getCidades(1);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                {!this.props.aguardandoDados && (
                    <div>
                        <div>
                            {this.props.dados.map((cidade, index) => (
                                <div key={index}>{cidade.nome}</div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dados: state.localizacao.cidades,
    aguardandoDados: state.localizacao.aguardandoDados,
    mensagemRetorno: state.localizacao.mensagemRetorno,
    tipoMensagem: state.localizacao.tipoMensagem,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(
            {
                getCidades: getCidadesAction,
                fecharMensagem: fecharMensagemAction,
                setMensagem: setMensagemAction,
            },
            dispatch
        ),
        dispatch,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cidades);
