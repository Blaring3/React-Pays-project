import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div>Navigation</div>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>accueil</li>
          </NavLink>
          <NavLink to="/about"  className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>à propos</li>
          </NavLink>
        </ul>
      </div>
    );
  }
}
