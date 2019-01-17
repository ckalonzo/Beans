import React, { Component } from "react";
import { Input,Col} from 'antd';
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
            <div>
                <InputGroup className="d-inline-flex" size="large">
                <Col span={12} className="d-inline-flex mx-auto" >
                <Input style={{ width: '70%' }}/>
          
          <Input  style={{ width: '20%' }} />
          </Col>
          <Col span={12} className="d-inline-flex mx-auto" >
          <Input style={{ width: '20%' }}/>
          <Input  style={{ width: '20%' }} />
          </Col>
          <Col span={12} className="d-inline-flex mx-auto" >
          <Input  style={{ width: '20%' }} />
          </Col>
        </InputGroup>
            </div>
        )
    }
}

