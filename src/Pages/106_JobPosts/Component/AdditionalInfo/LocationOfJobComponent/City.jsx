import React, { Component } from "react";
import "../../../Css/PostJob.css";
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import blue from '@material-ui/core/colors/blue';


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


class City extends Component {

    render() {
        const { handleChange, city, values, classes } = this.props;
        return (
            <div className={classes.root}>
                <React.Fragment>
                    <FormControl className={classes.margin}>
                        <MuiThemeProvider theme={theme}>
                            <TextField
                                required
                                id={city}
                                label="City"
                                style={{ margin: 8 }}
                                placeholder="City"
                                fullWidth
                                defaultvalue={values.city}
                                margin="normal"
                                className={classes.textField}
                                defaultvalue={values.address}
                                onChange={handleChange('city')}
                            />
                        </MuiThemeProvider>

                    </FormControl>
                </React.Fragment>
            </div>





        )
    }
}

export default withStyles(styles)(City)