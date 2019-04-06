import React, { Component } from "react";
import "../../../Css/PostJob.css";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});


class SpecialInstructions extends Component {

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }



    render() {
        const { handleChange, specialInstructions, values, classes } = this.props;
        console.log(handleChange);
        return (

            <div className="className container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <TextField
                            id={specialInstructions}
                            label="Multiline"
                            multiline
                            rows="4"
                            defaultvalue={values.specialInstructions}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            onChange={handleChange('specialInstructions')}
                        />


                    </div>
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(SpecialInstructions)