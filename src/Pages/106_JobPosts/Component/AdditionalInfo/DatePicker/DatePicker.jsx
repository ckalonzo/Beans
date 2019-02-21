import React, { Component } from "react";
import { Radio, DatePicker, Input } from 'antd';
import "../../../Css/PostJob.css";

const RadioGroup = Radio.Group;
const InputGroup = Input.Group;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export default class CustDatePicker extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const { handleChange, date } = this.props;
        return (
            <React.Fragment>
                <InputGroup onChange={handleChange('date')} id={date} size="large">
                    <DatePicker size="large" />
                </InputGroup>
            </React.Fragment>
        )
    }
}

