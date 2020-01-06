import React, { Component } from "react";
//import { AvField, AvGroup } from "availity-reactstrap-validation";
import { EMAIL_PATTERN } from "../../utils/patterns";
import { valueTrim, removeNonUTFChars, checkNotNull } from "../../utils/util";

export default class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: this.props.emailValue
    };
    this.sendDataToParent = this.sendDataToParent.bind(this);
  }

  sendDataToParent(event) {
    let validVal = valueTrim(removeNonUTFChars(event.target.value));
    this.setState({ emailValue: validVal });
    this.props.sendDataToParent(event);
  }

  render(props) {
    var validateArg = {
      ...(this.props.emailRequired && {
        required: { errorMessage: "Enter a valid Email Address" }
      }),
      pattern: {
        value: EMAIL_PATTERN,
        errorMessage: "Email Address is not valid"
      }
    };
    let indexOfTab = "";
    if (checkNotNull(this.props.indexOfTab)) {
      indexOfTab = this.props.indexOfTab;
    }
    let alertDiv = this.props.id + "Alert";
    return (
      <div>
        <label htmlFor="{this.props.id}">Email</label>
        <label className="text-danger" hidden={!this.props.emailRequired}>
          *
        </label>
        <div>
          <div id={alertDiv}>
            <input
              {...props}
              type="email"
              id={this.props.id}
              name={this.props.id}
              value={this.state.emailValue}
              onBlur={this.sendDataToParent}
              onChange={this.sendDataToParent}
              validate={{ ...validateArg }}
              maxLength="255"
              tabIndex={indexOfTab}
              aria-describedby={alertDiv}
              className="form-control"
            />
          </div>
        </div>
      </div>
    );
  }
}
