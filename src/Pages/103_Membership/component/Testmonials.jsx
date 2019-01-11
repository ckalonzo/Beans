import React, { Component } from 'react';
import "../Css/Membership.css"

export default class Testimonial extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div class="row mt-5">
                        <div class="col-4  bubble">
                            <div class="mt-5 text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut eros maximus nisi porta tempor in et justo. Integer feugiat sodales dui vitae euismod. Duis fringilla tincidunt orci. In feugiat lacus nec ultrices porta.
                            </div>
                            <div className="mt-2 text-center">
                                <p>John Doe <span>(Junk Removal INC)</span></p>
                            </div>
                        </div>
                        <div class="col-4 bubble text-center justify-content">
                            <div class="mt-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut eros maximus nisi porta tempor in et justo. Integer feugiat sodales dui vitae euismod. Duis fringilla tincidunt orci. In feugiat lacus nec ultrices porta.


                            </div>
                            <div className="mt-2 text-center">
                                <p>Jerry Irvin <span>(Junk Removal INC)</span></p>
                            </div>
                        </div>
                        <div class="col-4 bubble text-center justify-content">
                            <div class="mt-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut eros maximus nisi porta tempor in et justo. Integer feugiat sodales dui vitae euismod. Duis fringilla tincidunt orci. In feugiat lacus nec ultrices porta.
                            </div>
                            <div className="mt-2 text-center">
                                <p>Brandon Stinson <span>(Junk Removal INC)</span></p>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        );
    }
}
