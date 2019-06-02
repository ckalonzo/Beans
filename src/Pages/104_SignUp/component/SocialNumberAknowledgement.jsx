import React, { Component } from "react";
import "../js/ssnmask";
import "../Css/customer-signup.scss";
export default class SocialNumberAknowledgement extends Component {
  render() {
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
              <p class="num">
                <input class="number" />
                <input class="value" />
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
