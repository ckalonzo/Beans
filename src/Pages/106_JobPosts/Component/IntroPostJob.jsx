import React, { Component } from "react";
class IntroSignUp extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-12  col-md-9 mx-auto offset-0 text-center mb-5 mt-5">
                <h3>
                  Hi There! Im Mathrew.I'll get you started on posting your job.
                  Lets get started!
                </h3>
              </div>
            </div>
            <div className="col-1 mx-auto">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.continue}
            >
              Next
            </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default IntroSignUp;
