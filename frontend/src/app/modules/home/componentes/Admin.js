import React from "react";

import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";

import { bindActionCreators } from "redux";
import DemoNavbar from "app/modules/home/componentes/DemoNavbar.js";
import Footer from "./Footer";
import Sidebar from "app/modules/home/componentes/Sidebar.js";
import { connect } from "react-redux";
import routes from "routes.js";
import { verLoginAction } from "app/modules/usuario/usuario.slice";
//import Acompanhamentos from "app/modules/acompanhamento/componentes/Acompanhamentos";

var ps;

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "black",
            activeColor: "info",
        };
        this.mainPanel = React.createRef();
    }
    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(this.mainPanel.current);
            document.body.classList.toggle("perfect-scrollbar-on");
        }
        this.props.verLogin();
    }
    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
            document.body.classList.toggle("perfect-scrollbar-on");
        }
    }
    componentDidUpdate(e) {
        if (e.history.action === "PUSH") {
            this.mainPanel.current.scrollTop = 0;
            document.scrollingElement.scrollTop = 0;
        }
    }
    handleActiveClick = (color) => {
        this.setState({ activeColor: color });
    };
    handleBgClick = (color) => {
        this.setState({ backgroundColor: color });
    };
    render() {
        return (
            <div className="wrapper">
                <Sidebar
                    {...this.props}
                    routes={routes}
                    bgColor={this.state.backgroundColor}
                    activeColor={this.state.activeColor}
                />
                <div className="main-panel" ref={this.mainPanel}>
                    <DemoNavbar {...this.props} />
                    <Switch>
                        {routes.map((prop, key) => {
                            var permite = false;
                            if (typeof prop.permissions === "undefined") {
                                permite = true;
                            } else {
                                for (const permissao in prop.permissions) {
                                    if (
                                        this.props.perfis.includes(
                                            prop.permissions[permissao]
                                        )
                                    ) {
                                        permite = true;
                                    }
                                }
                            }

                            if (permite) {
                                return (
                                    <Route
                                        path={prop.layout + prop.path}
                                        component={prop.component}
                                        key={key}
                                    />
                                );
                            }
                        })}
                    </Switch>
                    <Footer fluid />
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    nomeUsuario: state.usuario.dados.nome,
    logado: state.usuario.logado,
    perfis: state.usuario.perfis,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(
            {
                verLogin: verLoginAction,
            },
            dispatch
        ),
        dispatch,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
