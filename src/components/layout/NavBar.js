/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark  fixed-top">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
            Pokedex
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
