import React, { Component } from "react";
import Input from "./../../components/input";
import BannerContact from "./../../components/bannerContact";

import { Redirect } from "react-router";

import { Container, ButtonContato, ButtonContatoDisabled } from "./styles";

export default class Contato extends Component {
  state = {
    send: false,
    sended: false
  };

  handleClick = () => {
    this.setState({ sended: true });
  };

  componentDidMount() {
    this.setState({ send: false });
  }

  verificaBotao = () => {
    this.setState({ send: this.props.liberaBotao() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleMsg();
    this.handleClick();
    this.setState({ send: false });
  };
  handleSubmitDisabled = event => {
    event.preventDefault();
  };

  render() {
    const { send, sended } = this.state;
    return sended ? (
      <Redirect to="/" />
    ) : (
      <Container
        onSubmit={send ? this.handleSubmit : this.handleSubmitDisabled}
      >
        <BannerContact />

        <Input
          name="Nome:"
          type="nome"
          required="required"
          valida={this.props.validaForm}
          botao={this.verificaBotao.bind(this)}
        />
        <Input
          name="CPF:"
          type="cpf"
          required="required"
          valida={this.props.validaForm}
          botao={this.verificaBotao.bind(this)}
        />
        <Input
          name="Telefone:"
          type="telefone"
          required="required"
          valida={this.props.validaForm}
          botao={this.verificaBotao.bind(this)}
        />
        <Input
          name="E-mail:"
          type="email"
          required="required"
          valida={this.props.validaForm}
          botao={this.verificaBotao.bind(this)}
        />
        {send ? (
          <ButtonContato type="submit" href="/">
            Enviar Mensagem!
          </ButtonContato>
        ) : (
          <ButtonContatoDisabled type="button">
            Enviar Mensagem!
          </ButtonContatoDisabled>
        )}
      </Container>
    );
  }
}
