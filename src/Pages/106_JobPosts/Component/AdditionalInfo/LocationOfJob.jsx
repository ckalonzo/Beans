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
        const { values, address, city, state, zipCode } = this.props;
        return (
            <React.Fragment>
                <div className="className container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">

                            <h6>Address</h6>
                            <StreetAddress
                                handleChange={this.props.handleChange}
                                values={values}
                                address={address}

                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 text-center mb-5">
                            <h6>City</h6>
                            <City
                                handleChange={this.props.handleChange}
                                values={values}
                                city={city}
                            />
                        </div>
                        <div className="col-4 text-center mb-5">
                            <h6>State</h6>
                            <Statee
                                handleChange={this.props.handleChange}
                                values={values}
                                state={state}
                            />
                        </div>
                        <div className="col-4 text-center mb-5">
                            <h6>ZipCode</h6>
                            <ZipCode
                                handleChange={this.props.handleChange}
                                values={values}
                                zipCode={zipCode}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

