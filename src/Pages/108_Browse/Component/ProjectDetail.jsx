import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Spin, Alert } from 'antd';

const ProjectDetails = (props) => {
  //getting project id
  const { project } = props;
  if (project) {
    return (
      <React.Fragment>
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="text-secondary">Location: Decatur Ga 30334</p>
              <p className="text-secondary">Type: Junk Removal</p>
              <div>
                <p>Where is the Junk Located?<span>Attic</span></p>
              </div>
              <div>
                <p> What kind of truck you will need<span></span></p>
              </div>
              <div>

              </div>

              <p className="text-secondary">Type: {project.service}</p>
              <p className="text-secondary">Bids: 25</p>
              <p className="text-secondary">Budget: ${project.budget}</p>
              <p className="text-secondary">tIMER</p>
              <p className="text-secondary">Additional Information: {project.specialInstructions}</p>
              <p className="text-secondary"><small className="text-muted">posted By {project.customerFirstName} {project.customerLastName}</small></p>
              <a href="#" class="btn btn-secondary float-left">More Details</a>
              <a href="#" class="btn btn-success float-right">Bid Now</a>
            </div>
            <img className="card-img-bottom" src="..." alt="Card image cap"></img>
          </div>
        </div>
      </React.Fragment>
    )
  } else {
    return (
      <div className="container text-center">
        <Spin tip="Loading..." size="large">
        </Spin>
      </div>

    )
  }



}

const mapStateToProps = (state, componentProps) => {
  //console.log(state)
  const id = componentProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])

)(ProjectDetails)



