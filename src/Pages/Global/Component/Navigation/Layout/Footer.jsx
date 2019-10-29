import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="sticky-footer">
      <div className="container">
        <div className="row text-center d-flex justify-content-center pt-5 mb-3">
          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase font-weight-bold">
              <Link className="ov-color" to="/Membership">
                Membership
              </Link>
            </h6>
          </div>
          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase font-weight-bold">
              <Link className="ov-color" to="/aboutus">
                About Us
              </Link>
            </h6>
          </div>
          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase font-weight-bold">
              <Link className="ov-color" to="/term-of-use">
                Terms of Use
              </Link>
            </h6>
          </div>
          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase font-weight-bold">
              <Link className="ov-color" to="/Contractor">
                Become a Contractor
              </Link>
            </h6>
          </div>
          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase font-weight-bold">
              <Link className="ov-color" to="/Contact">
                Contact
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
