import React, { Component } from "react";

import { Graduacao, Ano, Curso } from "./styles";

export default class Curriculo extends Component {
  render() {
    const { formacoes } = this.props;
    return formacoes.map((formacao, key) => (
      <Graduacao key={key}>
        <Ano>{formacao.ano}</Ano>
        <Curso>{formacao.curso}</Curso>
      </Graduacao>
    ));
  }
}
