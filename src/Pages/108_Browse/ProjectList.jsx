import React, { Component } from 'react';
import ProjectSummary from './Component/ProjectSummary';


const ProjectList = () => {
    return (
        <section>
            <div className="notifications container">
                <div className="row">
                    <div className="col-12">
                        <ProjectSummary />
                        <ProjectSummary />
                        <ProjectSummary />
                        <ProjectSummary />

                    </div>

                </div>
            </div>
        </section>

    )
}

export default ProjectList;