import React, { Component } from 'react'

export default class cardContractors extends Component {
    render() {
        return (
            <div class="col-md-4 contractorCard">
                <div class="user-single card color-dark">
                    <div class="card-body">
                        <img src="img/c2.png" alt="" class="rounded-circle">
                            <h6>Kyle Relly</h6>
                            <p>Member Since: February 2018</p>
                            <div class="ratings">
                                <span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </span>
                                <span>(52)</span>
                            </div>
        </div>
                        <div class="card-footer">
                            <div class="stats">
                                <p><span>868</span> Items</p>
                                <p><span>9864</span> Sales</p>
                            </div>
                            <div class="user__status user--following"><a href="#" class="btn btn-sm btn-secondary">Following</a></div>
                        </div>
                    </div>
                
                    </div>
        )
    }
}
