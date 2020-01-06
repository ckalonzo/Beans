import React, { Component } from "react";

class IntroSignUp extends Component {
  state = {
    size: "large"
  };

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 mx-auto text-center mb-5 mt-5">
              <h2 className="font-40-48-60">
                Hi There! Im Jada . Welcome to Trucked Away . Lets get you
                Signed up!
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="mx-auto">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.continue}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroSignUp;
