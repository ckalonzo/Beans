import React, { Component } from 'react'

import { Button, Icon, List } from 'antd';
export default class Confirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'large',
        };
    }


    continue = (e) => {
        e.preventDefault()
        //process Form//
        this.props.nextStep()
    }
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const { values: { service, budget, email, attachments, name, address, city, state, zipCode, largeItems, date, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions } } = this.props;
        console.log(this.props);
        const size = this.state.size;

        const data = [
            {
                title: "Type of Job",
                description: [service]
            },
            {
                title: "Upload Images",
                description: [attachments]
            },
            {
                title: "Address",
                description: [address]
            },
            {
                title: "City",
                description: [city]
            },
            {
                title: "State",
                description: [state]
            },
            {
                title: "Zipcode",
                description: [zipCode]
            },
            {
                title: "Will There Be AnyLarge Items Involved?",
                description: [largeItems]
            },
            {
                title: "Date",
                description: [date]
            },
            {
                title: "Time",
                description: [time]
            },
            {
                title: "How Many Flights Of Stairs?",
                description: [flightOfStairs]
            },
            {
                title: "How Many truck Loads?",
                description: [truckLoads]
            },
            {
                title: "What type of truck will best sute the Job?",
                description: [typeOfTruck]
            },
            {
                title: "Additional Information you would like to add?",
                description: [specialInstructions]
            },
            {
                title: "Budget",
                description: [budget]
            },
        ];
        return (
            <React.Fragment>
                <div className="container">
                
               
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.title}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />,
               
                <div className="row">
                    <div className="mx-auto">
                        <Button.Group size={size}>
                            <Button type="primary" onClick={this.back} className="float-left">
                                <Icon type="left" />Back
                                </Button>
                            <Button type="primary" htmlType="submit" onClick={this.continue}>
                                Confirm 
                            </Button>
                        </Button.Group>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
