import React, { useState } from "react";
import MultiItemcarousel from "./Multi-Item-carousel";
import NoImage from "../../Global/Component/NoImage";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis"; //cap maxLine of characters
import { connect } from "react-redux";
//import DeleteProject from "./DeleteProject";
import { deleteProject } from "../../Redux/Store/actions/JobPostActions";
const ProjectSummary = ({ jobs, deleteProject, props }) => {
  const [isDeleting, setisDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <article className="itemlist mt-4">
      <div className="row row-sm -ta_pb-20">
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
            <h4 className="title"> {jobs.id} </h4>
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

            <p>
              <button className="" onClick={props.deleteProject}>
                Delete Job
              </button>
              <Link to={"/jobs/" + jobs.id} className="btn  btn-warning">
                {" "}
                Edit Job{" "}
              </Link>{" "}
            </p>
          </div>
        </aside>
      </div>
      <MultiItemcarousel />
    </article>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    deleteProject: () => dispatch(deleteProject())
  };
};

export default connect(null, mapDispatchToProps)(ProjectSummary);
