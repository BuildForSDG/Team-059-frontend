import React from "react";
import { Link } from "react-router-dom";

const SearchCourse = () => {
  return (
    <section className="search-course-area relative">
      <div className="overlay overlay-bg"></div>
      <div className="container">
        <div className="row justify-content-between align-items-center p-3">
          <div className="col-lg-6 col-md-6 search-course-left p-5">
            <h1 className="text-white">
              Get reduced fee <br />
              during this Summer!
            </h1>
            <p style={{ color: "grey" }}>
              inappropriate behavior is often laughed off as “boys will be
              boys,” women face higher conduct standards especially in the
              workplace. That’s why it’s crucial that, as women, our behavior on
              the job is beyond reproach.
            </p>
            <div className="row details-content">
              <div className="col single-detials">
                <span className="lnr lnr-graduation-hat"></span>
                <Link href="#">
                  <h4>Expert Instructors</h4>
                </Link>
                <p style={{ color: "grey" }}>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
              <div className="col single-detials">
                <span className="lnr lnr-license"></span>
                <Link href="#">
                  <h4>Certification</h4>
                </Link>
                <p style={{ color: "grey" }}>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 search-course-right section-gap"></div>
        </div>
      </div>
    </section>
  );
};

export default SearchCourse;
