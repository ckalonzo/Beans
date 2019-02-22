import React, { Component } from 'react'
import "../Css/PostJob.css";
import { Collapse, Button } from 'antd';
import SpecialInstructions from "././AdditionalInfo/SpecialInstructions/SpecialInstructions";
import TypeOfTruck from "../Component/AdditionalInfo/TypeOfTruck/TypeOfTruck";
import TruckLoads from "../Component/AdditionalInfo/TruckLoads/TruckLoads";
import FlightOfStairs from "../Component/AdditionalInfo/FlightOfStairs/FlightOfStairs";
import Slot from "../Component/AdditionalInfo/DatePicker/slot";
import AnyLargeItems from "../Component/AdditionalInfo/AnyLargeItemsComponent/AnyLargeItems";
import LocationPage from "./AdditionalInfo/LocationOfJob";


const Panel = Collapse.Panel;

export default class AdditionalInfo extends Component {
    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }
    render() {
        const { address, city, statee, zipCode, largeItems, date, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions } = this.props;
        const values = { address, city, statee, zipCode, largeItems, date, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions };
        return (
            <div className="className container mt-5">
                <div className="row">
                    <div className="col-12">
                        <Collapse accordion>
                            <Panel header="Location Of Job" key="1">
                                <LocationPage
                                    handleChange={this.props.handleChange}
                                    values={values}
                                    address={address}
                                    city={city}
                                    statee={statee}
                                    zipCode={zipCode}
                                />
                            </Panel>
                            <Panel header="Will There Be AnyLarge Items Involved" key="2">
                                <AnyLargeItems
                                    handleChange={this.handleChange}
                                    values={values}
                                    largeItems={largeItems}

                                />
                            </Panel>
                            <Panel header="Choose Availibility" key="3">
                                <Slot
                                    handleChange={this.handleChange}
                                    values={values}
                                    date={date}
                                    time={time}
                                />
                            </Panel>

                            <Panel header="How Many Flights Of Stairs " key="4">
                                <FlightOfStairs
                                    handleChange={this.handleChange}
                                    values={values}
                                />
                            </Panel>
                            <Panel header="How Many truck Loads " key="5">
                                <TruckLoads
                                    handleChange={this.handleChange}
                                    values={values}
                                />
                            </Panel>
                            <Panel header="What type of truck will best sute the Job " key="6">
                                <TypeOfTruck
                                    handleChange={this.handleChange}
                                    values={values}
                                />
                            </Panel>
                            <Panel header="Additional Information you would like to add " key="7">
                                <SpecialInstructions
                                    handleChange={this.handleChange}
                                    values={values}
                                />
                            </Panel>
                        </Collapse>,
                    </div>
                    <Button onClick={this.continue}> Continue </Button>
                    <Button onClick={this.back}> Back</Button>
                </div>
            </div >
        )
    }
}