import React, { Component } from "react";
import 'date-fns';
import { MDBDatePicker, MDBTimePicker, MDBCol } from 'mdbreact';

class AvaliableTimeDate extends Component {
    getPickerValue = (value) => {
        console.log(value);
    }

    render() {
        const { selectedDate, handleChangeDatePicker, handleChangeTimePicker, time } = this.props;
        return (
            <div>
                <div className="className container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h6>Choose Date</h6>
                            <MDBDatePicker
                                getValue={this.getPickerValue}
                                value={selectedDate}
                                onChange={handleChangeDatePicker.bind(selectedDate)}
                                minDate={new Date()}
                            />


                            <MDBCol md="3">
                                <MDBTimePicker
                                    id={time}
                                    label="12hrs format"
                                    getValue={this.getPickerValue}
                                    onChange={handleChangeTimePicker.bind(time)}
                                    value={time}
                                />
                            </MDBCol>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}

export default AvaliableTimeDate;