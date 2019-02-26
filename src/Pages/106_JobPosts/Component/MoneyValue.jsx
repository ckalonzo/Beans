import React, { Component } from 'react';
import "../Css/currency.css"
export default class MoneyValue extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleChange, budget } = this.props;
    console.log(handleChange);
    return (
      <React.Fragment>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <input type="text" class="form-control" id={budget} onChange={handleChange("budget")} />
          <div class="input-group-append">
            <span class="input-group-text">.00</span>
          </div>
        </div>

      </React.Fragment>
    );
  }
}
