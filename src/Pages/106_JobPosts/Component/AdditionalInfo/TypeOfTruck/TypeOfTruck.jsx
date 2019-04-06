import React, { Component } from 'react';
import './css/TypeofTruck.css';

export default class TypeOfTruck extends Component {
    render() {
        const { typeOfTruck, handleChange, values, classes } = this.props
        return (
            <div className="container">
                <div className="row">

                    <div className="col-md-3 col-lg-3 col-sm-3">

                        <label>
                            <input type="radio" defaultvalue={values.typeOfTruck} id={typeOfTruck} checked={typeOfTruck === 'RegularTruck'} value="RegularTruck" onChange={handleChange()} className="card-input-element" />
                            <div className="card ">
                                <img className="card-img-top" src="https://i.imgur.com/DulN0qt.jpg" alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Regular Pick Truck</h5>

                                    <ul>
                                        <li>For regular items.</li>
                                        <li>pick up small items</li>
                                        <li>pick up small items</li>
                                        <li>pick up small items</li>
                                    </ul>
                                </div>
                            </div>

                        </label>

                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-3">

                        <label>
                            <input type="radio" id={typeOfTruck} checked={typeOfTruck === 'SmallTruck'} value="SmallTruck" onChange={handleChange("typeOfTruck")} className="card-input-element" />
                            <span className="fancy-checkbox fancy-checkbox-img"></span>
                            <div className="card ">
                                <img className="card-img-top" src="https://imgur.com/E9odOLx.png" alt="Mid Truck"></img>
                                <div className="card-body">
                                    <h5 className="card-title">mid-size Pick Truck</h5>

                                    <ul>
                                        <li>For regular items.</li>
                                        <li>10 inch truck</li>
                                        <li>pick up small items</li>
                                        <li>pick up small items</li>
                                    </ul>
                                </div>
                            </div>

                        </label>

                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-3">
                        <label>
                            <input type="radio" id={typeOfTruck} checked={typeOfTruck === 'LargeTruck'} value="LargeTruck" onChange={handleChange("typeOfTruck")} className="card-input-element" />
                            <span className="fancy-checkbox fancy-checkbox-img"></span>
                            <div className="card ">
                                <img className="card-img-top" src="https://imgur.com/nk474Lh.png" alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">regular Pick Truck</h5>

                                    <ul>
                                        <li>For regular items.</li>
                                        <li>pick up small items</li>
                                        <li>pick up small items</li>
                                        <li>pick up small items</li>
                                    </ul>
                                </div>
                            </div>

                        </label>

                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-3">
                        <label>
                            <input type="radio" id={typeOfTruck} checked={typeOfTruck === 'extraLargeTruck'} value="extra Large" onChange={handleChange("typeOfTruck")} className="card-input-element" />
                            <span className="fancy-checkbox fancy-checkbox-img"></span>
                            <div className="card ">
                                <img className="card-img-top" src="https://imgur.com/nGB1nCt.png" alt="Extra Large Truck"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Extra Large Truck</h5>

                                    <ul>
                                        <li>For regular items.</li>
                                        <li>pick up small items</li>
                                        <li>pick up small items</li>
                                        <li>pick up small items</li>
                                    </ul>
                                </div>
                            </div>

                        </label>

                    </div>
                </div>


                {/* <div className="row cc-selector">

                    <div className="col-sm">
                        <input id="pickuptruck" type="radio" name="truck" value="pickuptruck" />
                        <label class="drinkcard-cc pickuptruck" for="pickuptruck"></label>
                    </div>
                    <div className="col-sm">
                        <input id="smallTruck" type="radio" name="truck" value="smallTruck" />
                        <label class="drinkcard-cc smallTruck" for="smallTruck"></label>
                    </div>
                    <div className="col-sm">
                        <input id="midTruck" type="radio" name="truck" value="midTruck">
                            <label class="drinkcard-cc midTruck" for="midTruck"></label>
                    </div>
                        <div className="col-sm">
                            <input id="largeTruck" type="radio" name="truck" value="largeTruck" />
                            <label class="drinkcard-cc largeTruck" for="largeTruck"></label>
                        </div>

                    </div> */}

            </div>


        );
    }

}