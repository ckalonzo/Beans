import React, { Component } from 'react';
import ProjectSummary from './Component/ProjectSummary';


const ProjectList = ({ projects }) => {
    return (
        <section>
            <div className="notifications container">
                <div className="row">
                    <div className="col-12">
                        {projects && projects.map(project => {
                            return (
                                <ProjectSummary project={project} key={project.id} />
                            )

                        })}

                    </div>

                </div>
            </div>
        </section>

    )
}

export default ProjectList;