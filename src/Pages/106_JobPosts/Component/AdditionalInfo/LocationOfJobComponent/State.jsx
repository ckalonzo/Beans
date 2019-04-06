import React, { Component } from "react";
import "../../../Css/PostJob.css";
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 100,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class statee extends Component {
    state = {
        labelWidth: 0,
    };
    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    render() {
        const { handleChange, state, values, classes } = this.props;
        return (
            <React.Fragment>
                <form className={classes.root} autoComplete="on">
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel
                            ref={ref => {
                                this.InputLabelRef = ref;
                            }}
                            htmlFor="type-of-jobs"
                        >

                        </InputLabel>
                        <Select
                            required
                            value={values.state}
                            onChange={handleChange('state')}
                            input={
                                <OutlinedInput
                                    labelWidth={this.state.labelWidth}
                                    name="state"
                                    id={state}
                                />
                            }
                        >

                            <MenuItem value={"AL"}>AL</MenuItem>
                            <MenuItem value={"AK"}>AK</MenuItem>
                            <MenuItem value={"AZ"}>AZ</MenuItem>
                            <MenuItem value={"AR"}>AR</MenuItem>
                            <MenuItem value={"CA"}>CA</MenuItem>
                            <MenuItem value={"CO"}>CO</MenuItem>
                            <MenuItem value={"CT"}>CT</MenuItem>
                            <MenuItem value={"DE"}>DE</MenuItem>
                            <MenuItem value={"DC"}>DC</MenuItem>
                            <MenuItem value={"FL"}>FL</MenuItem>
                            <MenuItem value={"GA"}>GA</MenuItem>
                            <MenuItem value={"HI"}>HI</MenuItem>
                            <MenuItem value={"ID"}>ID</MenuItem>
                            <MenuItem value={"IL"}>IL</MenuItem>
                            <MenuItem value={"IN"}>IN</MenuItem>
                            <MenuItem value={"IA"}>IA</MenuItem>
                            <MenuItem value={"KS"}>KS</MenuItem>
                            <MenuItem value={"KY"}>KY</MenuItem>
                            <MenuItem value={"LA"}>LA</MenuItem>
                            <MenuItem value={"ME"}>ME</MenuItem>
                            <MenuItem value={"MD"}>MD</MenuItem>
                            <MenuItem value={"MA"}>MA</MenuItem>
                            <MenuItem value={"MI"}>MI</MenuItem>
                            <MenuItem value={"MN"}>MN</MenuItem>
                            <MenuItem value={"MS"}>MS</MenuItem>
                            <MenuItem value={"MO"}>MO</MenuItem>
                            <MenuItem value={"MT"}>MT</MenuItem>
                            <MenuItem value={"NE"}>NE</MenuItem>
                            <MenuItem value={"NV"}>NV</MenuItem>
                            <MenuItem value={"NH"}>NH</MenuItem>
                            <MenuItem value={"NJ"}>NJ</MenuItem>
                            <MenuItem value={"NM"}>NM</MenuItem>
                            <MenuItem value={"NY"}>NY</MenuItem>
                            <MenuItem value={"NC"}>NC</MenuItem>
                            <MenuItem value={"ND"}>ND</MenuItem>
                            <MenuItem value={"OH"}>OH</MenuItem>
                            <MenuItem value={"OK"}>OK</MenuItem>
                            <MenuItem value={"OR"}>OR</MenuItem>
                            <MenuItem value={"PA"}>PA</MenuItem>
                            <MenuItem value={"RI"}>RI</MenuItem>
                            <MenuItem value={"SC"}>SC</MenuItem>
                            <MenuItem value={"SD"}>SD</MenuItem>
                            <MenuItem value={"TN"}>TN</MenuItem>
                            <MenuItem value={"TX"}>TX</MenuItem>
                            <MenuItem value={"UT"}>UT</MenuItem>
                            <MenuItem value={"VT"}>VT</MenuItem>
                            <MenuItem value={"VA"}>VA</MenuItem>
                            <MenuItem value={"WA"}>WA</MenuItem>
                            <MenuItem value={"WV"}>WV</MenuItem>
                            <MenuItem value={"WI"}>WI</MenuItem>
                            <MenuItem value={"WY"}>WY</MenuItem>

                        </Select>

                    </FormControl>
                </form>
            </React.Fragment>


        )
    }
}

export default withStyles(styles)(statee);