import React, { Component } from "react";
import { Radio, DatePicker, Input } from 'antd';
import "../../../Css/PostJob.css";

const RadioGroup = Radio.Group;
const InputGroup = Input.Group;

function onChangeDatePicker(date, dateString) {
    console.log(date, dateString);
}

export default class CustDatePicker extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const { handleChangeDatePicker, date, values } = this.props;
        return (
            <React.Fragment>
                <InputGroup size="large">
                    <DatePicker onChange={handleChangeDatePicker('date')} defaultvalue={values.date} id={date} size="large" />
                </InputGroup>
            </React.Fragment>
        )
    }
}

