import React, { Component } from 'react'
import "../Css/PostJob.css";
import { Cascader } from 'antd';



function onChange(value) {
    console.log(value);
}

export default class TypeOfJob extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6  offset-3 text-center mb-5">
                        <h1>Select Job Type</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="mx-auto">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Please Select From The List Below
  </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
