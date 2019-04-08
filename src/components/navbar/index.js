import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Navigation } from "./styles";

import logo from "./../../img/logo.png";

export default class NavBar extends Component {
  state = {
    msg: null,
    show: false
  };

  componentWillMount() {
    this.setState({ msg: this.props });
  }

  render() {
    const { msg, show } = this.props;

    return (
      <Navigation>
        <Link to="/">
          <img src={logo} alt="Logo TechLegal" />
        </Link>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/Palestrantes"> Palestrantes </Link>
          </li>
          <li>
            <Link to="/Contato"> Contato </Link>
          </li>
        </ul>
        {show ? <span> {msg} </span> : ""}
      </Navigation>
    );
  }
}
