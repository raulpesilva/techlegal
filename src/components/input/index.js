import React, { Component } from "react";

import { Container, Label, InputBox } from "./styles";

export default class Input extends Component {
  state = {
    value: "",
    type: null
  };

  mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf;
  }
  mTel(tel) {
    tel = tel.replace(/\D/g, "");
    tel = tel.replace(/^(\d)/, "($1");
    tel = tel.replace(/(.{3})(\d)/, "$1)$2");
    if (tel.length === 9) {
      tel = tel.replace(/(.{1})$/, "-$1");
    } else if (tel.length === 10) {
      tel = tel.replace(/(.{2})$/, "-$1");
    } else if (tel.length === 11) {
      tel = tel.replace(/(.{3})$/, "-$1");
    } else if (tel.length === 12) {
      tel = tel.replace(/(.{4})$/, "-$1");
    } else if (tel.length > 12) {
      tel = tel.replace(/(.{4})$/, "-$1");
    }
    return tel;
  }

  checkInput = content => {
    const { type } = this.state;

    if (type === "cpf") {
      return this.setState({ value: this.mCPF(content) });
    }
    if (type === "telefone") {
      return this.setState({ value: this.mTel(content) });
    }
  };

  setValue = e => {
    this.setState({ value: e.target.value });
    // console.log(e.target.value);
    this.checkInput(e.target.value);
    const { type } = this.state;
    this.validaInput(type, e.target.value.length);
    this.props.botao();
  };

  validaInput = (type, content) => {
    if (type === "nome") {
      const estadoImput = content >= 3;
      this.props.valida(type, estadoImput);
      // console.log("chamando");
    }
    if (type === "cpf") {
      const estadoImput = content >= 12;
      this.props.valida(type, estadoImput);
    }
    if (type === "telefone") {
      const estadoImput = content >= 13;
      this.props.valida(type, estadoImput);
    }
    if (type === "email") {
      const estadoImput = content >= 7;
      this.props.valida(type, estadoImput);
    }
  };

  componentDidMount() {
    this.setState({ type: this.props.type });
  }

  render() {
    const { name, type, required } = this.props;
    const { value } = this.state;

    return (
      <Container>
        <Label>{name} </Label>
        <InputBox
          type={type}
          required={required}
          value={value}
          onChange={this.setValue}
        />
      </Container>
    );
  }
}
