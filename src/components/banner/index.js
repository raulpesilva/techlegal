import React, { Component } from "react";
import { BannerContainer } from "./styles";

import DisplayInfo from "./../displayInfo";

export default class Banner extends Component {
  render() {
    return (
      <BannerContainer>
        <div>
          <h1> GoTechLegal </h1>
          <strong>#03</strong>
        </div>
        <DisplayInfo />
      </BannerContainer>
    );
  }
}
