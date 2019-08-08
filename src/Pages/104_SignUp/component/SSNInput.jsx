import React, { Component } from "react";
import cx from "classnames";
import CloseIcon from "./close-icon";
import "../Css/ssn.scss";

class SsnInput extends Component {
  render() {
    let forceShow = this.props.ssnLocked ? "force-show" : "";
    let classes = cx({ ssnInput: true }, { disabled: this.props.ssnLocked });

    return (
      <div className="ssninputSection">
        <div className={classes}>
          <input
            ref={input => {
              this.ssnInput = input;
            }}
            name="ssn"
            type="tel"
            value={this.props.maskedSsn}
            onChange={this.props.handleChangeSSN}
            onBlur={this.props.handleBlurSSN}
            disabled={this.props.ssnLocked}
            autoFocus
          />

          <div
            className={`close-icon ${forceShow}`}
            onClick={() => this.props.clearSsn()}
            title="Clear SSN and Re-enter"
          >
            <CloseIcon fill="#31cda8" />
          </div>
        </div>
      </div>
    );
  }
}

export default SsnInput;
