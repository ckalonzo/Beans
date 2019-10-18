import NoImage from "../img/no-image.png";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis"; //cap maxLine of characters
export default class ProjectSummary extends Component {
  render() {
    const { jobs, handleBidNow, bidNow, handleChange } = this.props;
    return (
      <article className="itemlist mt-4">
        <div className="row row-sm">
          <aside className="col-12 col-sm-3">
            <div className="img-wrap">
              <img
                src={NoImage}
                alt="product with no image avaliable"
                className="img-md"
              />
            </div>
          </aside>
          <Link className="col-12 col-sm-6" to={"/jobs/" + jobs.id}>
            <div className="text-wrap">
              <h4 className="title"> {jobs.service} </h4>
              <p className="text-secondary">
                <small className="text-muted">
                  posted By: {jobs.firstName} {jobs.lastName}
                </small>
              </p>
              <p>
                <LinesEllipsis
                  text={jobs.specialInstructions}
                  maxLine="2"
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                />
              </p>
              <p className="rating-wrap my-0 text-muted">
                <span className="label-rating">
                  Number of bids: 11 {jobs.bidders}
                </span>
                {/* <span className="label-rating">154 orders </span> */}
              </p>
            </div>
          </Link>
          <aside className="col-sm-3">
            <div className="border-left pl-3">
              <div className="price-wrap">
                <span className="h3 price"> ${jobs.budget} </span>
              </div>
              <div className="row">
                <div className="col-12">
                  <input
                    type="text"
                    value={bidNow}
                    defaultValue={bidNow}
                    onChange={handleChange()}
                    // placeholder="Enter Lower Price"
                  />
                </div>
              </div>
              <p>
                <button
                  className="btn btn-success"
                  value={bidNow}
                  onClick={handleBidNow}
                >
                  {" "}
                  Bid now{" "}
                </button>
                <Link to={"/jobs/" + jobs.id} className="btn  btn-warning">
                  {" "}
                  Details{" "}
                </Link>{" "}
              </p>
            </div>
          </aside>
        </div>
      </article>
    );
  }
}
