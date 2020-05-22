import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h4>Top Products</h4>
              <ul>
                <li>
                  <Link to="#">Managed Website</Link>
                </li>
                <li>
                  <Link to="#">Manage Reputation</Link>
                </li>
                <li>
                  <Link to="#">Power Tools</Link>
                </li>
                <li>
                  <Link to="#">Marketing Service</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h4>Quick links</h4>
              <ul>
                <li>
                  <Link to="#">Jobs</Link>
                </li>
                <li>
                  <Link to="#">Brand Assets</Link>
                </li>
                <li>
                  <Link to="#">Investor Relations</Link>
                </li>
                <li>
                  <Link to="#">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h4>Features</h4>
              <ul>
                <li>
                  <Link to="#">Jobs</Link>
                </li>
                <li>
                  <Link to="#">Brand Assets</Link>
                </li>
                <li>
                  <Link to="#">Investor Relations</Link>
                </li>
                <li>
                  <Link to="#">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link to="#">Guides</Link>
                </li>
                <li>
                  <Link to="#">Research</Link>
                </li>
                <li>
                  <Link to="#">Experts</Link>
                </li>
                <li>
                  <Link to="#">Agencies</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h4>Newsletter</h4>
              <p>Stay update with our latest</p>
              <div className="" id="mc_embed_signup">
                <form
                  target="_blank"
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                >
                  <div className="input-group">
                    <input
                      className="form-control"
                      name="EMAIL"
                      placeholder="Enter Email Address"
                      required=""
                      type="email"
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-default" type="submit">
                        <span className="lnr lnr-arrow-right"></span>
                      </button>
                    </div>
                    <div className="info"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom row align-items-center justify-content-between">
          <p className="footer-text m-0 col-lg-6 col-md-12">
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            Copyright &copy;
            {new Date().getFullYear()} All rights reserved | This website is
            made with <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
            <Link to="https://colorlib.com" target="_blank">
              Colorlib
            </Link>
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
          </p>
          <div className="col-lg-6 col-sm-12 footer-social">
            <Link to="#">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-twitter"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
