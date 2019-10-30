import React from "react";
import "./css/Hiw.scss";

const HowItWorks = () => {
  return (
    <section className="ovbg">
      <div className="container">
        <div className="row">
          <div className="mt-5 mx-auto">
            <div className="hiw-col hiw-title">
              <h2>HOW IT WORKS</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mb-5 mx-auto">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="hiw-col center-title hiw-subtitle">
                <h5>Here's 3 Simple Steps of How it Works</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card-deck">
          <div className="col-md-4 col-sm-12">
            <div className="card border-0 ovbg">
              <div className="remo"></div>
              <div className="card-img-top mx-auto step-1" alt="...">
                {" "}
              </div>
              <div className="card-body">
                <h5 className="card-title center-title hiw-col">
                  Post your Job with Budget
                </h5>
                <p className="card-text center-text hiw-col">
                  Hey we get it. Stop paying Ridiculus rates and get the job
                  done with a budget you can afford.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card border-0 ovbg">
              <div className="card-img-top mx-auto step-2" alt="...">
                {" "}
              </div>
              <div className="card-body">
                <h5 className="card-title center-title hiw-col">Accept Bid</h5>
                <p className="card-text center-text hiw-col">
                  We have great partners. You choose the best company that fits
                  your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card border-0 ovbg">
              <div className="card-img-top mx-auto step-3" alt="...">
                {" "}
              </div>
              <div className="card-body">
                <h5 className="card-title center-title hiw-col">
                  Complete Job
                </h5>
                <p className="card-text center-text hiw-col">
                  Contractor comes and complete job. All we ask is that you
                  leave a review for the next customer.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
