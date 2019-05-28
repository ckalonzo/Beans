import React, { Component } from "react";
import "../../../Css/PostJob.scss";
import { MDBInput } from "mdbreact";

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
            <MDBInput
              type="textarea"
              label="Special Instructions"
              rows="4"
              icon="pencil-alt"
              id={specialInstructions}
              defaultvalue={values.specialInstructions}
              onChange={handleChange("specialInstructions")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SpecialInstructions;
