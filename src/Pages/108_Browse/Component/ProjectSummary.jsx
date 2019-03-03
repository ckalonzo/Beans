import React from 'react';
import ProjectDetial from './ProjectDetail'
const ProjectSummary = ({ jobs }) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-12">
                        <h5 className="card-title">{jobs.service}</h5>
                    </div>
                </div>

                <p className="text-secondary">{jobs.city}</p>
                <p className="text-secondary">{jobs.bids}</p>
                <p className="text-secondary">{jobs.service}</p>
                <p className="text-secondary">tIMER</p>
                <p className="text-secondary">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="text-secondary"><small className="text-muted">posted By: {jobs.firstName}  {jobs.lastName}</small></p>
                <p className="text-secondary"><small className="text-muted">Avalibility</small></p>
                <a href="#" className="btn btn-secondary float-left">More Details</a>
                <a href="#" className="btn btn-success float-right">Bid Now</a>
            </div>
            <img className="card-img-bottom" src="..." alt="Card image cap"></img>
        </div>

    )
}

export default ProjectSummary;