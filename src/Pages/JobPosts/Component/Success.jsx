import React, { Component } from "react";
import { Link } from "react-router-dom";

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
              <Link to="/">
                <button type="button" className="btn btn-primary">
                  Dashboard
                </button>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Success;
