import React, { Component } from "react";
import "../../../Css/PostJob.scss";

class SpecialInstructions extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { handleChange, specialInstructions, values, classes } = this.props;
    console.log(handleChange);
    return (
      <div className="className container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <div class="form-check-inline col-12">
              <label class="form-check-label">
                <textarea
                  id={specialInstructions}
                  rows="5"
                  defaultvalue={values.specialInstructions}
                  onChange={handleChange("specialInstructions")}
                  class="form-control"
                />{" "}
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpecialInstructions;
