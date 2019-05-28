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
  render() {
    const {
      values,
      address,
      city,
      state,
      zipCode,
      largeItems,
      selectedDate,
      time,
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
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Location Of Job
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
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
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Will There Be AnyLarge Items Involved
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
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
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Choose Availibility
              </button>
            </h5>
          </div>
          <div
            id="collapseFour"
            class="collapse"
            aria-labelledby="headingFour"
            data-parent="#accordion"
          >
            <div class="card-body">
              <Slot
                handleChange={this.props.handleChange}
                values={values}
                selectedDate={selectedDate}
                time={time}
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
                data-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                How Many Flights Of Stairs
              </button>
            </h5>
          </div>
          <div
            id="collapseFive"
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
                data-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                How Many truck Loads
              </button>
            </h5>
          </div>
          <div
            id="collapseSix"
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
                data-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                What type of truck will best sute the Job
              </button>
            </h5>
          </div>
          <div
            id="collapseSeven"
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
                data-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                Additional Information you would like to add
              </button>
            </h5>
          </div>
          <div
            id="collapseEight"
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
