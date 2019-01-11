import React, { Component } from 'react';
import "../Css/Membership.css"

export default class MembershipMockup extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-4 mx-auto mt-4 text-center">
                            <h2>Choose Your Plan</h2>
                            <div className="col-12 mt-4">
                                <h5>Here's the reasons why you should join Trucked Away!</h5>
                            </div>
                            <div className="col-12 mt-4">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet,</li>
                                    <li>Lorem ipsum dolor sit amet,</li>
                                    <li>Lorem ipsum dolor sit amet,</li>
                                    <li>Lorem ipsum dolor sit amet,</li>
                                </ul>
                            </div>
                            <div className="see-our-plan">
                                <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
                                    SEE OUR PLANS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
