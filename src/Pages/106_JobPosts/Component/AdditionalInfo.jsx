import React, { Component } from 'react'
//css
import "../Css/PostJob.css";
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
// components
import SpecialInstructions from "././AdditionalInfo/SpecialInstructions/SpecialInstructions";
import TypeOfTruck from "../Component/AdditionalInfo/TypeOfTruck/TypeOfTruck";
import TruckLoads from "../Component/AdditionalInfo/TruckLoads/TruckLoads";
import FlightOfStairs from "../Component/AdditionalInfo/FlightOfStairs/FlightOfStairs";
import Slot from "../Component/AdditionalInfo/DatePicker/slot";
import AnyLargeItems from "../Component/AdditionalInfo/AnyLargeItemsComponent/AnyLargeItems";
import LocationPage from "./AdditionalInfo/LocationOfJob";


const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class AdditionalInfo extends Component {

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const { values, address, city, state, zipCode, largeItems, selectedDate, time, flightOfStairs, truckLoads, typeOfTruck, specialInstructions, classes } = this.props;

        return (
            <div className="container ">
                <div className="row">
                    <div className="col-12   text-center mb-2 mt-3">
                        <h3>Please Complete the Information below</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className={classes.root}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Location Of Job</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        <LocationPage
                                            handleChange={this.props.handleChange}
                                            values={values}
                                            address={address}
                                            city={city}
                                            state={state}
                                            zipCode={zipCode}
                                        />
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Will There Be AnyLarge Items Involved</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        <AnyLargeItems
                                            handleChange={this.props.handleChange}
                                            values={values}
                                            largeItems={largeItems}

                                        />
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Choose Availibility</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        <Slot
                                            handleChange={this.props.handleChange}
                                            values={values}
                                            selectedDate={selectedDate}
                                            time={time}
                                            handleChangeDatePicker={this.props.handleChangeDatePicker}
                                            handleChangeTimePicker={this.props.handleChangeTimePicker}
                                        />
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>How Many Flights Of Stairs </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        <FlightOfStairs
                                            handleChange={this.props.handleChange}
                                            values={values}
                                        />
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>How Many truck Loads </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        <TruckLoads
                                            handleChange={this.props.handleChange}
                                            values={values}
                                        />
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>What type of truck will best sute the Job</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        <TypeOfTruck
                                            handleChange={this.props.handleChange}
                                            values={values}

                                        />
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>Additional Information you would like to add</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        <SpecialInstructions
                                            handleChange={this.props.handleChange}
                                            specialInstructions={specialInstructions}
                                            values={values}
                                        />
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    </div>
                </div>
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
                            Continue
                        </Button>

                    </div>
                </div>
            </div >
        )
    }
}
export default withStyles(styles)(AdditionalInfo);