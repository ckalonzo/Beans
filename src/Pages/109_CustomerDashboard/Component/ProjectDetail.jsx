import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const ProjectDetails = props => {
  //getting project id
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/101_CustomerLogin/CustomerLogin" />;
  if (project) {
    return (
      <React.Fragment>
        <div class="card">
          <div class="row no-gutters">
            <aside class="col-sm-5 border-right">
              <article class="gallery-wrap">
                <div class="img-big-wrap">
                  <div>
                    {" "}
                    <a href="https://imgur.com/EmHdidw" data-fancybox="">
                      <img src="https://imgur.com/EmHdidw" />
                    </a>
                  </div>
                </div>
                <div class="img-small-wrap">
                  <div class="item-gallery">
                    {" "}
                    <img src="https://imgur.com/EmHdidw" />
                  </div>
                  <div class="item-gallery">
                    {" "}
                    <img src="https://imgur.com/EmHdidw" />
                  </div>
                  <div class="item-gallery">
                    {" "}
                    <img src="https://imgur.com/EmHdidw" />
                  </div>
                  <div class="item-gallery">
                    {" "}
                    <img src="https://imgur.com/EmHdidw" />
                  </div>
                </div>
              </article>
            </aside>
            <aside class="col-sm-7">
              <article class="p-5">
                <h3 class="title mb-3">{project.service}</h3>
                <div class="mb-3">
                  <var class="price h3 text-warning">
                    <span class="currency">US $</span>
                    <span class="num">{project.budget}</span>
                  </var>
                </div>
                <dl>
                  <dt>Description</dt>
                  <dd>
                    <p>{project.specialInstructions} </p>
                  </dd>
                </dl>
                <dl class="row">
                  <dt class="col-sm-3">Zipcode</dt>
                  <dd class="col-sm-9">{project.zipCode}</dd>

                  <dt class="col-sm-3">AnyLarge Items Involved?</dt>
                  <dd class="col-sm-9">{project.largeItems}</dd>

                  <dt class="col-sm-3">Date</dt>
                  <dd class="col-sm-9">{project.date} </dd>

                  <dt class="col-sm-3">Flights Of Stairs</dt>
                  <dd class="col-sm-9">{project.flightOfStairs}</dd>

                  <dt class="col-sm-3">Truck Loads</dt>
                  <dd class="col-sm-9">{project.truckLoads} </dd>

                  <dt class="col-sm-3">type of truck will best sute the Job</dt>
                  <dd class="col-sm-9">{project.typeOfTruck} </dd>

                  <dt class="col-sm-3">Time</dt>
                  <dd class="col-sm-9">{project.time}</dd>
                </dl>
                <div class="rating-wrap">
                  <div class="label-rating">132 reviews</div>
                  <div class="label-rating">154 orders </div>
                </div>
                {/*<hr>
                  <a href="#" class="btn  btn-primary">
                    {" "}
                    Buy now{" "}
                  </a>
                  <a href="#" class="btn  btn-outline-primary">
                    {" "}
                    <i class="" /> Add to cart{" "}
                  </a>
                </hr>*/}
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
              <a href="#" class="btn btn-secondary float-left">
                More Details
              </a>
              <a href="#" class="btn btn-success float-right">
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
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
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
