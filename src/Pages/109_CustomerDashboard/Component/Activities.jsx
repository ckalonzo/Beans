import React, { Component } from 'react'
import "../Css/customer-dashboard.scss";
import Notification from "./Notifications";
import Currentbids from '../../105_Dashboard/Component/currentbids'
import ChatModule from '../../Chat/Chat-module'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import PropTypes from 'prop-types';
//material ui
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

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
        const { notifications, classes } = this.props;
        const { projects } = this.props;
        const { value } = this.state;
        return (
            <div className="col-12">
                <NoSsr>
                    <div className={classes.root}>
                        <AppBar position="static">
                            <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>

                                <LinkTab label="Current Bids" href="page1" />


                                <LinkTab label="Past Jobs" href="page2" />
                                <LinkTab label="Conversation" href="page3" />
                                <LinkTab label="Notifications" href="page4" />
                            </Tabs>
                        </AppBar>
                        {value === 0 && <TabContainer><Currentbids projects={projects} /></TabContainer>}
                        {value === 1 && <TabContainer>Past Jobs</TabContainer>}
                        {value === 2 && <TabContainer><ChatModule /></TabContainer>}
                        {value === 3 && <TabContainer><Notification notifications={notifications} /></TabContainer>}

                    </div>
                </NoSsr>
            </div>
        )
    }
}
Activities.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    withStyles(styles),
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' },
        { collection: 'notifications', limit: 3 }
    ])
)(Activities);
