import React, { Component } from "react";
import { Radio, Col, Input } from 'antd';
import "../../../Css/PostJob.css";

const RadioGroup = Radio.Group;
const InputGroup = Input.Group;


export default class FlightOfStairs extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const { handleChange } = this.props;
        return (

            <div className="className container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <InputGroup className="d-inline-flex  mx-auto" size="large">
                            <RadioGroup className="mx-auto" onChange={handleChange} >
                                <Radio value="0">0</Radio>
                                <Radio value="1">1</Radio>
                                <Radio value="2">2</Radio>
                                <Radio value="3">3</Radio>
                                <Radio value="4">4</Radio>
                                <Radio value="5">5</Radio>
                            </RadioGroup>
                        </InputGroup>
                    </div>
                </div>

            </div>
        )
    }
}

