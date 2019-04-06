import React, { Component } from 'react'
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

class IntroSignUp extends Component {
    state = {
        size: 'large',
    };

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12  offset-0 text-center mb-5 mt-5">
                            <h3>Hi There! Im Mathrew.I'll get you started on posting your job. Lets get started!</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mx-auto">

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
            </div>
        );
    }
}

export default withStyles(styles)(IntroSignUp);