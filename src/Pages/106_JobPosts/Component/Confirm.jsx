import React, { Component } from 'react'
import { MDBBtn, MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";


class Confirm extends Component {


    continue = (e) => {
        e.preventDefault()
        //process Form//
        this.props.nextStep()
        this.props.handleSubmit(e)
    }
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const { classes } = this.props;
        const { values: { service, budget, attachments, address, city, state, zipCode, largeItems, date, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions } } = this.props;
        return (
            <div className="container">
                <React.Fragment>
                    <MDBContainer>
                        <MDBListGroup>
                            <MDBListGroupItem primary="Type of Job" secondary={service} />
                            <MDBListGroupItem primary="Upload Images" secondary={attachments} />
                            <MDBListGroupItem primary="Address" secondary={address} />
                            <MDBListGroupItem primary="City" secondary={city} />
                            <MDBListGroupItem primary="State" secondary={state} />
                            <MDBListGroupItem primary="Zipcode" secondary={zipCode} />
                            <MDBListGroupItem primary="Will There Be AnyLarge Items Involved?" secondary={largeItems} />
                            <MDBListGroupItem primary="Date" secondary={date} />
                            <MDBListGroupItem primary="Time" secondary={time} />
                            <MDBListGroupItem primary="How Many Flights Of Stairs?" secondary={flightOfStairs} />
                            <MDBListGroupItem primary="How Many truck Loads?" secondary={truckLoads} />
                            <MDBListGroupItem primary="What type of truck will best sute the Job?" secondary={typeOfTruck} />
                            <MDBListGroupItem primary="Additional Information you would like to add?" secondary={specialInstructions} />
                            <MDBListGroupItem primary="Budget" secondary={budget} />
                        </MDBListGroup>

                    </MDBContainer>

                    <br />




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
                                Confirm
                        </MDBBtn>
                        </div>
                    </div>

                </React.Fragment >
            </div >
        )
    }
}


export default Confirm;