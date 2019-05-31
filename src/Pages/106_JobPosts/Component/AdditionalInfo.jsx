import React, { Component } from "react";
//css
import "../Css/PostJob.scss";
// components
import SpecialInstructions from "././AdditionalInfo/SpecialInstructions/SpecialInstructions";
import TypeOfTruck from "../Component/AdditionalInfo/TypeOfTruck/TypeOfTruck";
import TruckLoads from "../Component/AdditionalInfo/TruckLoads/TruckLoads";
import FlightOfStairs from "../Component/AdditionalInfo/FlightOfStairs/FlightOfStairs";
import Slot from "../Component/AdditionalInfo/DatePicker/slot";
import AnyLargeItems from "../Component/AdditionalInfo/AnyLargeItemsComponent/AnyLargeItems";
import LocationPage from "./AdditionalInfo/LocationOfJob";

class AdditionalInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values,
      address,
      city,
      state,
      zipCode,
      largeItems,
      selectedDate,
      selectedTime,
      flightOfStairs,
      truckLoads,
      typeOfTruck,
      specialInstructions
    } = this.props;

    return (
      <div className="container ">
        <div className="row">
          <div className="col-12   text-center mb-2 mt-3">
            <h3>Please Complete the Information below</h3>
          </div>
        </div>
        <div id="accordion">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseTALocate"
                  aria-expanded="true"
                  aria-controls="collapseTALocate"
                >
                  Location Of Job
                </button>
              </h5>
            </div>

            <div
              id="collapseTALocate"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div class="card-body">
                <LocationPage
                  handleChange={this.props.handleChange}
                  values={values}
                  address={address}
                  city={city}
                  state={state}
                  zipCode={zipCode}
                />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTAItems"
                  aria-expanded="false"
                  aria-controls="collapseTAItems"
                >
                  Will There Be AnyLarge Items Involved
                </button>
              </h5>
            </div>
            <div
              id="collapseTAItems"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div class="card-body">
                <AnyLargeItems
                  handleChange={this.props.handleChange}
                  values={values}
                  largeItems={largeItems}
                />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFour">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTAavalibility"
                  aria-expanded="false"
                  aria-controls="collapseTAavalibility"
                >
                  Choose Availibility
                </button>
              </h5>
            </div>
            <div
              id="collapseTAavalibility"
              class="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordion"
            >
              <div class="card-body">
                <Slot
                  handleChange={this.props.handleChange}
                  values={values}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  handleChangeDatePicker={this.props.handleChangeDatePicker}
                  handleChangeTimePicker={this.props.handleChangeTimePicker}
                />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFive">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTAStairs"
                  aria-expanded="false"
                  aria-controls="collapseTAStairs"
                >
                  How Many Flights Of Stairs
                </button>
              </h5>
            </div>
            <div
              id="collapseTAStairs"
              class="collapse"
              aria-labelledby="headingFive"
              data-parent="#accordion"
            >
              <div class="card-body">
                <FlightOfStairs
                  handleChange={this.props.handleChange}
                  values={values}
                />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingSix">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTALoads"
                  aria-expanded="false"
                  aria-controls="collapseTALoads"
                >
                  How Many truck Loads
                </button>
              </h5>
            </div>
            <div
              id="collapseTALoads"
              class="collapse"
              aria-labelledby="headingSix"
              data-parent="#accordion"
            >
              <div class="card-body">
                <TruckLoads
                  handleChange={this.props.handleChange}
                  values={values}
                />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingSeven">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTAJobs"
                  aria-expanded="false"
                  aria-controls="collapseTAJobs"
                >
                  What type of truck will best sute the Job
                </button>
              </h5>
            </div>
            <div
              id="collapseTAJobs"
              class="collapse"
              aria-labelledby="headingSeven"
              data-parent="#accordion"
            >
              <div class="card-body">
                <TruckLoads
                  handleChange={this.props.handleChange}
                  values={values}
                />
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingEight">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTAInfo"
                  aria-expanded="false"
                  aria-controls="collapseTAInfo"
                >
                  Additional Information you would like to add
                </button>
              </h5>
            </div>
            <div
              id="collapseTAInfo"
              class="collapse"
              aria-labelledby="headingEight"
              data-parent="#accordion"
            >
              <div class="card-body">
                <SpecialInstructions
                  handleChange={this.props.handleChange}
                  specialInstructions={specialInstructions}
                  values={values}
                />
              </div>
            </div>
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
    );
  }
}

export default AdditionalInfo;
