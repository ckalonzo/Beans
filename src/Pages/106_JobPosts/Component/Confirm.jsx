import React, { Component } from "react";

class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    //process Form//
    this.props.nextStep();
    this.props.handleSubmit(e);
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        service,
        budget,
        attachments,
        address,
        city,
        state,
        zipCode,
        largeItems,
        date,
        time,
        flightOfStairs,
        truckLoads,
        typeOfTruck,
        specialInstructions
      }
    } = this.props;
    return (
      <div className="container">
        <React.Fragment>
          <ul class="list-group">
            <li class="list-group-item">Type of Job: {service}</li>
            <li class="list-group-item">Upload Images: {attachments}</li>
            <li class="list-group-item">Address: {address}</li>
            <li class="list-group-item">City: {city}</li>
            <li class="list-group-item">State: {state}</li>
            <li class="list-group-item">Zipcode: {zipCode}</li>
            <li class="list-group-item">
              Will There Be AnyLarge Items Involved?: {largeItems}
            </li>
            <li class="list-group-item">Date: {date}</li>
            <li class="list-group-item">Time: {time}</li>
            <li class="list-group-item">
              How Many Flights Of Stairs?: {flightOfStairs}
            </li>
            <li class="list-group-item">How Many truck Loads?: {truckLoads}</li>
            <li class="list-group-item">
              What type of truck will best sute the Job?: {typeOfTruck}
            </li>
            <li class="list-group-item">
              Additional Information you would like to add?:{" "}
              {specialInstructions}
            </li>
            <li class="list-group-item">Budget:: {budget}</li>
          </ul>

          <br />

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
                Confirm
              </button>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default Confirm;
