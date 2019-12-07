import React, { Component } from "react";

export default class Button extends Component {
  render({ children, disabled, loading, contain, color, props }) {
    return (
      <div className="container">
        <button
          {...props}
          className="btn btn-primary"
          type={this.props.type}
          onClick={this.props.onClick}
          // disabled={this.props.disabled}
        >
          {loading ? loading : children}
          {this.props.labelName}
        </button>
      </div>
    );
  }
}
