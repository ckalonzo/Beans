import React, { Component } from "react";
import "../Css/confirm.scss";
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
      <React.Fragment>
        <section className="postJob-Listsummary">
          <div className="container ">
            <div className="row">
              <div className="col-md-8 mx-auto mt-3 mb-3 ovr-background">
                <div className=" pJob-summary row">
                  <div className="col-12  offset-0  text-center mb-5 mt-5">
                    <h1>Summary</h1>
                    <h6>Comfirm the information below is correct.</h6>
                  </div>
                </div>

                <dl>
                  <dt>
                    <span className="col-sm-6">Type of Job</span>
                  </dt>
                  <dd>
                    <span className="col-sm-12">{service}</span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span className="col-sm-12">Upload Images</span>
                  </dt>
                  <dd>
                    <span className="col-sm-12">{attachments}</span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span className="col-sm-6">Address</span>
                  </dt>
                  <dd>
                    <span className="col-sm-12">{address}</span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span className="col-sm-12">City</span>
                  </dt>
                  <dd>
                    <span className="col-sm-12">{city}</span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span className="col-sm-6">State</span>
                  </dt>
                  <dd>
                    <span className="col-sm-12">{state}</span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span className="col-sm-12">Zipcode</span>
                  </dt>
                  <dd>
                    <span className="col-sm-12">{zipCode}</span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span className="col-sm-6">
                      Will There Be AnyLarge Items Involved?
                    </span>
                  </dt>
                  <dd>
                    <span className="col-sm-12">{largeItems}</span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span className="col-sm-12">Date</span>
                  </dt>
                  <dd>
                    <span className="col-sm-12">{date}</span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span className="col-sm-6">Time</span>
                  </dt>
                  <dd>
                    <span className="col-sm-12">{time}</span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span className="col-sm-12">
                      How Many Flights Of Stairs?
                    </span>
                  </dt>
                  <dd>
                    <span className="col-sm-12">{flightOfStairs}</span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span className="col-sm-6">How Many truck Loads?</span>
                  </dt>
                  <dd>
                    <span className="col-sm-12">{truckLoads}</span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span className="col-sm-12">
                      What type of truck will best sute the Job?
                    </span>
                  </dt>
                  <dd>
                    <span className="col-sm-12">{typeOfTruck}</span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span className="col-sm-6">
                      Additional Information you would like to add?
                    </span>
                  </dt>
                  <dd>
                    <span className="col-sm-12">{specialInstructions}</span>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span className="col-sm-12">Budget</span>
                  </dt>
                  <dd>
                    <span className="col-sm-12">{budget}</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </section>
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
    );
  }
}

export default Confirm;
