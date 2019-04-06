import React, { Component } from "react";
import "../../../Css/PostJob.css";
import 'date-fns';
import { DatePicker } from "material-ui-pickers";


class CustDatePicker extends Component {


    render() {
        const { handleChangeDatePicker, selectedDate, props } = this.props;
        return (
            <React.Fragment>
                <div className="picker">
                    <DatePicker
                        keyboard
                        clearable
                        label="Uncontrolled input"
                        value={selectedDate}
                        onChange={handleChangeDatePicker('selectedDate')}
                        animateYearScrolling={false}
                        minDate={new Date()}
                        onInputChange={e => console.log("Keyboard Input:", e.target.value)}
                    />


                </div>
            </React.Fragment>
        )
    }

}

export default CustDatePicker