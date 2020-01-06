import React, { Component } from "react";

export default class ReadOnlyFields extends Component {
  renderClass() {
    if (this.props.hidden) {
      return "hidden";
    }
    //else
    return "";
  }
  renderLabel() {
    if (this.props.labelName && this.props.labelClasses) {
      return (
        <label htmlFor={this.props.id} className={this.props.labelClasses}>
          {this.props.labelName}
        </label>
      );
    }
    if (this.props.labelName) {
      return <label htmlFor={this.props.id}>{this.props.labelName}</label>;
    }
  }

  renderValue() {
    if (this.props.value) {
      if (this.props.array) {
        return this.props.value.map((string, index) => {
          return <div key={index}>{string}</div>;
        });
        return this.props.value;
      }
    }
    return "";
  }

  render() {
    return (
      <div className={this.renderClass()}>
        {this.renderLabel()}
        <div id={this.props.id} className={this.props.classes}>
          {this.renderValue()}
        </div>
      </div>
    );
  }
}
