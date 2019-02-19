import React, { Component } from "react";
import { Input, Col } from 'antd';
import "../../../Css/PostJob.css";

const InputGroup = Input.Group;


export default class ZipCode extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { handleChange } = this.props;
        return (
            <div >
                <InputGroup className="mx-auto" size="large">
                    <Input style={{ width: '50%' }} onChange={handleChange} id="yourZipCode" placeholder="ZipCode" />
                </InputGroup>

            </div>
        )
    }
}

