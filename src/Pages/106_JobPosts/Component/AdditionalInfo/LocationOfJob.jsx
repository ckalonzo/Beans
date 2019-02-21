import React, { Component } from "react";
import "../../Css/PostJob.css";
import StreetAddress from "./LocationOfJobComponent/StreetAddress";
import ZipCode from "./LocationOfJobComponent/ZipCode";
import City from "./LocationOfJobComponent/City";
import Statee from "./LocationOfJobComponent/State";


export default class LocationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { address, city, statee, zipCode, largeItems, date, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions } = this.props;
        const values = { address, city, statee, zipCode, largeItems, date, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions };
        return (
            <React.Fragment>
                <div className="className container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">

                            <h6>Address</h6>
                            <StreetAddress
                                handleChange={this.handleChange}
                                values={values}
                                address={address}

                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 text-center mb-5">
                            <h6>City</h6>
                            <City
                                handleChange={this.handleChange}
                                values={values}
                                city={city}
                            />
                        </div>
                        <div className="col-4 text-center mb-5">
                            <h6>State</h6>
                            <Statee
                                handleChange={this.handleChange}
                                values={values}
                                statee={statee}
                            />
                        </div>
                        <div className="col-4 text-center mb-5">
                            <h6>ZipCode</h6>
                            <ZipCode
                                handleChange={this.handleChange}
                                values={values}
                                zipCode={ZipCode}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

