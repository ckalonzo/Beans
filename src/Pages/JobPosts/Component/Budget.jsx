import React, { Component } from "react";
import MoneyValue from "./MoneyValue";
import Button from "../../Global/Input/Button/Button";
class Budget extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { handleChange, budget } = this.props;
    return (
      <div className="container mt-5">
        <div id="accordion">
          <div className="card mt-3">
            <div className="card-header" id="taheadingBudget">
              <h5 className="mb-0">
                <Button
                  className="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseTABudget"
                  aria-expanded="true"
                  aria-controls="collapseTABudget"
                >
                  How much you willing to spend to get the job done?
                </Button>
              </h5>
            </div>

            <div
              id="collapseTABudget"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body">
                <MoneyValue handleChange={handleChange} budget={budget} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="mx-auto">
              <Button
                type="button"
                className="btn btn-primary"
                onClick={this.back}
              >
                Back
              </Button>
              <Button
                type="button"
                className="btn btn-primary"
                onClick={this.continue}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Budget;
