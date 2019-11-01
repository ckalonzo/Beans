import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <input
        {...this.props}
        id={this.props.id}
        type={this.props.type ? this.props.type : "true"}
        name={this.props.name}
        className={this.props.className}
        value={this.props.value}
        aria-invalid={this.props.ariaInvalid}
        aria-required={
          this.props.ariaRequired ? this.props.ariaRequired : "true"
        }
      />
    );
  }
}
TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string
};
