import React, { Component } from 'react'
import "../Css/PostJob.css";

import { MDBBtn } from "mdbreact";



class TypeOfJob extends Component {



    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }
    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }

    render() {
        const { values, handleChange, classes } = this.props;

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12  offset-0 text-center mb-5 mt-5">
                            <h3>What Type of Job you need?</h3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12  offset-0 text-center mb-5">
                            <React.Fragment>
                                    <select className="browser-default custom-select" value={values.service}
                                        onChange={handleChange('service')}>
                                        <option>Choose your option</option>
                                        <option value={"Junk Removal"}>Junk Removal</option>
                                        <option  value={"Cleaner Service"}>Cleaner Service</option>
                                        
                                    </select>
                               
                                    }
                                >

                                  
                            </React.Fragment>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mx-auto">
                            <MDBBtn
                                variant="contained"
                                color="primary"
                                onClick={this.back}
                                className={classes.button}>
                                Back
                        </MDBBtn>
                            <MDBBtn
                                variant="contained"
                                color="primary"
                                onClick={this.continue}
                                className={classes.button}>
                                Continue
                        </MDBBtn>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </React.Fragment>



        );
    }
}

export default TypeOfJob;