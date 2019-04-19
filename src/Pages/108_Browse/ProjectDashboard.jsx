import React, { Component } from 'react'
import ProjectList from './ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import {
    SearchkitManager, SearchkitProvider, SearchBox, Hits, RefinementListFilter
  } from "searchkit";

import './Css/Project.scss';
const searchkit = new SearchkitManager("/");
class ProjectDashboard extends Component {
    render() {
        const { projects, auth } = this.props;
        if (!auth.uid) return <Redirect to='/102_ContractorLogin/ContractorLogin' />
        return (
            <SearchkitProvider searchkit={searchkit}>
            <div>
            <SearchBox
        searchOnChange={true}
        queryOptions={{analyzer:"standard"}}
        queryFields={["title^5", "languages", "text"]}/>
         <RefinementListFilter id="actors" field="actors.raw"/>
      <Hits/>
                 <ProjectList projects={projects} />
            </div>
        </SearchkitProvider>
            // <section className="panel-list">
            //     <div className=" container">
            //         <div className="row">
            //             <div className="col-6">
       
            //             </div>
            //         </div>
            //         <div className="row">
            //             <div className="col-8">
                           
            //             </div>
            //             <div className="col-4">
            //                 div.
            //             </div>
            //         </div>
            //     </div>
            // </section >
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