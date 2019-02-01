import React, { Component } from 'react'
import "../Css/dashboard.css";


export default class dashboardHero extends Component {
  render() {
    return (
      <div className="dash-hero col-12">
        <h1 className="text-center mt-5" > Contractor Dashboard</h1>
        <h5 className="text-center">Place Bids - Manage Bids</h5>
      </div>
    )
  }
}

