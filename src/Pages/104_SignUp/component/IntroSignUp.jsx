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
    const { classes } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto  offset-0 text-center mb-5 mt-5">
              <h1>
                Hi There! Im Jada . Welcome to Trucked Away . Lets get you
                Signed up!
              </h1>
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
