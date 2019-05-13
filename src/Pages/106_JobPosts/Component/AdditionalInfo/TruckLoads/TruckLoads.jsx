import React, { Component } from "react";
import "../../../Css/PostJob.css";
import { MDBFormInline, MDBInput } from "mdbreact";
class TruckLoads extends Component {
    render() {
        const { handleChange, values, truckLoads } = this.props;
        return (
            <div className="className container">
                <div className="row">
                    <div className="col-12 text-center mb-5">

                        <MDBFormInline className="mt-5">
                            <MDBInput
                                gap
                                onClick={this.onClick(1)}
                                checked={this.state.radio === 1 ? true : false}
                                label="0"
                                type="radio"
                                id={truckLoads}
                                value={values.truckLoads}
                                onChange={handleChange('truckLoads')}
                                defaultvalue={values.truckLoads}
                            />
                            <MDBInput
                                gap
                                onClick={this.onClick(2)}
                                checked={this.state.radio === 2 ? true : false}
                                label="1"
                                type="radio"
                                id={truckLoads}
                                value={values.truckLoads}
                                onChange={handleChange('truckLoads')}
                                defaultvalue={values.truckLoads}
                            />
                            <MDBInput
                                gap
                                onClick={this.onClick(3)}
                                checked={this.state.radio === 3 ? true : false}
                                label="2"
                                type="radio"
                                id={truckLoads}
                                value={values.truckLoads}
                                onChange={handleChange('truckLoads')}
                                defaultvalue={values.truckLoads}
                            />
                            <MDBInput
                                gap
                                onClick={this.onClick(4)}
                                checked={this.state.radio === 4 ? true : false}
                                label="3"
                                type="radio"
                                id={truckLoads}
                                value={values.truckLoads}
                                onChange={handleChange('truckLoads')}
                                defaultvalue={values.truckLoads}
                            />
                            <MDBInput
                                gap
                                onClick={this.onClick(5)}
                                checked={this.state.radio === 5 ? true : false}
                                label="4"
                                type="radio"
                                id={truckLoads}
                                value={values.truckLoads}
                                onChange={handleChange('truckLoads')}
                                defaultvalue={values.truckLoads}
                            />
                            <MDBInput
                                gap
                                onClick={this.onClick(6)}
                                checked={this.state.radio === 6 ? true : false}
                                label="5"
                                type="radio"
                                id={truckLoads}
                                value={values.truckLoads}
                                onChange={handleChange('truckLoads')}
                                defaultvalue={values.truckLoads}
                            />
                            <MDBInput
                                gap
                                onClick={this.onClick(7)}
                                checked={this.state.radio === 7 ? true : false}
                                label="6"
                                type="radio"
                                id={truckLoads}
                                value={values.truckLoads}
                                onChange={handleChange('truckLoads')}
                                defaultvalue={values.truckLoads}
                            />
                        </MDBFormInline>

                    </div>
                </div>

            </div>
        )
    }
}

export default TruckLoads;