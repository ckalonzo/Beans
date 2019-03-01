import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) => {
  //getting project id
  const id = props.match.params.id;
  console.log(props)
  return (
    <section>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-body">
            <h5 className="card-title">Project title - {id}</h5>
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

            <p className="text-secondary">Type: Junk Removal</p>
            <p className="text-secondary">Bids: 25</p>
            <p className="text-secondary">Budget: $500</p>
            <p className="text-secondary">tIMER</p>
            <p className="text-secondary">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="text-secondary"><small className="text-muted">posted By: Kisha555</small></p>
            <a href="#" class="btn btn-secondary float-left">More Details</a>
            <a href="#" class="btn btn-success float-right">Bid Now</a>
          </div>
          <img className="card-img-bottom" src="..." alt="Card image cap"></img>
        </div>
      </div>
    </section>

  )
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



