import React, { Component } from 'react'
import "../Css/customer-dashboard.scss";
import Notification from "./Notifications";
import Currentbids from '../../105_Dashboard/Component/currentbids'
import ChatModule from '../../Chat/Chat-module'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

class Activities extends Component {
    state =
        {
            pastBidsCounter: 5,
            messagesCounter: 10,
            currentBidsCounter: 20,
            notificationsCounter: 50,
            activeJobs: 1,
            show: true,
            value: 0,
            activeItemClassicTabs1: "1",
        }

    toggleClassicTabs1 = tab => () => {
        if (this.state.activeItemClassicTabs1 !== tab) {
            this.setState({
                activeItemClassicTabs1: tab
            });
        }
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        console.log(this, "======>")
        console.log(`activity${this.props}`);
        const { notifications, classes } = this.props;
        const { projects } = this.props;
        const { value } = this.state;
        return (
            <div className="col-12">

                <MDBContainer>
                    <div className="classic-tabs">
                        <MDBNav classicTabs color="cyan">
                            <MDBNavItem>
                                <MDBNavLink to="#" className={this.state.activeItemClassicTabs1 === "1" ? "active" : ""} onClick={this.toggleClassicTabs1("1")}>
                                    Current Bids
              </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#" className={this.state.activeItemClassicTabs1 === "2" ? "active" : ""} onClick={this.toggleClassicTabs1("2")}>
                                    Past Jobs
              </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#" className={this.state.activeItemClassicTabs1 === "3" ? "active" : ""} onClick={this.toggleClassicTabs1("3")}>
                                    Conversation
              </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#" className={this.state.activeItemClassicTabs1 === "4" ? "active" : ""} onClick={this.toggleClassicTabs1("4")}>
                                    Notifications
              </MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent className="card" activeItem={this.state.activeItemClassicTabs1}>
                            <MDBTabPane tabId="1">
                                <Currentbids projects={projects} />
                            </MDBTabPane>
                            <MDBTabPane tabId="2">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Nihil odit magnam minima, soluta doloribus
                                    reiciendis molestiae placeat unde eos molestias.
                                    Quisquam aperiam, pariatur. Tempora, placeat ratione
                                    porro voluptate odit minima.
              </p>
                            </MDBTabPane>
                            <MDBTabPane tabId="3">
                                <ChatModule />

                            </MDBTabPane>
                            <MDBTabPane tabId="4">
                                <Notification notifications={notifications} />

                            </MDBTabPane>
                        </MDBTabContent>
                    </div>
                </MDBContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' },
        { collection: 'notifications', limit: 3 }
    ])
)(Activities);
