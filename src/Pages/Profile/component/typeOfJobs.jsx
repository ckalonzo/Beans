import React, { Component } from 'react'
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit,
    },
});
class TypeOfJobs extends Component {

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col d-inline">
                        <Chip label="Junk Removal" className={classes.chip} />
                        <Chip label="Lawn Service" className={classes.chip} />
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default withStyles(styles)(TypeOfJobs);