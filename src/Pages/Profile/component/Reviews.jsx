import React, { Component } from "react";
import Divider from "../../Global/Layout/divider";

class Reviews extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className="col-12 p-0">
          <header className="card-header">
            <h4 className="font-weight-normal">Reviews</h4>
          </header>
        </div>
        <div className="container">
          <ul class="list-unstyled">
            <li class="media">
              <img src="..." class="mr-3" alt="..." />
              <div class="media-body">
                <h5 class="mt-0 mb-1">Great Company!!!!!</h5>
                Brandon came to clean my Garage very professional and ontime.
              </div>
            </li>
            <Divider className={"col-12 pt-4"} />
            <li class="media my-4">
              <img src="..." class="mr-3" alt="..." />
              <div class="media-body">
                <h5 class="mt-0 mb-1">Remove all Junk and clean Garage</h5>
                Brandon came to clean my Garage swept pressure washed my drive
                way very professional and ontime.
              </div>
            </li>
            <Divider className={"col-12 pt-4"} />
            <li class="media">
              <img src="..." class="mr-3" alt="..." />
              <div class="media-body">
                <h5 class="mt-0 mb-1">COULDVE DONE BETTER</h5>
                Clean my garage and left trash on drivway
              </div>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default Reviews;
