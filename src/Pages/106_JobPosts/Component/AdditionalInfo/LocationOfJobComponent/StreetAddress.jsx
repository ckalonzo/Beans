import React, { Component } from "react";
import "../../../Css/PostJob.css";
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import blue from '@material-ui/core/colors/blue';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 500,
    },
});

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
    typography: { useNextVariants: true },
});

class StreetAddress extends Component {



    render() {
        const { handleChange, address, values, classes } = this.props;
        console.log(handleChange)
        return (


            <React.Fragment>
                <FormControl className={classes.margin}>
                    <MuiThemeProvider theme={theme}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id={address}
                                label="Street Address"
                                style={{ margin: 8 }}
                                placeholder="Street Address"
                                fullWidth
                                margin="normal"
                                defaultvalue={values.address}
                                onChange={handleChange('address')}
                                className={classes.textField}
                            />
                        </Grid>


                    </MuiThemeProvider>

                </FormControl>
            </React.Fragment>




        )
    }
}

export default withStyles(styles)(StreetAddress)