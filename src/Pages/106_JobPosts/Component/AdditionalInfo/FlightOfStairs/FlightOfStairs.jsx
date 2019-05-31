import React, { Component } from "react";
import "../../../Css/PostJob.scss";

class FlightOfStairs extends Component {
  render() {
    const { handleChange, flightOfStairs, values } = this.props;
    return (
      <div className="input-group mt-5">
        <div class="form-check form-check-inline">
          <div className="radio">
            <label>
              <input
                type="radio"
                checked={true}
                id="iuiuipo"
                onChange={handleChange("flightOfStairs")}
                value={values.largeItems}
              />
              1
            </label>
          </div>
          {/* <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id={flightOfStairs}
            //value="option1"
            onChange={handleChange("flightOfStairs")}
            value={values.largeItems}
          />
          <label class="form-check-label" for="inlineRadio1">
            1
          </label>*/}
        </div>
        <div class="form-check form-check-inline">
          <div className="radio">
            <label>
              <input
                type="radio"
                id="hghgh"
                onChange={handleChange("flightOfStairs")}
                value={values.largeItems}
              />
              2
            </label>
          </div>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id={flightOfStairs}
            value={values.largeItems}
            onChange={handleChange("flightOfStairs")}
          />
          <label className="form-check-label" for="flightofStairs3">
            3
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id={flightOfStairs}
            value={values.largeItems}
            onChange={handleChange("flightOfStairs")}
          />
          <label className="form-check-label" for="flightofStairs4">
            4
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id={flightOfStairs}
            value={values.largeItems}
            onChange={handleChange("flightOfStairs")}
          />
          <label className="form-check-label" for="flightofStairs5">
            5
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id={flightOfStairs}
            value={values.largeItems}
            onChange={handleChange("flightOfStairs")}
          />
          <label className="form-check-label" for="flightofStairs6">
            6
          </label>
        </div>
      </div>
    );
  }
}

export default FlightOfStairs;
