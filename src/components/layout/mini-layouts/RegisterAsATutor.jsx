import React from "react";
import { Link } from "react-router-dom";

const RegisterAsATutor = () => {
  return (
    <section class="cta-one-area relative section-gap">
      <div class="container">
        <div class="overlay overlay-bg"></div>
        <div class="row justify-content-center">
          <div class="wrap">
            <h1 class="text-white">Become an instructor</h1>
            <p>
              There is a moment in the life of any aspiring astronomer that it
              is time to buy that first telescope. It’s exciting to think about
              setting up your own viewing station whether that is on the deck.
            </p>
            <Link class="primary-btn wh" to="#">
              Apply for the post
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterAsATutor;
