import React from 'react';
import ProjectSummary from './Component/ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
    return (
        <section>
            <div className="notifications container">
                <div className="row">
                    <div className="col-12">
                        {projects && projects.map(jobs => {
                            return (
                                <Link to={'/jobs/' + jobs.id}>
                                    <ProjectSummary jobs={jobs} key={jobs.id} />
                                </Link>

                            )

                        })}

                    </div>

                </div>
            </div>
        </section>

    )
}

export default ProjectList;