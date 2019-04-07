import React, { Component } from "react";
import Banner from "./../../components/banner";
import Sobre from "./../../components/sobre";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Sobre />
      </div>
    );
  }
}
