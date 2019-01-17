import React, { Component } from "react";
import { Input, Input, Tooltip, Col, Select, InputNumber, DatePicker, AutoComplete, Cascader, } from 'antd';
import "../Css/PostJob.css";

const InputGroup = Input.Group;
const Option = Select.Option;

const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];


export default class StreetAddress extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        dataSource: [],
    }

    handleChange = (value) => {
        this.setState({
            dataSource: !value || value.indexOf('@') >= 0 ? [] : [
                `${value}@gmail.com`,
                `${value}@163.com`,
                `${value}@qq.com`,
            ],
        });
    }


    render() {

        return (
            <div>

                <InputGroup size="large">
                    <Col span={5}>
                        <Select style={{ width: '30%' }} defaultValue="Home">
                            <Option value="Home">Home</Option>
                            <Option value="Company">Company</Option>
                        </Select>
                        <Cascader style={{ width: '70%' }} options={options} placeholder="Select Address" />
                    </Col>
                </InputGroup>

            </div>
        )
    }
}

