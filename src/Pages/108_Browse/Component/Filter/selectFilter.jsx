import React, { Component } from "react";

export default class SelectFilter extends Component {
  render() {
    return (
      <div>
        <aside class="col-sm-12">
          <div class="card">
            <article class="card-group-item">
              <header class="card-header">
                <h6 class="title ta-filtertext">Type of Job </h6>
              </header>
              <div class="filter-content">
                <div class="card-body">
                  <form>
                    <label class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <span class="form-check-label">Mersedes Benz</span>
                    </label>
                    <label class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <span class="form-check-label">Nissan Altima</span>
                    </label>
                    <label class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <span class="form-check-label">Another Brand</span>
                    </label>
                  </form>
                </div>
              </div>
            </article>

            <article class="card-group-item">
              <header class="card-header">
                <h6 class="title ta-filtertext">Choose type </h6>
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
                    <span class="form-check-label">First hand items</span>
                  </label>
                  <label class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadio"
                      value=""
                    />
                    <span class="form-check-label">Brand new items</span>
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
