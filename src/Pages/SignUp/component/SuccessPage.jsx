import React, { Component, Fragment } from "react";
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
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="mx-auto">
              <h1> Congrats you're all set!!!</h1>
            </div>
          </div>

          <div className="row">
            <div className="mx-auto">
              <Link to="/Dashboard/ContractorDashboard">
                <button type="button" className="btn btn-primary">
                  Dashboard
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Success;
