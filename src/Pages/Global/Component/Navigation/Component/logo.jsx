import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Logo extends Component {
  render() {
    return (
      <div class="logo-wrapper">
        <div class="logo logo-top">
          <Link to="/" className="navbar-brand"></Link>
        </div>
      </div>
    );
  }
}
