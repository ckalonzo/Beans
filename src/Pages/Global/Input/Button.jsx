import React, { Component } from "react";

export default class Button extends Component {
  render(props) {
    const { buttonClassName } = this.props;
    return (
      <div className="container">
        <button
          {...props}
          className={`btn btn-primary${
            buttonClassName ? " " + buttonClassName : ""
          }`}
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
