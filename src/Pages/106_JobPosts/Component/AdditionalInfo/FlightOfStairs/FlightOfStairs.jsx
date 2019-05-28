import React, { Component } from "react";
import "../../../Css/PostJob.scss";
import { MDBFormInline, MDBInput } from "mdbreact";

class FlightOfStairs extends Component {
  state = {
    radio: 6
  };

  onClick = nr => () => {
    this.setState({
      radio: nr
    });
  };
  render() {
    const { handleChange, flightOfStairs, values } = this.props;
    return (
      <MDBFormInline className="mt-5">
        <MDBInput
          gap
          onClick={this.onClick(1)}
          checked={this.state.radio === 1 ? true : false}
          label="0"
          type="radio"
          id={flightOfStairs}
          value={values.largeItems}
          onChange={handleChange("flightOfStairs")}
        />
        <MDBInput
          gap
          onClick={this.onClick(2)}
          checked={this.state.radio === 2 ? true : false}
          label="1"
          type="radio"
          id={flightOfStairs}
          value={values.largeItems}
          onChange={handleChange("flightOfStairs")}
        />
        <MDBInput
          gap
          onClick={this.onClick(3)}
          checked={this.state.radio === 3 ? true : false}
          label="2"
          type="radio"
          id={flightOfStairs}
          value={values.largeItems}
          onChange={handleChange("flightOfStairs")}
        />
        <MDBInput
          gap
          onClick={this.onClick(4)}
          checked={this.state.radio === 4 ? true : false}
          label="3"
          type="radio"
          id={flightOfStairs}
          value={values.largeItems}
          onChange={handleChange("flightOfStairs")}
        />
        <MDBInput
          gap
          onClick={this.onClick(5)}
          checked={this.state.radio === 5 ? true : false}
          label="4"
          type="radio"
          id={flightOfStairs}
          value={values.largeItems}
          onChange={handleChange("flightOfStairs")}
        />
        <MDBInput
          gap
          onClick={this.onClick(6)}
          checked={this.state.radio === 6 ? true : false}
          label="5"
          type="radio"
          id={flightOfStairs}
          value={values.largeItems}
          onChange={handleChange("flightOfStairs")}
        />
        <MDBInput
          gap
          onClick={this.onClick(7)}
          checked={this.state.radio === 7 ? true : false}
          label="6"
          type="radio"
          id={flightOfStairs}
          value={values.largeItems}
          onChange={handleChange("flightOfStairs")}
        />
      </MDBFormInline>
    );
  }
}

export default FlightOfStairs;
