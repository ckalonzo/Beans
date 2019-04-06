import React, { Fragment } from 'react';
import "../../../Css/PostJob.css";
import { TimePicker } from "material-ui-pickers";



class AvaliableTime extends React.Component {

    render() {
        const { time, handleChangeTimePicker, values } = this.props;

        return (
            <Fragment>
                <div className="col-12 text-center mb-5">

                    <div className="picker">
                        <TimePicker autoOk label="12 hours" id={time} value={values.time} onChange={handleChangeTimePicker('time')} />
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default AvaliableTime