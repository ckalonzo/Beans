import React, { Component } from 'react';
import { Collapse, Button, Icon} from 'antd';
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
    state = {
        size: 'large',
    };
    render() {
        const size = this.state.size;
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
                                <div className="row">
                        <div className="mx-auto">
                            <Button.Group size={size}>
                                <Button type="primary" onClick={this.back} className="float-left">
                                    <Icon type="left" />Back
                                </Button>
                                <Button type="primary" onClick={this.continue}>
                                    Continue <Icon type="right" />
                                </Button>
                            </Button.Group>
                        </div>
                    </div>
                </div>
            </div >









        )

    }
} 