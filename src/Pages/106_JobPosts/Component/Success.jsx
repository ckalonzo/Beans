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

class Success extends Component {

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="mx-auto">
                            <h1> Thank You For Your Submission</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mx-auto">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.back}
                                href="/"
                                className={classes.button}>
                                Dashboard
                        </Button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Success);