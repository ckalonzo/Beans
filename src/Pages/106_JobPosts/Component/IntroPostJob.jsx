import React, { Component } from 'react'
import { Button } from 'antd';
export default class IntroPostJob extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6  offset-3 text-center mb-5">
                            <h1>Hi There! Im Mathrew.I'll get you started on posting your job. Lets get started!</h1>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
