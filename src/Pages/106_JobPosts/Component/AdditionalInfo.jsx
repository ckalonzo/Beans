import React, { Component } from 'react'
import "../Css/PostJob.css";
import { Collapse, Button, size, Icon } from 'antd';
import SpecialInstructions from "././AdditionalInfo/SpecialInstructions/SpecialInstructions";
import TypeOfTruck from "../Component/AdditionalInfo/TypeOfTruck/TypeOfTruck";
import TruckLoads from "../Component/AdditionalInfo/TruckLoads/TruckLoads";
import FlightOfStairs from "../Component/AdditionalInfo/FlightOfStairs/FlightOfStairs";
import Slot from "../Component/AdditionalInfo/DatePicker/slot";
import AnyLargeItems from "../Component/AdditionalInfo/AnyLargeItemsComponent/AnyLargeItems";
import LocationPage from "./AdditionalInfo/LocationOfJob";


const Panel = Collapse.Panel;

export default class AdditionalInfo extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        size: 'large',
    };
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
        const size = this.state.size;
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
                                    handleChange={this.props.handleChange}
                                    values={values}
                                    largeItems={largeItems}

                                />
                            </Panel>
                            <Panel header="Choose Availibility" key="3">
                                <Slot
                                    handleChange={this.props.handleChange}
                                    values={values}
                                    date={date}
                                    time={time}
                                    handleChangeDatePicker={this.props.handleChangeDatePicker}
                                    handleChangeTimePicker={this.props.handleChangeTimePicker}
                                />
                            </Panel>

                            <Panel header="How Many Flights Of Stairs " key="4">
                                <FlightOfStairs
                                    handleChange={this.props.handleChange}
                                    values={values}
                                />
                            </Panel>
                            <Panel header="How Many truck Loads " key="5">
                                <TruckLoads
                                    handleChange={this.props.handleChange}
                                    values={values}
                                />
                            </Panel>
                            <Panel header="What type of truck will best sute the Job " key="6">
                                <TypeOfTruck
                                    handleChange={this.props.handleChange}
                                    values={values}
                                />
                            </Panel>
                            <Panel header="Additional Information you would like to add " key="7">
                                <SpecialInstructions
                                    handleChange={this.props.handleChange}
                                    values={values}
                                />
                            </Panel>
                        </Collapse>,
                    </div>
                </div>
                <div className="row">
                    <div className="mx-auto">
                        <Button.Group size={size}>
                            <Button type="primary" onClick={this.back} className="float-left">
                                <Icon type="left" />Back
                                </Button>
                            <Button type="primary" onClick={this.continue}>
                                Continue <Icon type="right" />
                            </Button>
                        </Button.Group>
                    </div>
                </div>
            </div >
        )
    }
}