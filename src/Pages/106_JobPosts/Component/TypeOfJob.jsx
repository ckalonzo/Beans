import React, { Component } from 'react'
import "../Css/PostJob.css";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
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
        minWidth: 400,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class TypeOfJob extends Component {


    state = {
        size: 'large',
        labelWidth: 0,
    };
    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }
    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }
    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }

    render() {
        const { values, handleChange, classes } = this.props;
        const size = this.state.size;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12  offset-0 text-center mb-5 mt-5">
                            <h3>What Type of Job you need?</h3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12  offset-0 text-center mb-5">
                            <React.Fragment>
                                <form className={classes.root} autoComplete="off">
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
                                            value={values.service}
                                            onChange={handleChange('service')}
                                            input={
                                                <OutlinedInput
                                                    labelWidth={this.state.labelWidth}
                                                    name="Type of Job"
                                                    id="type-of-jobs"
                                                />
                                            }
                                        >

                                            <MenuItem value={"Junk Removal"}>Junk Removal</MenuItem>
                                            <MenuItem value={"Cleaner Service"}>Cleaner Service</MenuItem>

                                        </Select>

                                    </FormControl>
                                </form>
                            </React.Fragment>
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
                </div>
                <div>
                </div>
            </React.Fragment>



        );
    }
}

export default withStyles(styles)(TypeOfJob);