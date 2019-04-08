import React, { Component } from 'react'
import "../Css/dashboard.scss";
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ChatModule from "../../Chat/Chat-module";
import PropTypes from 'prop-types';
import Notification from "./Notifications";
import Currentbids from '../../105_Dashboard/Component/currentbids'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

function LinkTab(props) {
    return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});


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
        }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        console.log(this, "======>")
        console.log(`activity${this.props}`);
        const { notifications } = this.props;
        const { projects } = this.props;
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className="col-12">
                <NoSsr>
                    <div className={classes.root}>
                        <AppBar position="static">
                            <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
                                <LinkTab label="Current Bids" href="page1" />
                                <LinkTab label="Conversation" href="page2" />
                                <LinkTab label="Notification" href="page3" />
                                <LinkTab label="Active Jobs" href="page4" />
                            </Tabs>
                        </AppBar>
                        {value === 0 && <TabContainer><Currentbids projects={projects} /></TabContainer>}
                        {value === 1 && <TabContainer><ChatModule /></TabContainer>}
                        {value === 2 && <TabContainer><Notification notifications={notifications} /></TabContainer>}
                        {value === 3 && <TabContainer>Active Jobs</TabContainer>}
                        {value === 4 && <TabContainer>Page Two</TabContainer>}
                        {value === 5 && <TabContainer>Page Three</TabContainer>}
                    </div>
                </NoSsr>
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
    connect(mapStateToProps), withStyles(styles),
    firestoreConnect([
        { collection: 'projects' },
        { collection: 'notifications', limit: 3 }
    ])
)(Activities);