import React, { Component } from "react";
import { Input, Col } from 'antd';
import "../../../Css/PostJob.css";

const InputGroup = Input.Group;


export default class ZipCode extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        dataSource: [],
    }




    render() {

        return (
            <div >
                <InputGroup className="mx-auto" size="large">
                    <Input style={{ width: '50%' }} placeholder="ZipCode" />
                </InputGroup>

            </div>
        )
    }
}

