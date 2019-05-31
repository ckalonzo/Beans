import React, { Component } from "react";
import "../Css/PostJob.scss";

class TypeOfJob extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12  offset-0 text-center mb-5 mt-5">
              <h3>What Type of Job you need?</h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4 mx-auto text-center mb-5">
              <React.Fragment>
                <select
                  className="browser-default custom-select"
                  value={values.service}
                  onChange={handleChange("service")}
                >
                  <option>Choose your option</option>
                  <option value={"Junk Removal"}>Junk Removal</option>
                  <option value={"Cleaner Service"}>Cleaner Service</option>
                </select>
              </React.Fragment>
            </div>
          </div>
          <div className="row">
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
          </div>
        </div>
        <div />
      </React.Fragment>
    );
  }
}

export default TypeOfJob;
