import React, { Component } from "react";
import "../../../Css/PostJob.css";
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});


class TruckLoads extends Component {


    render() {
        const { handleChange, values, truckLoads, classes } = this.props;
        return (

            <div className="className container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <FormControl component="fieldset" className={classes.formControl}>
                            <RadioGroup
                                required
                                aria-label="Gender"
                                name="gender1"
                                className={classes.group}
                                value={values.largeItems}
                                onChange={handleChange('truckLoads')}
                                defaultvalue={values.truckLoads}
                                id={truckLoads}
                            >
                                <FormControlLabel value="0" control={<Radio />} label="0" />
                                <FormControlLabel value="1" control={<Radio />} label="1" />
                                <FormControlLabel value="2" control={<Radio />} label="2" />
                                <FormControlLabel value="3" control={<Radio />} label="3" />
                                <FormControlLabel value="4" control={<Radio />} label="4" />
                                <FormControlLabel value="5" control={<Radio />} label="5" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(TruckLoads);