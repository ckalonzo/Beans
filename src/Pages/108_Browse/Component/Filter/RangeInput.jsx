import React, { Component } from "react";

export default class RangeInput extends Component {
  render() {
    return (
      <div>
        <aside class="col-sm-12">
          <div class="card">
            <article class="card-group-item">
              <header class="card-header">
                <h6 class="title ta-filtertext ">Budget </h6>
              </header>
              <div class="filter-content">
                <div class="card-body">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label>Min</label>
                      <input
                        type="number"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="$0"
                      />
                    </div>
                    <div class="form-group col-md-6 text-right">
                      <label>Max</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="$1,0000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article class="card-group-item">
              <header class="card-header">
                <h6 class="title ta-filtertext">Selection </h6>
              </header>
              <div class="filter-content">
                <div class="card-body">
                  <div class="custom-control custom-checkbox">
                    <span class="float-right badge badge-light round">52</span>
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Check1"
                    />
                    <label class="custom-control-label" for="Check1">
                      Samsung
                    </label>
                  </div>

                  <div class="custom-control custom-checkbox">
                    <span class="float-right badge badge-light round">132</span>
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Check2"
                    />
                    <label class="custom-control-label" for="Check2">
                      Black berry
                    </label>
                  </div>

                  <div class="custom-control custom-checkbox">
                    <span class="float-right badge badge-light round">17</span>
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Check3"
                    />
                    <label class="custom-control-label" for="Check3">
                      Samsung
                    </label>
                  </div>

                  <div class="custom-control custom-checkbox">
                    <span class="float-right badge badge-light round">7</span>
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Check4"
                    />
                    <label class="custom-control-label" for="Check4">
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
