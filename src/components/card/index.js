import React, { Component } from "react";

import {
  Container,
  Foto,
  Nome,
  Palestra,
  BoxCard,
  Modal,
  Conteudo,
  Wrap
} from "./styles";

export default class Card extends Component {
  render() {
    const { nome, foto, palestra, desc } = this.props;
    return (
      <BoxCard>
        <Container>
          <Foto src={foto} />
          <Nome>{nome}</Nome>
          <Wrap>
            <Palestra>{palestra}</Palestra>
            <Conteudo>{desc}</Conteudo>
          </Wrap>
          <Modal>↓</Modal>
        </Container>
      </BoxCard>
    );
  }
}
