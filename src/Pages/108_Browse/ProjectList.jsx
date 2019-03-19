import React from 'react';
import ProjectSummary from './Component/ProjectSummary';
import { Link } from 'react-router-dom';
import './Css/Project.scss';

const ProjectList = ({ projects }) => {
    return (
        <section>
            <div className="notifications navbar-toggler container">
                <div className="row">
                    <div className="col-4">
                    </div>
                    <div className="col-8">
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
            </div>
        </section>

    )
}

export default ProjectList;