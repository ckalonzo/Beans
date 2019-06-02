import React from "react";

const ProjectSummary = ({ jobs }) => {
  return (
    <article class="itemlist mt-4">
      <div class="row row-sm">
        {/* <aside class="col-sm-3">
          <div class="img-wrap">
            <img src="images/items/1.jpg" class="img-md" />
          </div>
        </aside> */}
        <div class="col-sm-6">
          <div class="text-wrap">
            <h4 class="title"> {jobs.service} </h4>
            <p className="text-secondary">
              <small className="text-muted">
                posted By: {jobs.firstName} {jobs.lastName}
              </small>
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim
              ad minim veniam{" "}
            </p>
            <p class="rating-wrap my-0 text-muted">
              <span class="label-rating">
                Number of bids: 11 {jobs.bidders}
              </span>
              {/* <span class="label-rating">154 orders </span> */}
            </p>
          </div>
        </div>
        <aside class="col-sm-3">
          <div class="border-left pl-3">
            <div class="price-wrap">
              <span class="h3 price"> ${jobs.budget} </span>
            </div>
            <p>
              <a href="#" class="btn btn-warning">
                {" "}
                Bid now{" "}
              </a>
              <a href="#" class="btn btn-light">
                {" "}
                Details{" "}
              </a>{" "}
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
};

export default ProjectSummary;
