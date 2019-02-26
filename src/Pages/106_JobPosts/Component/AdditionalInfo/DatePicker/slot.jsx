import React, { Component } from "react";
import CustDatePicker from "../DatePicker/DatePicker";
import AvaliableTime from "../DatePicker/AvaliableTime";



class AvaliableTimeDate extends Component {

    render() {
        const { date, time, values } = this.props;
        return (
            <div>
                <div className="className container">
                    <div className="row">
                        <div className="col-6 text-center mb-5">
                            <h6>Choose Date</h6>
                            <CustDatePicker
                                handleChangeDatePicker={this.props.handleChangeDatePicker}
                                date={date}
                                values={values}
                            />
                        </div>
                        <div className="col-6 text-center mb-5">
                            <h6>Choose Time Slot</h6>
                            <AvaliableTime
                                handleChangeTimePicker={this.props.handleChangeTimePicker}
                                time={time}
                                values={values}

                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AvaliableTimeDate;