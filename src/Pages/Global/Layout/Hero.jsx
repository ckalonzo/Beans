import React from "react";
import "./css/Hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="tw-Homehero">
      <div className="jumbotron herosection">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-10 col-md-8 col-sm-7 offset-lg-1">
              <div className="mt-2">
                <h1 className="font-weight-bold hero-title">Trucked Away</h1>
                <div className=" font-weight-bold hero-copy">
                  Your # 1 site for Home Tasks.
                </div>
                <div className=" font-weight-bold hero-copy mb-5">
                  Post your job with your Budget Today.
                </div>
                <p>
                  <Link
                    className="btn btn-primary btn-lg pj-btn"
                    to="/JobPosts/PostJob"
                    role="button"
                  >
                    Post A Job!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
