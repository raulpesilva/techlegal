import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Navigation } from "./styles";

import logo from "./../../img/logo.png";

export default class NavBar extends Component {
  render() {
    return (
      <Navigation>
        <img src={logo} />
        <ul>
          <li>
            <Link> Home </Link>
          </li>
          <li>
            <Link> Palestrantes </Link>
          </li>
          <li>
            <Link> Contato </Link>
          </li>
        </ul>
      </Navigation>
    );
  }
}
