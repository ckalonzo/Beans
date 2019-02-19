import React, { Component } from 'react'
import "../Css/ListJobs.css";
import { List, Avatar } from 'antd';
const data = [
    {
        typeOfJob: 'Junk Removal',
        JobImages: '',
        Address: "5935 Westchase street",
        City: "Atlanta",
        State: "GA",
        ZipCode: "30336",
        LargeItems: "Yes",
        Time: "12:00 PM",
        Date: "1/1/2020",
        Stairs: "4",
        TruckLoads: "3",
        typeOfTruck: "regular truck",
        additionalInformation: " Line 28:  The href attribute requires a valid value to be acce Line 28:  The href attribute requires a valid value to be acce",
        Budget: "60.00",
    },
    {
        typeOfJob: 'Junk Removal',
        JobImages: '',
        Address: "1875 Drew Cir",
        City: "Palo Alto",
        State: "CA",
        ZipCode: "94560",
        LargeItems: "Yes",
        Time: "12:00 PM",
        Date: "1/1/2020",
        Stairs: "4",
        TruckLoads: "3",
        typeOfTruck: "regular truck",
        additionalInformation: " Line 28:  The href attribute requires a valid value to be acce Line 28:  The href attribute requires a valid value to be acce",
        Budget: "60.00",
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
export default class ListJobs extends Component {
    render() {
        return (
            <div className="className container">
                <div className="row">
                    <div className="col-12">
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={<a href="https://ant.design">{item.typeOfJob}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            )}
                        />,
                    </div>
                </div>
            </div>
        )
    }
}
