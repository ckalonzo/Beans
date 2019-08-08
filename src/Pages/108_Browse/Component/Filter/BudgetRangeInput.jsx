import React, { Component } from "react";

export default class BudgetRangeInput extends Component {
  render() {
    return (
      <div>
        <aside className="col-sm-12">
          <div className="card">
            <article className="card-group-item">
              <header className="card-header">
                <h6 className="title ta-filtertext">Truck </h6>
              </header>
              <div className="filter-content">
                <div className="card-body">
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      value=""
                    />
                    <span className="form-check-label">Small</span>
                  </label>
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      value=""
                    />
                    <span className="form-check-label">Regular</span>
                  </label>
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      value=""
                    />
                    <span className="form-check-label">Some other option</span>
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
