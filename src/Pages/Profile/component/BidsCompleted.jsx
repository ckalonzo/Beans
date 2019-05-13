import React, { Component } from 'react'


export default class BidsCompleted extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">   
                <div className="col-6">
                <h6 className="font-weight-bold">Completed Bids: </h6>
                    </div>
                    <div className="col-6 adj-num">
                <h6>4</h6>
                </div>
                </div>
            </React.Fragment>

        )
    }
}
