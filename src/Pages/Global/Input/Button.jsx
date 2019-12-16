import React, { Component } from "react";

export default class Button extends Component {
  render(props) {
    return (
      <div className="container">
        <button
          {...props}
          className="btn btn-primary"
          type={this.props.type}
          onClick={this.props.onClick}
          // disabled={this.props.disabled}
        >
          {this.props.labelName}
        </button>
      </div>
    );
  }
}
