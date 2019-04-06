import React, { Component } from "react";
import { BannerContainer, Wrap, Display } from "./styles";

import DisplayInfo from "./../displayInfo";
import Palestras from "./../palestras";

export default class Banner extends Component {
  render() {
    return (
      <BannerContainer>
        <Wrap>
          <div>
            <h1> GoTechLegal </h1>
            <strong>#03</strong>
          </div>
          <p>
            TechLegal é uma plataforma para encontrar e desenvolver comunidades
            locais. As pessoas usam o TechLegal para conhecer outras pessoas,
            aprender coisas novas, contar com apoio, sair da sua zona de
            conforto e, juntas, fazerem mais daquilo que curtem.
          </p>
        </Wrap>
        <Display>
          <DisplayInfo title="Data" content="08/04" />
          <DisplayInfo title="Horario" content="17:00" />
        </Display>
      </BannerContainer>
    );
  }
}
