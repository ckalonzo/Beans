import React, { Component } from 'react';



export default class Budget extends Component {
    render() {
        return (

            <div className="className container">
                <div className="row">
                    <div className="col-12">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">$</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"></input>
                            <div class="input-group-append">
                                <span class="input-group-text">.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        )

    }
} 