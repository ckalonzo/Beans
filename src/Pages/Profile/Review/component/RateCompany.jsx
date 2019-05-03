import React, { Component } from 'react'
import Rating from 'react-rating'
export default class RateCompany extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className="col-12 mb-5">
                    <h6>Ratings</h6>
                    <Rating
                      initialRating={2.5}
                      
                    />
                    </div>
                </React.Fragment>
        )
    }
}
