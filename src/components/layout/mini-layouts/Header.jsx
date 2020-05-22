import React from "react";
import logo from "../../../img/brand.jpg";

import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
                <ul>
                  <li>
                    <Link to="#">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
                <Link to="tel:+953 012 3654 896">
                  <span className="lnr lnr-phone-handset"></span>{" "}
                  <span className="text">+953 012 3654 896</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <Link to="index.html">
                <img
                  src={logo}
                  alt=""
                  title="logo"
                  style={{ width: "12.9rem" }}
                />
              </Link>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/log-in">Log in</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>

                {/* <li className="menu-has-children">
                  <Link to="">Blog</Link>
                  <ul>
                    <li>
                      <Link to="blog-home.html">Blog Home</Link>
                    </li>
                    <li>
                      <Link to="blog-single.html">Blog Single</Link>
                    </li>
                  </ul>
                </li> */}
                {/* <li className="menu-has-children">
                  <Link to="">Pages</Link>
                  <ul>
                    <li>
                      <Link to="course-details.html">Course Details</Link>
                    </li>
                    <li>
                      <Link to="event-details.html">Event Details</Link>
                    </li>
                    <li>
                      <Link to="elements.html">Elements</Link>
                    </li>
                    <li className="menu-has-children">
                      <Link to="">Level 2 </Link>
                      <ul>
                        <li>
                          <Link to="#">Item One</Link>
                        </li>
                        <li>
                          <Link to="#">Item Two</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li> */}
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
