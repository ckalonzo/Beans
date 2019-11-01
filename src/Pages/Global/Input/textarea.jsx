import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <textarea
        cols="30"
        rows="10"
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
TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string
};
