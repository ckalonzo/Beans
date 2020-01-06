import React, { Component } from "react";

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    event.stopPropagation();
    if (event.target) {
      this.props.onClick(event.target.id, event.target.checked);
    }
  };

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
        <input
          id={this.props.id}
          type="checkbox"
          className="form-check-input"
          checked={this.props.value}
          onChange={() => {}}
          onClick={this.handleChange}
        />
        <label htmlFor={this.props.id}>{this.rennderLabel()}</label>
        {this.renderError()}
      </div>
    );
  }
}
