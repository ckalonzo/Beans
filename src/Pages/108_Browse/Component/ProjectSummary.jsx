import React from 'react';
import ProjectDetial from './ProjectDetail'

const ProjectSummary = ({ jobs }) => {
    return (
        <section className="projectSummary">
            <div className="col-12">
                <div className="card mb-2">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <h5 className="">{jobs.service}</h5>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-12">
                                <p className="text-secondary"> Number of bids: 11 {jobs.bidders}</p>
                            </div>
                            <div className="col-6 offest-2">
                                {/* <p className="text-secondary">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                <p className="text-secondary"><small className="text-muted">posted By: {jobs.firstName}  {jobs.lastName}</small></p>
                                <p className="text-secondary"><small className="text-muted">Avalibility</small></p>
                            </div>
                            <div className="col-6">
                                <p className="text-secondary">{`Remaining: ${jobs.budget}`}</p>
                                <p className="text-secondary">City: {jobs.city}</p>
                                <p className="text-secondary">{jobs.bids}</p>
                            </div>

                        </div>
                        <a href="#" className="btn btn-secondary float-left">More Details</a>
                        <a href="#" className="btn btn-success float-right">Bid Now</a>

                    </div>

                </div>
            </div>
        </section>


    )
}

export default ProjectSummary;