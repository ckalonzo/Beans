import React, { Component } from 'react'
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
      container: {
        display: "flex",
        flexWrap: "wrap"
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
      },
      dense: {
        marginTop: 16
      },
      menu: {
        width: 600
      }
    });
 class WriteReview extends Component {
  render() {
      const { classes } = this.props;
    return (
      <React.Fragment>
                    <TextField
                      id="outlined-multiline-static"
                      label="Review"
                      multiline
                      rows="4"
                      defaultValue="Default Value"
                      className={classes.textField}
                      margin="normal"
                      fullWidth
                      variant="outlined"
                    />
      </React.Fragment>

    )
  }
}

export default withStyles(styles)(WriteReview)