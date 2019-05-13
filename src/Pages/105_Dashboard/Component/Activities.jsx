import React, { Component } from 'react'
import "../Css/dashboard.scss";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import ChatModule from "../../Chat/Chat-module";
import Notification from "./Notifications";
import Currentbids from '../../105_Dashboard/Component/currentbids'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


class Activities extends Component {
    state =
        {
            activeItemClassicTabs1: "1",
            pastBidsCounter: 5,
            messagesCounter: 10,
            currentBidsCounter: 20,
            notificationsCounter: 50,
            activeJobs: 1,
            show: true,
            value: 0,
        }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    toggleClassicTabs1 = tab => () => {
        if (this.state.activeItemClassicTabs1 !== tab) {
            this.setState({
                activeItemClassicTabs1: tab
            });
        }
    }

    render() {
        console.log(this, "======>")
        console.log(`activity${this.props}`);
        const { notifications } = this.props;
        const { projects } = this.props;
        const { classes } = this.props;
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
                                    Conversation
              </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#" className={this.state.activeItemClassicTabs1 === "3" ? "active" : ""} onClick={this.toggleClassicTabs1("3")}>
                                    Notification
              </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#" className={this.state.activeItemClassicTabs1 === "4" ? "active" : ""} onClick={this.toggleClassicTabs1("4")}>
                                    Active Jobs
              </MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent className="card" activeItem={this.state.activeItemClassicTabs1}>
                            <MDBTabPane tabId="1">
                                <Currentbids projects={projects} />
                            </MDBTabPane>
                            <MDBTabPane tabId="2">
                                <ChatModule />
                            </MDBTabPane>
                            <MDBTabPane tabId="3">
                                <Notification notifications={notifications} />
                            </MDBTabPane>
                            <MDBTabPane tabId="4">
                                <p>
                                    Active Jobs
              </p>
                            </MDBTabPane>
                        </MDBTabContent>
                    </div>
                </MDBContainer>
                );
              }
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