import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Navigation } from "./styles";

import logo from "./../../img/logo.png";

export default class NavBar extends Component {
  render() {
    return (
      <Navigation>
        <img src={logo} alt="Logo TechLegal" />
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/Palestrantes"> Palestrantes </Link>
          </li>
          <li>
            <Link to="/"> Contato </Link>
          </li>
        </ul>
      </Navigation>
    );
  }
}
