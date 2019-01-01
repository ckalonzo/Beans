import React, { Component } from 'react';
import './css/Hero.css';

export default class Hero extends Component {
    render() {
        return (
            <section>
                <div className="jumbotron herosection">
                    <div className="container">
                        <div className="mt-5">
                            <h1 className="display-3 font-weight-bold hero-title">Trucked Away</h1>
                            <div className=" font-weight-bold hero-copy">Your # 1 site for Home Tasks.</div>
                            <div className=" font-weight-bold hero-copy mb-5">Post your job with your Budget Today.</div>
                            <p><a className="btn btn-primary btn-lg pj-btn" href="/postjob" role="button">Post A Job!</a></p>
                        </div>
                    </div>
                </div>
            </section>

        );
    }

}