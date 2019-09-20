import React, { Component } from "react";

export default class Thankyou extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto  offset-0 text-center mb-5 mt-5">
              <h1>Thank you</h1>
              <h2>please allow 3-5 business days for completeion</h2>
            </div>
          </div>
          <div className="row">
            <div className="mx-auto">
              <a href="/">
                <button type="button" className="btn btn-primary">
                  Return to Homepage
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
