import React, { Component } from "react";
import { Input, Button, size, Icon } from 'antd';

class Third extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        size: 'large',
    };
    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }
    render() {
        const size = this.state.size;
        return (
            <React.Fragment>
                <Input />

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
            </React.Fragment>
        );
    }
}

export default Third;