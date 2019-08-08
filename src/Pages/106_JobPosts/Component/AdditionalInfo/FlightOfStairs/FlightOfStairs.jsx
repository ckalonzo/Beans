import React, { Component } from "react";
import "../../../Css/PostJob.scss";

class FlightOfStairs extends Component {
  render() {
    const { handleChange, flightOfStairs, values } = this.props;
    return (
      <div className=" mt-5">
        <div className="form-check-inline">
          <label className="form-check-label">
            <input
              type="radio"
              id={flightOfStairs}
              onChange={handleChange("flightOfStairs")}
              value="1"
              flightOfStairs={flightOfStairs}
              className="form-check-input"
              name="optradio"
            />{" "}
            1
          </label>
        </div>
        <div className="form-check-inline">
          <label className="form-check-label">
            <input
              type="radio"
              id={flightOfStairs}
              onChange={handleChange("flightOfStairs")}
              value="2"
              flightOfStairs={flightOfStairs}
              className="form-check-input"
              name="optradio"
            />{" "}
            2
          </label>
        </div>
        <div className="form-check-inline">
          <label className="form-check-label">
            <input
              type="radio"
              id={flightOfStairs}
              onChange={handleChange("flightOfStairs")}
              value="3"
              flightOfStairs={flightOfStairs}
              className="form-check-input"
              name="optradio"
            />{" "}
            3
          </label>
        </div>
        <div className="form-check-inline">
          <label className="form-check-label">
            <input
              type="radio"
              id={flightOfStairs}
              onChange={handleChange("flightOfStairs")}
              value="4"
              flightOfStairs={flightOfStairs}
              className="form-check-input"
              name="optradio"
            />{" "}
            4
          </label>
        </div>
        <div className="form-check-inline">
          <label className="form-check-label">
            <input
              type="radio"
              id={flightOfStairs}
              onChange={handleChange("flightOfStairs")}
              value="5"
              flightOfStairs={flightOfStairs}
              className="form-check-input"
              name="optradio"
            />{" "}
            5
          </label>
        </div>
        <div className="form-check-inline">
          <label className="form-check-label">
            <input
              type="radio"
              id={flightOfStairs}
              onChange={handleChange("flightOfStairs")}
              value="6"
              flightOfStairs={flightOfStairs}
              className="form-check-input"
              name="optradio"
            />{" "}
            6
          </label>
        </div>
      </div>
    );
  }
}

export default FlightOfStairs;
