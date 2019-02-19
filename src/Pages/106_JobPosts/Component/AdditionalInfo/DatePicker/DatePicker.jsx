import React, { Component } from "react";
import { Radio, Col, DatePicker, Input } from 'antd';
import "../../../Css/PostJob.css";

const RadioGroup = Radio.Group;
const InputGroup = Input.Group;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export default class CustDatePicker extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const { handleChange } = this.props;
        return (
            <div>
                const {handleChange} = this.props;
                <InputGroup onChange={handleChange} size="large">
                    <DatePicker size="large" />
                </InputGroup>
            </div>
        )
    }
}

