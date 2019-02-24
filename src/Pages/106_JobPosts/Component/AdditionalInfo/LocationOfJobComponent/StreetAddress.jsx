import React, { Component } from "react";
import { Input, Col } from 'antd';
import "../../../Css/PostJob.css";

const InputGroup = Input.Group;



export default class StreetAddress extends Component {
    constructor(props) {
        super(props);
    }




    render() {
        const { handleChange, address } = this.props;
        console.log(handleChange)
        return (
            <React.Fragment>
                <InputGroup className="d-inline-flex" size="large">
                    <Col span={10} className="d-inline-flex mx-auto" >
                        <Input style={{ width: '100%' }} id={address} onChange={handleChange('address')} placeholder="Street Address" />
                    </Col>
                </InputGroup>
            </React.Fragment>
        )
    }
}

