import React from "react";
import MultiItemcarousel from "./Multi-Item-carousel";
import NoImage from "../../108_Browse/img/no-image.png";
const ProjectSummary = ({ jobs, deleteProject }) => {
  return (
    <article className="itemlist mt-4">
      <div className="row row-sm">
        <aside className="col-sm-3">
          <div className="img-wrap">
            <img
              src={NoImage}
              alt="product with no image avaliable"
              className="img-md"
            />
          </div>
        </aside>
        <div className="col-sm-6">
          <div className="text-wrap">
            <h4 className="title"> {jobs.service} </h4>
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
            <p className="rating-wrap my-0 text-muted">
              <span className="label-rating">
                Number of bids: 11 {jobs.bidders}
              </span>
              {/* <span className="label-rating">154 orders </span> */}
            </p>
          </div>
        </div>
        <aside className="col-sm-3">
          <div className="border-left pl-3">
            <div className="price-wrap">
              <span className="h3 price"> ${jobs.budget} </span>
            </div>
            <p>
              <button
                onClick={() => {
                  deleteProject(jobs.id);
                }}
              >
                Delete
              </button>
              <a href="#" className="btn btn-light">
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
