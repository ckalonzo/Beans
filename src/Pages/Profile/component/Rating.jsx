import React, { Component } from 'react'
import Rating from 'react-rating'
export default class AvgRating extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className="col-12">
                    <h6>Ratings</h6>
                    <Rating
                      initialRating={2.5}
                      readonly
                    />
                    </div>
                </React.Fragment>
        )
    }
}
