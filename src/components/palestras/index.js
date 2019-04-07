import React, { Component } from "react";

import { ContainerPalestras, WrapPalestra, Group } from "./styles";

export default class Palestras extends Component {
  render() {
    return (
      <ContainerPalestras>
        <h1>Apresentações:</h1>
        <Group>
          <WrapPalestra>
            <strong> 17:00 </strong>
            <h2> ReactJS </h2>
          </WrapPalestra>
          <WrapPalestra>
            <strong> 17:30 </strong>
            <h2> Styled Components </h2>
          </WrapPalestra>
        </Group>
        <Group>
          <WrapPalestra>
            <strong> 18:00 </strong>
            <h2> HotSite </h2>
          </WrapPalestra>
          <WrapPalestra>
            <strong> 18:30 </strong>
            <h2> Encerramento </h2>
          </WrapPalestra>
        </Group>
      </ContainerPalestras>
    );
  }
}
