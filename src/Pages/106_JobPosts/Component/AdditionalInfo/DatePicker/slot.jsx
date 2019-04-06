import React, { Component } from "react";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';

//pages
import CustDatePicker from "../DatePicker/DatePicker";
import AvaliableTime from "../DatePicker/AvaliableTime";

const styles = {
    grid: {
        width: '100%',
    },
};


class AvaliableTimeDate extends Component {

    render() {
        const { selectedDate, handleChangeDatePicker, handleChangeTimePicker, time, values, classes } = this.props;
        return (
            <div>
                <div className="className container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h6>Choose Date</h6>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container className={classes.grid} justify="space-around">
                                    <DatePicker
                                        keyboard
                                        clearable
                                        label="Uncontrolled input"
                                        value={selectedDate}
                                        onChange={handleChangeDatePicker.bind(selectedDate)}
                                        animateYearScrolling={false}
                                        minDate={new Date()}
                                        onInputChange={e => console.log("Keyboard Input:", e.target.value)}
                                    />


                                    <TimePicker
                                        showTodayButton
                                        todayLabel="now"
                                        label="Step = 5"
                                        value={time}
                                        minutesStep={5}
                                        onChange={handleChangeTimePicker.bind(time)}
                                        id={time}
                                    />

                                </Grid>
                            </MuiPickersUtilsProvider>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default withStyles(styles)(AvaliableTimeDate);