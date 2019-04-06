import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

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
                    <MuiThemeProvider>
                        <List>
                            <ListItemText primary="Type of Job" secondary={service} />
                            <ListItemText primary="Upload Images" secondary={attachments} />
                            <ListItemText primary="Address" secondary={address} />
                            <ListItemText primary="City" secondary={city} />
                            <ListItemText primary="State" secondary={state} />
                            <ListItemText primary="Zipcode" secondary={zipCode} />
                            <ListItemText primary="Will There Be AnyLarge Items Involved?" secondary={largeItems} />
                            <ListItemText primary="Date" secondary={date} />
                            <ListItemText primary="Time" secondary={time} />
                            <ListItemText primary="How Many Flights Of Stairs?" secondary={flightOfStairs} />
                            <ListItemText primary="How Many truck Loads?" secondary={truckLoads} />
                            <ListItemText primary="What type of truck will best sute the Job?" secondary={typeOfTruck} />
                            <ListItemText primary="Additional Information you would like to add?" secondary={specialInstructions} />
                            <ListItemText primary="Budget" secondary={budget} />
                        </List>

                    </MuiThemeProvider>

                    <br />




                    <div className="row">
                        <div className="mx-auto">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.back}
                                className={classes.button}>
                                Back
                        </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.continue}
                                className={classes.button}>
                                Confirm
                        </Button>
                        </div>
                    </div>

                </React.Fragment>
            </div >
        )
    }
}


export default withStyles(styles)(Confirm);