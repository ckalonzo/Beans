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
            <div className="col-12">
              <div className="mx-auto">
                <h2> Congrats you're all set!!!</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="mx-auto">
                <h2>Lets pruchase some bids to get you started!!!!</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="mx-auto">
              <Link to="/Membership/Membership">
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
