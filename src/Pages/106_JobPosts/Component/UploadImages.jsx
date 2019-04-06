import React, { Component } from "react";
import { DropzoneArea } from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});
class UploadImages extends Component {

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {

        const { handleChangeAttachments, files, classes } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12  offset-0  text-center mb-5 mt-5">
                            <h3>Please Upload Images</h3>
                            <h6>Uploading Images is optional but highly recommended to help providers recieve more accruate bids </h6>
                        </div>
                    </div>
                </div>
                <DropzoneArea
                    onChange={handleChangeAttachments.bind(files)}

                />

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
        );
    }
}

export default withStyles(styles)(UploadImages);
