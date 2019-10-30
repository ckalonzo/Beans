import React, { Fragment } from "react";
import Divider from "../../Global/Layout/divider";

const Reviews = props => {
  const { classes } = props;
  return (
    <Fragment>
      <div className="col-12 p-0">
        <header className="card-header">
          <h4 className="font-weight-normal">Reviews</h4>
        </header>
      </div>
      <div className="container">
        <ul className="list-unstyled">
          <li className="media">
            <img src="..." className="mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0 mb-1">Great Company!!!!!</h5>
              Brandon came to clean my Garage very professional and ontime.
            </div>
          </li>
          <Divider className={"col-12 pt-4"} />
          <li className="media my-4">
            <img src="..." className="mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0 mb-1">Remove all Junk and clean Garage</h5>
              Brandon came to clean my Garage swept pressure washed my drive way
              very professional and ontime.
            </div>
          </li>
          <Divider className={"col-12 pt-4"} />
          <li className="media">
            <img src="..." className="mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0 mb-1">COULDVE DONE BETTER</h5>
              Clean my garage and left trash on drivway
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Reviews;
