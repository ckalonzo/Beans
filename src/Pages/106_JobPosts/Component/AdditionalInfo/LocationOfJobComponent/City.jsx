import React, { Component } from "react";
import { Input, Col } from 'antd';
import "../../../Css/PostJob.css";

const InputGroup = Input.Group;


export default class City extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        dataSource: [],
    }




    render() {

        return (
            <div>

                <InputGroup className="mx-auto" size="large">
                    <Input className="zipcode-container" style={{ width: '100%' }} placeholder="City" />

                </InputGroup>

            </div>
        )
    }
}

