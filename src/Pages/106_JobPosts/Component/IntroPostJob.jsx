import React, { Component } from 'react'
import { Button } from 'antd';
export default class IntroPostJob extends Component {

    constructor(props) {
        super(props);
    }
    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {


        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6  offset-3 text-center mb-5 mt-5">
                            <h1>Hi There! Im Mathrew.I'll get you started on posting your job. Lets get started!</h1>
                        </div>
                    </div>
                    <Button onClick={this.continue}> Continue </Button>

                </div>

            </div>
        );
    }
}
