import React, { Component } from "react";

import { Info } from "./styles";

export default class displayInfo extends Component {
  render() {
    return (
      <Info>
        <h1> {this.props.title} </h1>
        <strong>{this.props.content} </strong>
      </Info>
    );
  }
}
