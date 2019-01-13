import React, { Component } from 'react';
import firebaseApp from '../../Firebase';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
        <div>
            <h1>Welcome to Home</h1>
           <button onClick={this.logout}>Logout</button>
        </div>
    );

}

}

export default Dashboard;