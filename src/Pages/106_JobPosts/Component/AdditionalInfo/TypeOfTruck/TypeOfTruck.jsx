import React, { Component } from 'react';

export default class TypeOfTruck extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div class="card-group">
                        <div class="card">
                            <img class="card-img-top" src="../../../img/3711035.jpg" alt="Card image cap"></img>
                            <div class="card-body">
                                <h5 class="card-title">8" Pick up Truck</h5>
                                <p class="card-text">
                                    <ul>
                                        <li>Small Jobs</li>
                                        <li>Home Imporvement</li>
                                        <li>Home Imporvement</li>
                                    </ul>
                                </p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src="..." alt="Card image cap"></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src="..." alt="Card image cap"></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}