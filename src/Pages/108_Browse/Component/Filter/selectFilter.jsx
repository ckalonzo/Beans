import React, { Component } from "react";

export default class SelectFilter extends Component {
  render() {
    return (
      <div>
        <aside className="col-sm-12">
          <div className="card">
            <article className="card-group-item">
              <header className="card-header">
                <h6 className="title ta-filtertext">Type of Job </h6>
              </header>
              <div className="filter-content">
                <div className="card-body">
                  <form>
                    <label className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <span className="form-check-label">Junk Removal</span>
                    </label>
                    <label className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <span className="form-check-label">Lawn Care</span>
                    </label>
                    <label className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <span className="form-check-label">Another Brand</span>
                    </label>
                  </form>
                </div>
              </div>
            </article>
          </div>
        </aside>
      </div>
    );
  }
}
