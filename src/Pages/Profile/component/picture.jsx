import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

export default class Picture extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <Avatar size={94} icon="user" />
                </div>
                <div className="row">
                    <Button size="small" style={{ marginLeft: 16, verticalAlign: 'middle' }} onClick={this.changeUser}>
                        Change
        </Button>
                </div>

            </React.Fragment>
        )
    }
}
