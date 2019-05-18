import React, { Component } from 'react'
import { MDBBtn } from "mdbreact";

const styles = {
    input: {
        display: 'none',
    },


};

class Picture extends Component {
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-md-4">
                                <image src="holder.js/171x180" roundedCircle />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" component="span" className={classes.button}>
                            Change
        </Button>
                    </label>

                </div>

            </React.Fragment>
        )
    }
}
export default Picture;