import React, { Component } from 'react'
//css
import "../Css/PostJob.css";
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBCollapseHeader } from "mdbreact";
import { MDBBtn } from "mdbreact";
// components
import SpecialInstructions from "././AdditionalInfo/SpecialInstructions/SpecialInstructions";
import TypeOfTruck from "../Component/AdditionalInfo/TypeOfTruck/TypeOfTruck";
import TruckLoads from "../Component/AdditionalInfo/TruckLoads/TruckLoads";
import FlightOfStairs from "../Component/AdditionalInfo/FlightOfStairs/FlightOfStairs";
import Slot from "../Component/AdditionalInfo/DatePicker/slot";
import AnyLargeItems from "../Component/AdditionalInfo/AnyLargeItemsComponent/AnyLargeItems";
import LocationPage from "./AdditionalInfo/LocationOfJob";




class AdditionalInfo extends Component {

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
        const { values, address, city, state, zipCode, largeItems, selectedDate, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions, classes } = this.props;
        const { collapseID } = this.state;
        return (
            <div className="container ">
                <div className="row">
                    <div className="col-12   text-center mb-2 mt-3">
                        <h3>Please Complete the Information below</h3>
                    </div>
                </div>
                <MDBContainer>
                    <MDBContainer className="md-accordion mt-5">
                        <MDBCard className="mt-3">
                            <MDBCollapseHeader onClick={this.toggleCollapse("collapse1")}>
                                Location Of Job
              <i className={collapseID === "collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"} />
                            </MDBCollapseHeader>
                            <MDBCollapse id="collapse1" isOpen={collapseID}>
                                <MDBCardBody>
                                    <LocationPage
                                        handleChange={this.props.handleChange}
                                        values={values}
                                        address={address}
                                        city={city}
                                        state={state}
                                        zipCode={zipCode}
                                    />
                                </MDBCardBody>
                            </MDBCollapse>
                        </MDBCard>

                        <MDBCard>
                            <MDBCollapseHeader onClick={this.toggleCollapse("collapse2")}>
                                Will There Be AnyLarge Items Involved
              <i className={collapseID === "collapse2" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"} />
                            </MDBCollapseHeader>
                            <MDBCollapse id="collapse2" isOpen={collapseID}>
                                <MDBCardBody>

                                    <AnyLargeItems
                                        handleChange={this.props.handleChange}
                                        values={values}
                                        largeItems={largeItems}

                                    />
                                </MDBCardBody>
                            </MDBCollapse>
                        </MDBCard>

                        <MDBCard>
                            <MDBCollapseHeader onClick={this.toggleCollapse("collapse3")}>
                                Choose Availibility
              <i className={collapseID === "collapse3" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"} />
                            </MDBCollapseHeader>
                            <MDBCollapse id="collapse3" isOpen={collapseID}>
                                <MDBCardBody>

                                    <Slot
                                        handleChange={this.props.handleChange}
                                        values={values}
                                        selectedDate={selectedDate}
                                        time={time}
                                        handleChangeDatePicker={this.props.handleChangeDatePicker}
                                        handleChangeTimePicker={this.props.handleChangeTimePicker}
                                    />
                                </MDBCardBody>
                            </MDBCollapse>
                        </MDBCard>

                        <MDBCard>
                            <MDBCollapseHeader onClick={this.toggleCollapse("collapse4")}>
                                How Many Flights Of Stairs
              <i className={collapseID === "collapse4" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"} />
                            </MDBCollapseHeader>
                            <MDBCollapse id="collapse4" isOpen={collapseID}>
                                <MDBCardBody>
                                    <FlightOfStairs
                                        handleChange={this.props.handleChange}
                                        values={values}
                                    />
                                </MDBCardBody>
                            </MDBCollapse>
                        </MDBCard>
                        <MDBCard>
                            <MDBCollapseHeader onClick={this.toggleCollapse("collapse5")}>
                                How Many truck Loads
              <i className={collapseID === "collapse5" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"} />
                            </MDBCollapseHeader>
                            <MDBCollapse id="collapse5" isOpen={collapseID}>
                                <MDBCardBody>
                                    <TruckLoads
                                        handleChange={this.props.handleChange}
                                        values={values}
                                    />
                                </MDBCardBody>
                            </MDBCollapse>
                        </MDBCard>
                        <MDBCard>
                            <MDBCollapseHeader onClick={this.toggleCollapse("collapse6")}>
                                What type of truck will best sute the Job
              <i className={collapseID === "collapse6" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"} />
                            </MDBCollapseHeader>
                            <MDBCollapse id="collapse6" isOpen={collapseID}>
                                <MDBCardBody>
                                    <TypeOfTruck
                                        handleChange={this.props.handleChange}
                                        values={values}

                                    />
                                </MDBCardBody>
                            </MDBCollapse>
                        </MDBCard>
                        <MDBCard>
                            <MDBCollapseHeader onClick={this.toggleCollapse("collapse7")}>
                                Additional Information you would like to add
              <i className={collapseID === "collapse7" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"} />
                            </MDBCollapseHeader>
                            <MDBCollapse id="collapse7" isOpen={collapseID}>
                                <MDBCardBody>
                                    <SpecialInstructions
                                        handleChange={this.props.handleChange}
                                        specialInstructions={specialInstructions}
                                        values={values}
                                    />
                                </MDBCardBody>
                            </MDBCollapse>
                        </MDBCard>
                        <MDBCard>
                            <MDBCollapseHeader onClick={this.toggleCollapse("collapse4")}>
                                How Many Flights Of Stairs
 <i className={collapseID === "collapse4" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"} />
                            </MDBCollapseHeader>
                            <MDBCollapse id="collapse3" isOpen={collapseID}>

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
            </div >
        )
    }
}
export default AdditionalInfo;