import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TextInput extends Component {
  renderError() {
    if (this.props.error) {
      return (
        <div id="name-err" className="err-text" aria-live="asseritive">
          {this.props.error}
        </div>
      );
    }
    //else
    return;
  }

  renderLabel() {
    let label = this.props.labelName;
    if (this.props.required) {
      label += "*";
    }
    return label;
  }
  render() {
    return (
      <div className="container">
        <label htmlFor={this.props.id}>{this.renderLabel()}</label>
        <input
          id={this.props.id}
          value={this.props.value ? this.props.value : ""}
          type="text"
          onChange={this.props.onChange}
          className="form-control"
          onBlur={this.handleBlur}
        />
        {this.renderError()}
      </div>
    );
  }
}
