import React, { Component } from "react";

import "../../../Css/PostJob.css";
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
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
class AnyLargeItems extends Component {

    render() {
        const { handleChange, largeItems, values, classes } = this.props;
        return (


            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <div className={classes.root}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <RadioGroup
                                    required
                                    aria-label="Gender"
                                    name="gender1"
                                    className={classes.group}
                                    value={values.largeItems}
                                    onChange={handleChange("largeItems")}
                                    defaultvalue={values.largeItems}
                                    id={largeItems}
                                >
                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default withStyles(styles)(AnyLargeItems);