import React, { Component } from "react";
import MoneyValue from "./MoneyValue";
class Budget extends Component {
  render() {
    if (currentStep !== 5) {
      return null;
    }
    const { handleChange, budget, currentStep } = this.props;
    return (
      <div className="container mt-5">
        <div id="accordion">
          <div class="card mt-3">
            <div class="card-header" id="taheadingBudget">
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseTABudget"
                  aria-expanded="true"
                  aria-controls="collapseTABudget"
                >
                  How much you willing to spend to get the job done?
                </button>
              </h5>
            </div>

            <div
              id="collapseTABudget"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div class="card-body">
                <MoneyValue handleChange={handleChange} budget={budget} />
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="mx-auto">
              <button type="button" class="btn btn-primary" onClick={this.back}>
                Back
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={this.continue}
              >
                Continue
              </button>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Budget;
