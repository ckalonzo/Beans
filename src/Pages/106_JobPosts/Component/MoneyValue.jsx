import React, { Component } from 'react';
import "../Css/currency.css"


class MoneyValue extends Component {

  render() {
    const { handleChange, budget } = this.props;
    return (
      <React.Fragment>
        <div class="input-group">
          <span class="input-group-addon">$</span>
          <input type="text" class="form-control" value={budget} onChange={handleChange("budget")} placeholder="Price" />
        </div>
      </React.Fragment>
    );
  }
}


export default MoneyValue;