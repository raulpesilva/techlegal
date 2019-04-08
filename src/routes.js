import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/navbar";

import Home from "./pages/home";
import Palestrantes from "./pages/palestrantes";
import Contato from "./pages/contato";

export default class Routes extends Component {
  state = {
    msg: null,
    show: false,
    nome: false,
    cpf: false,
    telefone: false,
    email: false,
    botao: false
  };

  reset() {
    this.setState({ nome: false, cpf: false, telefone: false, email: false });
  }

  handleMsg = () => {
    this.setState({ msg: "Aguarde o contato", show: true });
    setTimeout(this.hideMsg, 3000);
    this.reset();
  };

  hideMsg = () => {
    this.setState({ show: false });
  };

  noAction = () => {};

  validaForm = (type, estado) => {
    type === "nome"
      ? estado
        ? this.setState({ nome: estado })
        : this.setState({ nome: false })
      : this.noAction();

    type === "cpf"
      ? estado
        ? this.setState({ cpf: estado })
        : this.setState({ cpf: false })
      : this.noAction();

    type === "telefone"
      ? estado
        ? this.setState({ telefone: estado })
        : this.setState({ telefone: false })
      : this.noAction();

    type === "email"
      ? estado
        ? this.setState({ email: estado })
        : this.setState({ email: false })
      : this.noAction();

    console.log(this.state);
  };

  liberaBotao = () => {
    const { nome, cpf, telefone, email } = this.state;
    if (nome && cpf && telefone && email) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const { msg, show, botao } = this.state;
    return (
      <BrowserRouter>
        <NavBar msg={msg} show={show} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Palestrantes" component={Palestrantes} />
          <Route
            exact
            path="/Contato"
            render={props => (
              <Contato
                handleMsg={this.handleMsg.bind(this)}
                validaForm={this.validaForm.bind(this)}
                botaoForm={botao}
                liberaBotao={this.liberaBotao.bind(this)}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
