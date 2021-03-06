import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const ProjectDetails = props => {
  //getting project id
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/Login/CustomerLogin/CustomerLogin" />;
  if (project) {
    return (
      <div className="card">
        <div className="row no-gutters">
          <aside className="col-sm-5 border-right">
            <article className="gallery-wrap">
              <div className="img-big-wrap">
                <div>
                  {" "}
                  <a href="https://imgur.com/EmHdidw" data-fancybox="">
                    <img src="https://imgur.com/EmHdidw" />
                  </a>
                </div>
              </div>
              <div className="img-small-wrap">
                <div className="item-gallery">
                  {" "}
                  <img src="https://imgur.com/EmHdidw" />
                </div>
                <div className="item-gallery">
                  {" "}
                  <img src="https://imgur.com/EmHdidw" />
                </div>
                <div className="item-gallery">
                  {" "}
                  <img src="https://imgur.com/EmHdidw" />
                </div>
                <div className="item-gallery">
                  {" "}
                  <img src="https://imgur.com/EmHdidw" />
                </div>
              </div>
            </article>
          </aside>
          <aside className="col-sm-7">
            <article className="p-5">
              <h3 className="title mb-3">{project.service}</h3>
              <div className="mb-3">
                <var className="price h3 text-warning">
                  <span className="currency">US $</span>
                  <span className="num">{project.budget}</span>
                </var>
              </div>
              <dl>
                <dt>Description</dt>
                <dd>
                  <p>{project.specialInstructions} </p>
                </dd>
              </dl>
              <dl className="row">
                <dt className="col-sm-3">Zipcode</dt>
                <dd className="col-sm-9">{project.zipCode}</dd>

                <dt className="col-sm-3">AnyLarge Items Involved?</dt>
                <dd className="col-sm-9">{project.largeItems}</dd>

                <dt className="col-sm-3">Date</dt>
                <dd className="col-sm-9">{project.date} </dd>

                <dt className="col-sm-3">Flights Of Stairs</dt>
                <dd className="col-sm-9">{project.flightOfStairs}</dd>

                <dt className="col-sm-3">Truck Loads</dt>
                <dd className="col-sm-9">{project.truckLoads} </dd>

                <dt className="col-sm-3">
                  type of truck will best sute the Job
                </dt>
                <dd className="col-sm-9">{project.typeOfTruck} </dd>

                <dt className="col-sm-3">Time</dt>
                <dd className="col-sm-9">{project.time}</dd>
              </dl>
              <div className="rating-wrap">
                <div className="label-rating">132 reviews</div>
                <div className="label-rating">154 orders </div>
              </div>
            </article>
          </aside>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, componentProps) => {
  //console.log(state)
  const id = componentProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
