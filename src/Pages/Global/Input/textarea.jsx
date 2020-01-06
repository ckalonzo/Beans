import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TextArea extends Component {
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
        <textarea
          id={this.props.id}
          type="text"
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
          className="form-control"
          value={this.props.value ? this.props.value : ""}
        />
        {this.renderError()}
      </div>
    );
  }
}
