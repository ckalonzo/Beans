import React, { Component } from "react";
import { Input, Col } from 'antd';
import "../../../Css/PostJob.css";

const InputGroup = Input.Group;


export default class City extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handleChange } = this.props;
        return (
            <div>

                <InputGroup className="mx-auto" size="large">
                    <Input className="city-container" onChange={handleChange} style={{ width: '100%' }} id="yourCity" placeholder="City" />

                </InputGroup>

            </div>
        )
    }
}

