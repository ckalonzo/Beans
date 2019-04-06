import React, { Component } from "react";
import "../../../Css/PostJob.css";
import TextField from '@material-ui/core/TextField';


export default class ZipCode extends Component {

    render() {
        const { handleChange, zipCode, values } = this.props;
        return (
            <React.Fragment>
                <TextField
                    required
                    id={zipCode}
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="billing postal-code"
                    defaultvalue={values.zipCode}
                    onChange={handleChange('zipCode')}
                />
            </React.Fragment>
        )
    }
}

