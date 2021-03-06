import React from 'react';
import {
  useLocation,
} from 'react-router-dom';

import '../styles/Footer.css';
import NewsletterSignupFooter from './NewsletterSignupFooter';
import textLogo from '../assets/textLogoWhite.svg';
import symbolLogo from '../assets/symbol-logo.webp';
import symbolLogoPng from '../assets/symbol-logo.png';
import facebookLogo from '../assets/facebookLogoWhite.svg';
import instagramLogo from '../assets/instagramLogoWhite.svg';

function Footer() {
  const location = useLocation();

  return (
    <div className="container-fluid mb-5 bg-green w-100 p-5">
      <div className="row">
        <div className="col-lg-4 col-12 p-xl-5 py-4">
          <img
            src={textLogo}
            alt="Techniclarity logo"
            className="img-fluid pb-3 pt-2"
          />
          <p className="text-white footerText">Techniclarity delivers education that lifts the mist surrounding technology so you can get crystal clear clarity for your startup. Spend some time with us and leave ready to fulfil your potential, confident and in control of your tech product.</p>
          <div className="d-flex">
            <a href="https://instagram.com/the.techniclarity">
              <img
                src={instagramLogo}
                alt="Instagram logo"
                className="d-inline-block pr-2 socialIcon"
              />
            </a>
            <a href="https://facebook.com/the.techniclarity">
              <img
                src={facebookLogo}
                alt="Facebook logo"
                className="d-inline-block pl-2 socialIcon"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-12 p-xl-5 py-4">
          <h3 className="text-white">
            The
            {' '}
            <span>Handbook</span>
          </h3>
          <p className="text-white footerText">
            Sign up to our newsletter for high-quality info that stops
            you feeling like a fraud when you&apos;re running your startup.
          </p>
          <a name="footer-newsletter-signup"> { /* eslint-disable-line */ }
            {location.hash === '#newsletter-signup' ? <h2 className="text-white">Thanks for signing up</h2> : <NewsletterSignupFooter />}

          </a>
        </div>
        <div className="col-lg-4 col-12 p-xl-5 py-4">
          <div className="row">
            <div className="col-6 col-sm-4 col-md-2 col-lg-12">
              <picture>
                <source srcSet={symbolLogo} type="image/webp" />
                <img
                  src={symbolLogoPng}
                  alt="Techniclarity logo"
                  className="w-lg-25 w-xs-100 mb-2 img-fluid"
                />
              </picture>
            </div>
            <div className="col-lg-12 col-6">
              <p className="text-white m-0 footerText">&#169; Techniclarity 2020</p>
              <p className="text-white m-0 footerText">
                Site design by
                {' '}
                <a className="footerLink" href="https://www.chloeford.co.uk/">Chloe Ford</a>
              </p>
              <p className="text-white footerText">
                Built by
                {' '}
                <a className="footerLink" href="https://sophieheb.com">Sophie Hebdidge</a>
              </p>
              <p className="text-white footerText">
                <a className="footerLink" href="/terms-and-conditions">Terms and Conditions</a>
                ,
                {' '}
                <a className="footerLink" href="privacy-policy">Privacy Policy</a>
                {' '}
                &
                {' '}
                <a className="footerLink" href="cookie-policy">Cookie Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
