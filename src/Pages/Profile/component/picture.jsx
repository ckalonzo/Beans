import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
    input: {
        display: 'none',
    },
    bigAvatar: {
        margin: 10,
        width: 160,
        height: 160,
    },

};

class Picture extends Component {
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className="row">
                    <Avatar size={94} icon="user" className={classes.bigAvatar} />
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
export default withStyles(styles)(Picture);