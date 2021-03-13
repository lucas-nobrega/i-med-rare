import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/css/main.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "app/modules/home/componentes/Admin.js";

import store from "./configureStore";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Redirect to="/admin/pagina_inicial" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
