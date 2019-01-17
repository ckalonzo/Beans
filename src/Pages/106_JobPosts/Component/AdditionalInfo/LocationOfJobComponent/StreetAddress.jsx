import React, { Component } from "react";
import { Input, Tooltip, Col, Select, InputNumber, DatePicker, AutoComplete, Cascader, } from 'antd';
import "../../../Css/PostJob.css";

const InputGroup = Input.Group;
const Option = Select.Option;

 const options = {};


export default class StreetAddress extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        dataSource: [],
    }

   


    render() {

        return (
            <div>
                <div className="mx-auto">
                <h6>Street Address</h6>
                </div>
                <InputGroup className="d-inline-flex" size="large">
                <Col span={10} className="d-inline-flex mx-auto" >
          <Select style={{ width: '30%' }}defaultValue="Home">
            <Option value="Home">Home</Option>
            <Option value="Company">Company</Option>
            <Option value="Apartment">Apartment</Option>
          </Select>
          <Input  style={{ width: '100%' }} defaultValue="Street Address" />
          </Col>
        </InputGroup>
            </div>
        )
    }
}

