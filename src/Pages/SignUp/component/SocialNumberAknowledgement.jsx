import React, { Component } from "react";
import "../js/ssnmask";
import "../Css/customer-signup.scss";
import SsnInput from "./SSNInput";
import TermAndConditions from "./termAndConditions";
import Modal from "../../Global/Component/UI/Modal/Modal";
export default class SocialNumberAknowledgement extends Component {
  componentDidMount() {
    function loadModal() {
      setTimeout(() => {
        <Modal />;
      }, 100);
    }
  }
  render() {
    const {
      maskedSsn,
      handleChangeSSN,
      handleBlurSSN,
      ssnLocked,
      starredMask,
      actualSsn,
      clearSsn
    } = this.props;
    console.log(this.props);
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12  offset-0  text-center mb-5 mt-5">
              <h3>Check for Safety</h3>
              <h6>
                Before accepting jobs, all Trucked Away Partners must go through
                a simple check for safety
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-center mx-auto">
              <label for="fieldSsn">SSN: </label>
              <SsnInput
                maskedSsn={maskedSsn}
                handleChangeSSN={handleChangeSSN}
                handleBlurSSN={handleBlurSSN}
                clearSsn={clearSsn}
                actualSsn={actualSsn}
                ssnLocked={ssnLocked}
                starredMask={starredMask}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-8  mx-auto">
              <TermAndConditions />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
