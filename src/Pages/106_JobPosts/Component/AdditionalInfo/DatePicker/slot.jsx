import React, { Component } from "react";
import { Select } from 'antd';
import CustDatePicker from "../DatePicker/DatePicker";
import AvaliableTime from "../DatePicker/AvaliableTime";



class AvaliableTimeDate extends Component {

    render() {

        return (
            <div>
                <div className="className container">
                    <div className="row">
                        <div className="col-6 text-center mb-5">
                            <h6>Choose Date</h6>
                            <CustDatePicker />
                        </div>
                        <div className="col-6 text-center mb-5">
                            <h6>Choose Time Slot</h6>
                            <AvaliableTime />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AvaliableTimeDate;