import React, { Component } from 'react';

const ProjectSummary = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Project title</h5>
                <p className="text-secondary">Location: Decatur Ga</p>
                <p className="text-secondary">Bids: 25</p>
                <p className="text-secondary">Budget: $500</p>
                <p className="text-secondary">tIMER</p>
                <p className="text-secondary">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="text-secondary"><small className="text-muted">posted By: Kisha555</small></p>
                <p className="text-secondary"><small className="text-muted">Avalibility</small></p>
                <a href="#" class="btn btn-secondary float-left">More Details</a>
                <a href="#" class="btn btn-success float-right">Bid Now</a>
            </div>
            <img className="card-img-bottom" src="..." alt="Card image cap"></img>
        </div>

    )
}

export default ProjectSummary;