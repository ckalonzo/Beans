import React, { Component } from 'react';
import { Collapse, Button } from 'antd';
import MoneyValue from './MoneyValue';
const Panel = Collapse.Panel;

export default class Budget extends Component {
    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }
    render() {
        return (
            <div className="className container mt-5">
                <div className="row">
                    <div className="col-12">
                        <Collapse accordion>
                            <Panel header="How much you willing to spend to get the job done?" key="1">
                                <MoneyValue />
                            </Panel>
                        </Collapse>,
                                </div>
                    <Button onClick={this.continue}> Continue </Button>
                    <Button onClick={this.back}> Back</Button>
                </div>
            </div >









        )

    }
} 