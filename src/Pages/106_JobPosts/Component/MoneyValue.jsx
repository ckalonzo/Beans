import React, { Component } from "react";
import "../Css/currency.scss";

class MoneyValue extends Component {
  render() {
    const { handleChange, budget } = this.props;
    return (
      <React.Fragment>
        <div className="input-group ta-currency">
          <span className="input-group-addon">$</span>
          <input
            type="text"
            className="form-control"
            value={budget}
            onChange={handleChange("budget")}
            placeholder="Price"
            step=".01"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default MoneyValue;
