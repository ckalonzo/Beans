import React, { Component } from 'react';
import firebaseApp from '../../Firebase';
import CurrentBids from './Component/Current-Bids';
import DashboardHero from "./Component/dashboardHero";
import "./Css/dashboard.css";


class Dashboard extends Component {
    render() {
        return (
            <section>
                <div className="projectList container">
                    <div className="row mb-5">
                        <DashboardHero />
                    </div>
                    <div className="row">
                        <CurrentBids />
                    </div>
                </div>
            </section>

        );

    }

}

export default Dashboard;