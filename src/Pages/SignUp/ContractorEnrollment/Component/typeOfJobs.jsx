import React, { Component } from "react";

export default class typeOfJobs extends Component {
  render() {
    return (
      <div>
        <section id="most-popular-projects" class="home-cat-test-2">
          <div class="row">
            <div class="col twelvecol">
              <h2 class="t-header-secondary">Most Popular Projects</h2>
              <ul class="category-list">
                <li>
                  <a href="/category.Kitchen.13001.html" data-oid="-13001">
                    <span class="icon-container">
                      <i class="icon icon_alt_kitchen"></i>
                    </span>
                    Kitchen Remodel
                  </a>
                </li>

                <li>
                  <a href="/category.Bathroom.13002.html" data-oid="-13002">
                    <span class="icon-container">
                      <i class="icon icon_alt_bathrooms"></i>
                    </span>
                    Bathroom Remodel
                  </a>
                </li>

                <li>
                  <a
                    href="/category.Heating-Cooling.10211.html"
                    data-oid="-10211"
                  >
                    <span class="icon-container">
                      <i class="icon icon_alt_heating_furnace_systems"></i>
                    </span>
                    Heating Cooling
                  </a>
                </li>

                <li>
                  <a href="/category.Flooring.10208.html" data-oid="-10208">
                    <span class="icon-container">
                      <i class="icon icon_alt_flooring_carpet"></i>
                    </span>
                    Flooring Hardwood
                  </a>
                </li>

                <li>
                  <a href="/category.Windows-Doors.10220.html">
                    <span class="icon-container">
                      <i class="icon icon_alt_windows"></i>
                    </span>
                    Windows Doors
                  </a>
                </li>
                <li>
                  <a
                    href="/category.Roofing-Siding-Gutters.10217.html"
                    data-oid="-10217"
                  >
                    <span class="icon-container">
                      <i class="icon icon_alt_roofing"></i>
                    </span>
                    Roofing Gutters
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
