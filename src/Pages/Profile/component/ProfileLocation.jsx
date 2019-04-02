import React, { Component } from 'react'
import { Icon } from 'antd';
export default class ProfileLocation extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-1 p-0">
                            <Icon type="environment" theme="filled" />
                        </div>
                        <div className="col-10 pl-0">
                            <p>Atlanta, GA, United States</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
