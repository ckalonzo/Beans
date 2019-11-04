import React, { Fragment } from "react";
import Divider from "../../Global/Layout/divider";

const Reviews = props => {
  return (
    <Fragment>
      <div className="col-12 p-0">
        <header className="card-header">
          <h4 className="font-weight-normal">Reviews</h4>
        </header>
      </div>
      <div className="container">
        <ul className="list-unstyled">
          {props.contractorProfile.reviews.map(review => {
            return (
              <Fragment>
                <li className="media" key={review}>
                  <img src="..." className="mr-3" alt="..." />
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">{review.title}</h5>
                    {review.text}
                  </div>
                </li>

                <Divider className="col-12 pt-4" />
              </Fragment>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Reviews;
