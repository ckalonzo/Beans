import React, { Component } from 'react'


export default class NumberofJobs extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-3 no-gutters d-inline">
                        <h6># of Jobs: </h6>
                    </div>
                <div className="col-1 no-gutters pl-0 d-inline">
                <h6>400</h6>
                </div>
                </div>
            </React.Fragment>

        )
    }
}
