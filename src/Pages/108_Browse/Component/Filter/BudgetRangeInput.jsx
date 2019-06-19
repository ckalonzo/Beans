import React, { Component } from "react";

export default class BudgetRangeInput extends Component {
  render() {
    return (
      <div>
        <aside class="col-sm-12">
          <div class="card">
            <article class="card-group-item">
              <header class="card-header">
                <h6 class="title ta-filtertext">Truck </h6>
              </header>
              <div class="filter-content">
                <div class="card-body">
                  <label class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      value=""
                    />
                    <span class="form-check-label">Small</span>
                  </label>
                  <label class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      value=""
                    />
                    <span class="form-check-label">Regular</span>
                  </label>
                  <label class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      value=""
                    />
                    <span class="form-check-label">Some other option</span>
                  </label>
                </div>
              </div>
            </article>
          </div>
        </aside>
      </div>
    );
  }
}
