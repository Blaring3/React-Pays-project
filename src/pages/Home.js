import React, { Component } from "react";
import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
export default class home extends Component {
  render() {
    return (
      <div>
        <h1>Acceuil</h1>
        <Navigation />
        <Logo />
        <Countries />
      </div>
    );
  }
}
