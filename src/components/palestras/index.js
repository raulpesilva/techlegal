import React, { Component } from "react";

import { ContainerPalestras, WrapPalestra } from "./styles";

export default class Palestras extends Component {
  render() {
    return (
      <ContainerPalestras>
        <h1>Apresentações:</h1>
        <WrapPalestra>
          <strong> 17:00 </strong>
          <h2> ReactJS </h2>
        </WrapPalestra>
        <WrapPalestra>
          <strong> 17:30 </strong>
          <h2> Styled Components </h2>
        </WrapPalestra>
        <WrapPalestra>
          <strong> 18:00 </strong>
          <h2> HotSite </h2>
        </WrapPalestra>
        <WrapPalestra>
          <strong> 18:50 </strong>
          <h2> Encerramento </h2>
        </WrapPalestra>
      </ContainerPalestras>
    );
  }
}
