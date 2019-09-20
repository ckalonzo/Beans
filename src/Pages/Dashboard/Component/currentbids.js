import React, { Component } from 'react'
import ProjectList from '../../Browse/ProjectList'


export default class Currentbids extends Component {
    render() {
        const { projects } = this.props;
        return (
            <section>
                <div className="app-content container">
                    <div className="row">
                        <div className="col-12">
                            <h4>Current Bids</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ProjectList projects={projects} />
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}
