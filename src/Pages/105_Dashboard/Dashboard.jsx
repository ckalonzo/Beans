import React, { Component } from 'react';
import firebaseApp from '../../Firebase';
import Notifications from './Component/Notifications';
import DashboardHero from "./Component/dashboardHero";
import "./Css/dashboard.css";


class Dashboard extends Component {
    render() {
        return (
            <section>
                <div className="projectList container">
                    <div className="row">
                        <DashboardHero />
                    </div>
                </div>
            </section>

        );

    }

}

export default Dashboard;