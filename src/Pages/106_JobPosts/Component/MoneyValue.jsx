import React, { Component } from 'react';
import "../Css/currency.css"
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

class MoneyValue extends Component {

  render() {
    const { handleChange, budget, classes } = this.props;
    console.log(handleChange);
    return (
      <React.Fragment>

        <TextField
          id={budget}
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Amount"
          value={budget}
          onChange={handleChange("budget")}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </React.Fragment>
    );
  }
}


export default withStyles(styles)(MoneyValue);