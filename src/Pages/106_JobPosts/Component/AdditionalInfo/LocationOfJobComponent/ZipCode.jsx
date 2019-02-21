import React, { Component } from "react";
import { Input } from 'antd';
import "../../../Css/PostJob.css";

const InputGroup = Input.Group;


export default class ZipCode extends Component {

    render() {
        const { handleChange, zipCode } = this.props;
        return (
            <React.Fragment>
                <InputGroup className="mx-auto" size="large">
                    <Input style={{ width: '50%' }} onChange={handleChange('zipCode')} id={zipCode} placeholder="ZipCode" />
                </InputGroup>
            </React.Fragment>
        )
    }
}

