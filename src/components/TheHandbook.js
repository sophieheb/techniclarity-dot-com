import React from 'react';
import PropTypes from 'prop-types';
import handGlobe from '../assets/hand-globe.webp';
import handGlobePng from '../assets/hand-globe.png';

function TheHandbook({ newsletterSignUp, signedUp }) {
  let signUpBox;

  if (signedUp) {
    signUpBox = <h2 className="text-white">Thanks for signing up</h2>;
  } else {
    signUpBox = newsletterSignUp;
  }

  return (

    <div
      className="bg-cyan p-4 container-fluid position-relative d-flex align-items-center"
    >
      <div className="container py-5">
        <div className="row align-content-center justify-content-center">

          <div
            className="col-lg-6 text-center my-auto"
          >
            <h2 className="text-white">Newsletter</h2>
            <h1 className="text-white">
              The
              {' '}
              <span>handbook</span>
            </h1>
            <p className="text-white">
              You don’t need more advice (or inbox clutter), you just need
              high-quality info that stops you feeling like a fraud
              when you’re running your startup.
            </p>
            {signUpBox}
          </div>
          <picture className="col-lg-6 my-auto text-center h-50 w-100">
            <source srcSet={handGlobe} type="image/webp" />
            <img
              src={handGlobePng}
              alt="Line drawing of a hand holding a globe"
              className=" img-fluid"
            />
          </picture>

        </div>
      </div>
    </div>

  );
}

TheHandbook.propTypes = {
  newsletterSignUp: PropTypes.element.isRequired,
  signedUp: PropTypes.bool.isRequired,
};

export default TheHandbook;
