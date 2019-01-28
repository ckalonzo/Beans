import React, { Component } from 'react'
import "./Css/dashboard.css";

export default class dashboardHero extends Component {
  render() {
    return (
      <div>
       <div className="dash-hero col-12">
                            <h1>Dashboard</h1>
                        </div>
                        <div className="row">
                            <Notifications />
                        </div>
      </div>
    )
  }
}

