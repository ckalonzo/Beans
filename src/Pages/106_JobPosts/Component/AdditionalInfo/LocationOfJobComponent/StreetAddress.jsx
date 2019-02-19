import React, { Component } from "react";
import { Input, Col } from 'antd';
import "../../../Css/PostJob.css";

const InputGroup = Input.Group;



export default class StreetAddress extends Component {
    constructor(props) {
        super(props);
    }




    render() {
        const { handleChange } = this.props;
        return (
            <div>

                <InputGroup className="d-inline-flex" size="large">
                    <Col span={10} className="d-inline-flex mx-auto" >
                        <Input style={{ width: '100%' }} id="address" onChange={handleChange} placeholder="Street Address" />
                    </Col>
                </InputGroup>
            </div>
        )
    }
}

