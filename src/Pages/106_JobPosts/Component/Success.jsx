import React, { Component } from "react";

class Success extends Component {
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
              <button
                type="button"
                class="btn btn-primary"
                onClick={this.back}
                href="/"
              >
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Success;
