import React, { Component } from 'react'

class WriteReview extends Component {
  render() {

    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            Review
            </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          />
        </div>

      </React.Fragment>

    )
  }
}

export default WriteReview