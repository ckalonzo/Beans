import React, { Component } from 'react'
import ProjectList from './ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
class ProjectDashboard extends Component {
    render() {
        const { projects, auth } = this.props;
        if (!auth.uid) return <Redirect to='/102_ContractorLogin/ContractorLogin' />
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
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])

)
    (ProjectDashboard);