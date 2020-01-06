import React from "react";
import "./css/Join.scss";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <section>
      <div className="fluid-container">
        <div className="row no-gutters ">
          <div className="col-md-6 col-sm-12 panel join-panel">
            <div className="col-12">
              <div className="mt-5">
                <div className="col-12 mx-auto -ta_pl-0 join-title-outter">
                  <h2 className="join-title">Reasons Why You Should Join</h2>
                </div>
                <div className="mx-auto join-copy">
                  <p>Millions of people need tasks done everyday.</p>
                  <p>
                    At vero eos et accusamus et iusto odio dignis ducimus qui
                    blanditiis praesentium volupta deleniti quas molestias
                    excepturi sint occaecati cupiditate non est laborum.
                  </p>
                </div>
              </div>
              <div className="col-9 offset-1 start-posting-today-button">
                <p>
                  <Link
                    className="btn btn-primary btn-lg spt-btn"
                    to="/JobPosts/PostJob"
                    role="button"
                  >
                    Start Posting Today!
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="img-join" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
