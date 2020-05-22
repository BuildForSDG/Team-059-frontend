import React from "react";
import { Link } from "react-router-dom";

const UserRatings = () => {
  return (
    <>
      <section className="review-area section-gap relative">
        <div className="overlay overlay-bg"></div>
        <div className="container">
          <h1 className="text-center mb-3">Ratings And Reviews</h1>
          <div className="row">
            <div className="active-review-carusel">
              <div className="single-review item">
                <div className="title justify-content-start d-flex">
                  <h4>Fannie Rowe</h4>

                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
                <p>
                  Accessories Here you can find the best computer accessory for
                  your laptop, monitor, printer, scanner, speaker. Here you can
                  find the best computer accessory for your laptop, monitor,
                  printer, scanner, speaker.
                </p>
              </div>
              <div className="single-review item">
                <div className="title justify-content-start d-flex">
                  <h4>Hulda Sutton</h4>

                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
                <p>
                  Accessories Here you can find the best computer accessory for
                  your laptop, monitor, printer, scanner, speaker. Here you can
                  find the best computer accessory for your laptop, monitor,
                  printer, scanner, speaker.
                </p>
              </div>
              <div className="single-review item">
                <div className="title justify-content-start d-flex">
                  <h4>Fannie Rowe</h4>

                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
                <p>
                  Accessories Here you can find the best computer accessory for
                  your laptop, monitor, printer, scanner, speaker. Here you can
                  find the best computer accessory for your laptop, monitor,
                  printer, scanner, speaker.
                </p>
              </div>
              <div className="single-review item">
                <div className="title justify-content-start d-flex">
                  <h4>Hulda Sutton</h4>

                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
                <p>
                  Accessories Here you can find the best computer accessory for
                  your laptop, monitor, printer, scanner, speaker. Here you can
                  find the best computer accessory for your laptop, monitor,
                  printer, scanner, speaker.
                </p>
              </div>
              <div className="single-review item">
                <div className="title justify-content-start d-flex">
                  <h4>Fannie Rowe</h4>

                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
                <p>
                  Accessories Here you can find the best computer accessory for
                  your laptop, monitor, printer, scanner, speaker. Here you can
                  find the best computer accessory for your laptop, monitor,
                  printer, scanner, speaker.
                </p>
              </div>
              <div className="single-review item">
                <div className="title justify-content-start d-flex">
                  <h4>Hulda Sutton</h4>

                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
                <p>
                  Accessories Here you can find the best computer accessory for
                  your laptop, monitor, printer, scanner, speaker. Here you can
                  find the best computer accessory for your laptop, monitor,
                  printer, scanner, speaker.
                </p>
              </div>
              <div className="single-review item">
                <img src="img/r1.png" alt="" />
                <div className="title justify-content-start d-flex">
                  <h4>Fannie Rowe</h4>

                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
                <p>
                  Accessories Here you can find the best computer accessory for
                  your laptop, monitor, printer, scanner, speaker. Here you can
                  find the best computer accessory for your laptop, monitor,
                  printer, scanner, speaker.
                </p>
              </div>
              <div className="single-review item">
                <div className="title justify-content-start d-flex">
                  <h4>Hulda Sutton</h4>

                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
                <p>
                  Accessories Here you can find the best computer accessory for
                  your laptop, monitor, printer, scanner, speaker. Here you can
                  find the best computer accessory for your laptop, monitor,
                  printer, scanner, speaker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-two-area mt-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 cta-left">
              <h1>Not Yet Satisfied with our Trend?</h1>
            </div>
            <div className="col-lg-4 cta-right">
              <Link className="primary-btn wh" to="/blog">
                view our blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserRatings;
