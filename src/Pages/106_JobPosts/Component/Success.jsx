import React, { Component } from 'react'

import { Button, Icon, List } from 'antd';
export default class Success extends Component {
    state = {
        size: 'large',
    };

    render() {
        const size = this.state.size;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="mx-auto">
                            <h1> Thank You For Your Submission</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mx-auto">
                            <Button.Group size={size}>
                                <Button type="primary" href="/">
                                    Dashboard
                                </Button>
                            </Button.Group>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
