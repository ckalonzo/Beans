import React, { Component } from "react";
import PropTypes from "prop-types";
// import {EMAIL_PATTERN} from

const DEFAULT_MAX_CHARS = 45;
const DEFAULT_MIN_CHARS = 0;
const OPTIONAL_TYPE = "optional";

export class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ariaId: this.props.id + "err",
      error: true,
      disableError: this.props.disableError || false,
      message: "",
      type: "radio"
    };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onValidate = this.onValidate.bind(this);
    this.onClean = this.onClean.bind(this);

    //     this.setAriaError = this.setAriaError.bind(this);
    //     this.setAriaErrorMessage = this.setAriaErrorMessage.bind(this);
    //     this.setAriaErrorClass = this.setAriaErrorClass.bind(this);
    //     this.setAriaErrorMessageClass = this.setAriaErrorMessageClass.bind(this);
    this.renderSubText = this.renderSubText.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const fakeEvent = {
      target: {
        value: this.props.value
      }
    };
    if (
      newProps.onsubmitCheck &&
      !this.props.onSubmitCheck &&
      !this.state.error
    ) {
      this.onValidate(fakeEvent);
    }
    if (newProps.clearErrorCondition) {
      this.forceRemoveErrors();
    }
  }
  forceRemoveErrors() {
    if (this.state.error) {
      this.setState({ error: false });
    }
  }

  onChange(event) {
    event = this.onClean(event);
    if (this.props.onChange) {
      this.props.onChange(event);
    }
    if (this.props.errorOnUsage) {
      this.onValidate(event);
    }
    return event;
  }
  onBlur(event) {
    if (!this.state.disableError) {
      event = this.onValidate(event);
    }
    //trim whitespace from beginning and end
    event.target.value = event.target.value
      .replace(/^\s\s*/g, "")
      .replace(/\s\*$/g, "");
    //     if (this.props.onBlur) event;
    return event;
  }

  onClean(event) {
    //const cursorPosition = event.target.selectorStart;
    event.target.value = event.target.value.replace(/\uFFFD/g, "");

    //     if (this.props.doNotAllowAlphaNum) {
    //       event.target.value = event.target.value.replace(parseAlphaNum, ""); //parse all non alphanumerics and spaces
    //     }
    if (this.props.onClean) {
      this.props.onClean(event);
    }

    //     if (!isMobile && !isTablet) {
    //       event.target.selectionEnd = cursorPosition;
    //     }
    return event;
  }
  onValidate(event) {
    if (this.props.type === OPTIONAL_TYPE) {
      this.setOrDisableError(false);
    } else if (!event.target.value) {
      this.setOrDisableError(true);
    } else if (
      event.target.value.length < (this.props.minLength || DEFAULT_MIN_CHARS)
    ) {
      this.setOrDisableError(
        true,
        "Length must be greater than" +
          (this.props.minLength || DEFAULT_MIN_CHARS)
      );
    } else {
      this.setOrDisableError(false);
    }
    if (this.props.id.indexOf("Email") !== -1) {
      // if (!EMAIL_PATTERN.test(event.target.value)) {
      //   this.setOrDisableError(true, "Enter a valid email address.");
      // }
    }
    if (this.props.onValidate) {
      const error = this.props.onValidate(event);
      if (error) {
        this.setOrDisableError(true, error.message);
      }
    }
    return event;
  }
  setOrDisableError(error, message) {
    this.setState({ error: error, errorMessage: message });
    if (this.props.onError) {
      this.props.onError(error, this.props.id);
    }
  }
  renderSubText() {
    if (this.props.subText) {
      return <p className="sub-text">{this.props.subText}</p>;
    }
  }
  renderTextArea() {
    if (this.props.multiline) {
      return (
        <div>
          <textarea
            {...this.props}
            id={this.props.id}
            type={this.props.type ? this.props.type : "text"}
            name={this.props.id}
            onBlur={this.onBlur}
            onChange={this.onChange}
            onPaste={this.onPaste}
            onClick={this.onClick}
            tabIndex={this.props.tabIndex}
            className={"form-control " + this.props.className}
            value={this.props.value}
            maxLength={
              this.props.maxLength ? this.props.maxLength : DEFAULT_MAX_CHARS
            }
            minLength={
              this.props.minLength ? this.props.minLength : DEFAULT_MIN_CHARS
            }
          />
        </div>
      );
    } else if (this.props.radio) {
      return (
        <div>
          <input
            {...this.props}
            id={this.props.id}
            type={this.props.type ? this.props.type : "radio"}
            name={this.props.id}
            onBlur={this.onBlur}
            onChange={this.onChange}
            onPaste={this.onPaste}
            tabIndex={this.props.tabIndex}
            className={"form-check-input " + this.props.className}
            value={this.props.value}
          />
        </div>
      );
    } else {
      return (
        <div>
          <input
            {...this.props}
            id={this.props.id}
            type={this.props.type ? this.props.type : "text"}
            name={this.props.id}
            onBlur={this.onBlur}
            onChange={this.onChange}
            onPaste={this.onPaste}
            onClick={this.onClick}
            tabIndex={this.props.tabIndex}
            className={"form-control " + this.props.className}
            value={this.props.value}
            maxLength={
              this.props.maxLength ? this.props.maxLength : DEFAULT_MAX_CHARS
            }
            minLength={
              this.props.minLength ? this.props.minLength : DEFAULT_MIN_CHARS
            }
          />
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <label
          id={this.props.id}
          htmlFor={this.props.id}
          classNme={"" + (this.props.customStyle ? this.props.customStyle : "")}
        >
          {this.props.label}
        </label>
        {/* {this.setDataPlaceholder()} */}
        {this.renderTextArea()}
        <div>{this.state.errorMessage || this.props.errorMessage}</div>
        <div>{this.renderSubText}</div>
      </div>
    );
  }
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  errorMessage: PropTypes.string,
  value: PropTypes.string
};
