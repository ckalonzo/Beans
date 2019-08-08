import React, { Component } from "react";

export default class RangeInput extends Component {
  render() {
    return (
      <div>
        <aside className="col-sm-12">
          <div className="card">
            <article className="card-group-item">
              <header className="card-header">
                <h6 className="title ta-filtertext ">Budget </h6>
              </header>
              <div className="filter-content">
                <div className="card-body">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Min</label>
                      <input
                        type="number"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="$0"
                      />
                    </div>
                    <div className="form-group col-md-6 text-right">
                      <label>Max</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="$1,0000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="card-group-item">
              <header className="card-header">
                <h6 className="title ta-filtertext">Selection </h6>
              </header>
              <div className="filter-content">
                <div className="card-body">
                  <div className="custom-control custom-checkbox">
                    <span className="float-right badge badge-light round">52</span>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="Check1"
                    />
                    <label className="custom-control-label" for="Check1">
                      Samsung
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <span className="float-right badge badge-light round">132</span>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="Check2"
                    />
                    <label className="custom-control-label" for="Check2">
                      Black berry
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <span className="float-right badge badge-light round">17</span>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="Check3"
                    />
                    <label className="custom-control-label" for="Check3">
                      Samsung
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <span className="float-right badge badge-light round">7</span>
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="Check4"
                    />
                    <label className="custom-control-label" for="Check4">
                      Other Brand
                    </label>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </aside>
      </div>
    );
  }
}
