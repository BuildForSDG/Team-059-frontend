import React from "react";

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
                    <Link href="#">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i class="far fa-dribbble"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i class="far fa-behance"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
                <Link href="tel:+953 012 3654 896">
                  <span className="lnr lnr-phone-handset"></span>{" "}
                  <span class="text">+953 012 3654 896</span>
                </Link>
                <Link href="mailto:support@colorlib.com">
                  <span className="lnr lnr-envelope"></span>{" "}
                  <span class="text">support@colorlib.com</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <Link href="index.html">
                <img src="img/logo.png" alt="" title="" />
              </Link>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <Link href="index.html">Home</Link>
                </li>
                <li>
                  <Link href="about.html">About</Link>
                </li>
                <li>
                  <Link href="courses.html">Courses</Link>
                </li>
                <li>
                  <Link href="events.html">Events</Link>
                </li>
                <li>
                  <Link href="gallery.html">Gallery</Link>
                </li>
                <li className="menu-has-children">
                  <Link href="">Blog</Link>
                  <ul>
                    <li>
                      <Link href="blog-home.html">Blog Home</Link>
                    </li>
                    <li>
                      <Link href="blog-single.html">Blog Single</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-has-children">
                  <Link href="">Pages</Link>
                  <ul>
                    <li>
                      <Link href="course-details.html">Course Details</Link>
                    </li>
                    <li>
                      <Link href="event-details.html">Event Details</Link>
                    </li>
                    <li>
                      <Link href="elements.html">Elements</Link>
                    </li>
                    <li className="menu-has-children">
                      <Link href="">Level 2 </Link>
                      <ul>
                        <li>
                          <Link href="#">Item One</Link>
                        </li>
                        <li>
                          <Link href="#">Item Two</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="contact.html">Contact</Link>
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
