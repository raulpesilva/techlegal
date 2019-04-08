import React, { Component } from "react";
import { BannerContainer, Wrap } from "./styles";

export default class BannerContact extends Component {
  render() {
    return (
      <BannerContainer>
        <Wrap>
          <h1>Contato </h1>

          <strong> Preencha o formulário abaixo: </strong>
        </Wrap>
      </BannerContainer>
    );
  }
}
