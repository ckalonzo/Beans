import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import NoImage from "../img/no-image.png";
import CountdownTimer from "../Component/countdownTimer"
const ProjectDetails = props => {
  const { project, auth, handleBidNow, bidNow } = props;
  if (!auth.uid) return <Redirect to="/CustomerLogin/CustomerLogin" />;
  if (project) {
    return (
    
      <React.Fragment>
        {/* <CountdownTimer timeTillDate={(project.selectedDate),(project.selectedTime}) timeFormat="MM DD YYYY, h:mm a" /> */}
        <div className="card"> 
          <div className="row no-gutters">
            <aside className="col-sm-5 border-right">
              <article className="gallery-wrap">
                {/* {projectImage} */}
                <div className="img-small-wrap">
                  <div className="item-gallery">
                    {" "}
                    <img
                src={NoImage}
                alt="product with no image avaliable"
                className="img-md"
              />
                  </div>
                  <div className="item-gallery">
                    {" "}
                    <img
                src={NoImage}
                alt="product with no image avaliable"
                className="img-md"
              />
                  </div>
                  <div className="item-gallery">
                    {" "}
                    <img
                src={NoImage}
                alt="product with no image avaliable"
                className="img-md"
              />
                  </div>
                  <div className="item-gallery">
                    {" "}
                    <img
                      src={NoImage}
                      alt="product with no image avaliable"
                      className="img-md"
                    />
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
                  <dt className="col-sm-3 -ta_pb-10">Zipcode</dt>
                  <dd className="col-sm-9 -ta_pb-10">{project.zipCode}</dd>

                  <dt className="col-sm-3 -ta_pb-10">AnyLarge Items Involved?</dt>
                  <dd className="col-sm-9 -ta_pb-10">{project.largeItems}</dd>

                  <dt className="col-sm-3 -ta_pb-10">Date</dt>
                  <dd className="col-sm-9 -ta_pb-10">{project.date} </dd>

                  <dt className="col-sm-3 -ta_pb-10">Flights Of Stairs</dt>
                  <dd className="col-sm-9 -ta_pb-10">{project.flightOfStairs}</dd>

                  <dt className="col-sm-3 -ta_pb-10">Truck Loads</dt>
                  <dd className="col-sm-9 -ta_pb-10">{project.truckLoads} </dd>

                  <dt className="col-sm-3 -ta_pb-10">
                    type of truck will best sute the Job
                  </dt>
                  <dd className="col-sm-9 -ta_pb-10">{project.typeOfTruck} </dd>

                  <dt className="col-sm-3 -ta_pb-10">Time</dt>
                  <dd className="col-sm-9 -ta_pb-10">{project.selectedTime}</dd>
                </dl>
                <div className="rating-wrap -ta_pb-30">
                  <div className="label-rating">132 reviews</div>
                  <div className="label-rating">154 orders </div>
                </div>
                <div>
                  <button
                    className="btn btn-warning"
                    value={bidNow}
                    onClick={handleBidNow}
                  >
                    {" "}
                    Bid now{" "}
                  </button>
                 
                </div>
              </article>
            </aside>
          </div>
        </div>

        {/* <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="text-secondary">Location: Decatur Ga 30334</p>
              <p className="text-secondary">Type: Junk Removal</p>
              <div>
                <p>
                  Where is the Junk Located?<span>Attic</span>
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  What kind of truck you will need
                  <span />
                </p>
              </div>
              <div />

              <p className="text-secondary">Type: {project.service}</p>
              <p className="text-secondary">Bids: 25</p>
              <p className="text-secondary">Budget: ${project.budget}</p>
              <p className="text-secondary">tIMER</p>
              <p className="text-secondary">
                Additional Information: {project.specialInstructions}
              </p>
              <p className="text-secondary">
                <small className="text-muted">
                  posted By {project.customerFirstName}{" "}
                  {project.customerLastName}
                </small>
              </p>
              <a href="#" className="btn btn-secondary float-left">
                More Details
              </a>
              <a href="#" className="btn btn-success float-right">
                Bid Now
              </a>
            </div>
            <img className="card-img-bottom" src="..." alt="Card image cap" />
          </div>
        </div> */}
      </React.Fragment>
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
