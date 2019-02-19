import React, { Component } from 'react';
import Activities from './Component/Activities';
import DashboardHero from "./Component/dashboardHero";
import "./Css/dashboard.css";
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        const { projects } = this.props;
        return (
            <section>
                <div className="projectList container">
                    <div className="row mb-5">
                        <DashboardHero />
                    </div>
                    <div className="row">
                        <Activities projects={projects} />
                    </div>
                </div>
            </section>

        );

    }

}
const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard);