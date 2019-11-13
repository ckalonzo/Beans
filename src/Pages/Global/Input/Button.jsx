import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div className="container">
        <button
          className="primary-btn btn"
          type={this.props.type}
          onClick={this.props.onClick}
          disabled={this.props.disabled}
        >
          {this.props.labelName}
        </button>
      </div>
    );
  }
}
