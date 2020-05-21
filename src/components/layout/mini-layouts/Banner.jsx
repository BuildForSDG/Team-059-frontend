import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section className="banner-area relative" id="home">
        <div className="overlay overlay-bg"></div>
        <div className="container">
          <div
            className="row fullscreen d-flex align-items-center justify-content-between"
            style={{ height: "678px" }}
          >
            <div clasName="banner-content col-lg-9 col-md-12">
              <h1
                className="text-uppercase"
                /*  style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  marginTop: "10px",
                  color: "white",
                }} */
              >
                We Ensure better education for a better world.
              </h1>
              <p className="pt-10 pb-10" id="text">
                In the history of modern astronomy, there is probably no one
                greater leap forward than the building and launch of the space
                telescope known as the Hubble.
              </p>
              <Link href="#" class="primary-btn text-uppercase">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class="feature-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="single-feature">
                <div class="title">
                  <h4>Learn Online Courses</h4>
                </div>
                <div class="desc-wrap">
                  <p>
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology.
                  </p>
                  <Link href="#">Join Now</Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-feature">
                <div class="title">
                  <h4>No.1 of universities</h4>
                </div>
                <div class="desc-wrap">
                  <p>
                    For many of us, our very first experience of learning about
                    the celestial bodies begins when we saw our first.
                  </p>
                  <a href="#">Join Now</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-feature">
                <div class="title">
                  <h4>Huge Library</h4>
                </div>
                <div class="desc-wrap">
                  <p>
                    If you are a serious astronomy fanatic like a lot of us are,
                    you can probably remember that one event.
                  </p>
                  <a href="#">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
