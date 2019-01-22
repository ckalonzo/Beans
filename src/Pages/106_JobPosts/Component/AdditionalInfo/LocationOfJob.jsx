import React, { Component } from "react";
import "../../Css/PostJob.css";
import { Col } from 'antd';
import StreetAddress from "./LocationOfJobComponent/StreetAddress";
import ZipCode from "./LocationOfJobComponent/ZipCode";
import City from "./LocationOfJobComponent/City";
import Statee from "./LocationOfJobComponent/State";
export default class LocationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value } = this.props;

        return (
            <div>
                <div className="className container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">

                            <h6>Address</h6>
                            <StreetAddress />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 text-center mb-5">
                            <h6>City</h6>
                            <City />
                        </div>
                        <div className="col-4 text-center mb-5">
                            <h6>State</h6>
                            <Statee />
                        </div>
                        <div className="col-4 text-center mb-5">
                            <h6>ZipCode</h6>
                            <ZipCode />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

