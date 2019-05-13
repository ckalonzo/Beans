import React, { Component } from "react";
import "../../../Css/PostJob.css";


class StreetAddress extends Component {
    render() {
        const { handleChange, address, values } = this.props;
        return (
            <React.Fragment>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Street Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id={address}
                        defaultvalue={values.address}
                        onChange={handleChange('address')}
                    />
                </div>

            </React.Fragment>




        )
    }
}

export default StreetAddress;