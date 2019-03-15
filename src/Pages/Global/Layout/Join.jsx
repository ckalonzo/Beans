import React, { Component } from 'react';
import './Css/Join.scss';

export default class Join extends Component {
    render() {

        return (
            <section>
                <div className="fluid-container">
                    <div className="row no-gutters ">
                        <div className="col-md-6 col-sm-12 panel join-panel">
                            <div className="mt-5">
                                <div className="mx-auto join-title-outter">
                                    <h2 className="join-title">Reasons Why You Should Join</h2>
                                </div>
                                <div className="mx-auto join-copy">
                                    <p>Morbi pulvinar massa vitae sem cursus ferlentu.
                                         Cura bitur maximus sem nibh, at sollicitudin sem pretiu vitae.
                                         Sed do eiusmod tempor incidi ut labore et dolore mag aliqua ip.</p>
                                    <p>At vero eos et accusamus et iusto odio dignis ducimus qui blanditiis
                                    praesentium volupta deleniti quas molestias excepturi sint occaecati
                                         cupiditate non est laborum.</p>
                                </div>

                            </div>
                            <div className="mx-auto start-posting-today-button">
                                <p><a className="btn btn-primary btn-lg spt-btn" href="/106_JobPosts/PostJob" role="button">Start Posting Today!</a></p>
                            </div>

                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="img-join">
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        );
    }

}
