import React, { Component } from 'react';
import MoneyValue from './MoneyValue';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

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

class Budget extends Component {

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }
    state = {
        size: 'large',
    };
    render() {

        const { handleChange, budget, classes } = this.props;
        return (
            <div className="className container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className={classes.root}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>How much you willing to spend to get the job done?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        <MoneyValue
                                            handleChange={handleChange}
                                            budget={budget}
                                        />
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>

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
            </div>
        )
    }
}

export default withStyles(styles)(Budget);