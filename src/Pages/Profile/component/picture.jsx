import React, { Component } from 'react'
import { Avatar, Button } from 'antd';

export default class Picture extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <Avatar size={64} icon="user" />
                    </div>
                    <div className="row">
                        <Button size="small" style={{ marginLeft: 16, verticalAlign: 'middle' }} onClick={this.changeUser}>
                            Change
        </Button>
                    </div>
                </div>
            </div>
        )
    }
}
