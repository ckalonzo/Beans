import React from "react";
import MultiItemcarousel from "./Multi-Item-carousel";
import NoImage from "../../108_Browse/img/no-image.png";
const ProjectSummary = ({ jobs, deleteProject }) => {
  return (
    <article class="itemlist mt-4">
      <div class="row row-sm">
        <aside class="col-sm-3">
          <div class="img-wrap">
            <img src={NoImage} class="img-md" />
          </div>
        </aside>
        <div class="col-sm-6">
          <div class="text-wrap">
            <h4 class="title"> {jobs.service} </h4>
            <p className="text-secondary">
              <small className="text-muted">
                posted By: {jobs.customerFirstName} {jobs.customerLastName}
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
              <button
                onClick={() => {
                  deleteProject(jobs.id);
                }}
              >
                Delete
              </button>
              <a href="#" class="btn btn-light">
                {" "}
                Details{" "}
              </a>{" "}
            </p>
          </div>
        </aside>
      </div>
      <MultiItemcarousel />
    </article>
  );
};

export default ProjectSummary;
