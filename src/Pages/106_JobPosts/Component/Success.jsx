import React, { Component } from "react";

class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="mx-auto">
              <h1> Thank You For Your Submission</h1>
            </div>
          </div>

          <div className="row">
            <div className="mx-auto">
              <a href="/">
                <button type="button" class="btn btn-primary">
                  Dashboard
                </button>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Success;
