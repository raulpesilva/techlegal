import React, { Component } from "react";

import Curriculo from "./../curriculo";

import {
  Container,
  Foto,
  Nome,
  Palestra,
  BoxCard,
  BoxCardModal,
  ModalButton,
  Conteudo,
  Wrap,
  Modal
} from "./styles";

export default class Card extends Component {
  state = {
    show: false,
    nome: null,
    palestra: null,
    desc: null,
    foto: null
  };
  showModal = () => {
    const { foto, nome, palestra, desc } = this.props;
    this.setState({
      show: true,
      foto: foto,
      nome: nome,
      palestra: palestra,
      desc: desc
    });
  };
  hideModal = event => {
    event.stopPropagation();
    this.setState({ show: false });
  };
  render() {
    const { nome, foto, palestra, desc, formacoes, descLong } = this.props;
    const { show } = this.state;
    const modal = () => (
      <div>
        <Modal onClick={this.hideModal} />
        <BoxCardModal>
          <Container>
            <Foto src={foto} />
            <Nome>{nome}</Nome>
            <Wrap>
              <Palestra>{palestra}</Palestra>
              <Conteudo>{descLong}</Conteudo>
            </Wrap>
            <h1>Formações</h1>
            <Curriculo formacoes={formacoes} />
            <ModalButton onClick={this.hideModal}>
              <i className="fas fa-times" />
            </ModalButton>
          </Container>
        </BoxCardModal>
      </div>
    );

    return (
      <BoxCard>
        {show ? modal() : ""}
        <Container>
          <Foto src={foto} alt={`Foto de ${nome}`} />
          <Nome>{nome}</Nome>
          <Wrap>
            <Palestra>{palestra}</Palestra>
            <Conteudo>{desc}</Conteudo>
          </Wrap>
          <ModalButton onClick={this.showModal}>
            <i className="fas fa-user-graduate" />
          </ModalButton>
        </Container>
      </BoxCard>
    );
  }
}
