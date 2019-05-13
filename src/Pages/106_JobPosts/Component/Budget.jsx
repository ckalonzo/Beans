import React, { Component } from 'react';
import MoneyValue from './MoneyValue';
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBCollapseHeader } from "mdbreact";
import { MDBBtn } from "mdbreact";



class Budget extends Component {
    state = {
        collapseID: "collapse3"
    }
    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const { collapseID } = this.state;
        const { handleChange, budget, classes } = this.props;
        return (
            <div className="container ">
                <MDBContainer>
                    <MDBContainer className="md-accordion mt-5">
                        <MDBCard className="mt-3">
                            <MDBCollapseHeader onClick={this.toggleCollapse("collapse1")}>
                                How much you willing to spend to get the job done?
                  <i className={collapseID === "collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"} />
                            </MDBCollapseHeader>
                            <MDBCollapse id="collapse1" isOpen={collapseID}>
                                <MDBCardBody>
                                    <MoneyValue
                                        handleChange={handleChange}
                                        budget={budget}
                                    />
                                </MDBCardBody>
                            </MDBCollapse>
                        </MDBCard>
                    </MDBContainer>
                </MDBContainer>


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
        )
    }
}

export default Budget;