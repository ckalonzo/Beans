import React, { Component } from 'react'
import "../Css/dashboard.css";
import { Tabs, Icon, Badge } from 'antd';
import Notification from "../Component/Notifications";
import Main from "../Component/Chat/Main/Main";

const TabPane = Tabs.TabPane;

export default class CurrentBids extends Component {
    state =
        {
            pastBidsCounter: 5,
            messagesCounter: 10,
            currentBidsCounter: 20,
            notificationsCounter: 50,
            activeJobs: 1,
            show: true,
        }


    render() {

        return (
            <div className="col-12">
                <Tabs defaultActiveKey="4" size="large">

                    <TabPane
                        tab={<span><Icon type="pushpin" theme="twoTone" />Current Bids
                            <Badge count={this.state.currentBidsCounter} /></span>}
                        key="1">Content of tab 1
                    </TabPane>
                    <TabPane
                        tab={<span><Icon type="clock-circle" theme="twoTone" />Past Bids
                            <Badge count={this.state.pastBidsCounter} /></span>} key="2">Content of tab 2
                    </TabPane>
                    <TabPane
                        tab={<span><Icon type="mail" theme="twoTone" />Messages
                            <Badge count={this.state.messagesCounter} /></span>} key="3"><Main />
                    </TabPane>
                    <TabPane
                        tab={<span><Icon type="alert" theme="twoTone" />Notifications
                            <Badge count={this.state.notificationsCounter} /></span>} key="4"><Notification />
                    </TabPane>
                    <TabPane
                        tab={<span><Icon type="crown" theme="twoTone" />Active Jobs
                            <Badge count={this.state.activeJobs} /></span>} key="5">Content of tab 3
                    </TabPane>
                    <TabPane
                        tab={<span><Icon type="crown" theme="twoTone" />Profile
                            <Badge count={this.state.activeJobs} /></span>} key="6">Profile
                    </TabPane>
                </Tabs>,
            </div>
        )
    }
}
