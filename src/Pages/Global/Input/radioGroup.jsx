import React, { Component } from "react";

export default class radioGroup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    event.stopPropagation();
    if (event.target) {
      this.props.onChange(this.props.id, event.target.value);
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

  renderOptions() {
    return this.props.options.map(option => {
      if (this.props.value === option.value) {
        return (
          <div key={option.name} className="radio-item">
            <input
              checked={true}
              id={option.id}
              type="radio"
              value={option.value}
              name={this.props.id}
              className="form-check-input"
              onChange={() => {}}
            />
            <label htmlFor={option.id}>{option.name}</label>
          </div>
        );
      }
      return (
        <div key={option.name} className="radio-item">
          <input
            checked={false}
            id={option.id}
            type="radio"
            value={option.value}
            name={this.props.id}
            className="form-check-input"
            onChange={() => {}}
          />
          <label htmlFor={option.id}>{option.name}</label>
        </div>
      );
    });
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
        <legend className="text-dark">{this.rennderLabel()}</legend>
        <div
          id={this.props.id}
          className="radio-group"
          onChange={this.handleChange}
        >
          {this.renderOptions()}
        </div>
        {this.renderError()}
      </div>
    );
  }
}
