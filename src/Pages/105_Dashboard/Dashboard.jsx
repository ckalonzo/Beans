import React, { Component } from 'react';
import firebaseApp from '../../Firebase';
import Notifications from './Component/Notifications';

class Dashboard extends Component {
    render() {
        return (
            <section>
                <div className="projectList container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Dashboard</h1>
                        </div>
                        <div className="row">
                            <Notifications />
                        </div>
                    </div>
                </div>
            </section>
        );

    }

}

export default Dashboard;