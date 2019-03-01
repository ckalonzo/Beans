import React, { Component } from 'react'
import ProjectList from './ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
class ProjectDashboard extends Component {
    render() {
        const { projects } = this.props;
        return (
            <section>
                <div className=" container">
                    <div className="row">
                        <div className="col-12">
                            <h4>Current Projects</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ProjectList projects={projects} />
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])

)
    (ProjectDashboard);