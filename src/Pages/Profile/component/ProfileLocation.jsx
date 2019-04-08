import React, { Component } from 'react'

export default class ProfileLocation extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-1 p-0">
                        {/* <Icon type="environment" theme="filled" /> */}
                    </div>
                    <div className="col-10 pl-0">
                        <p>Atlanta, GA, United States</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
