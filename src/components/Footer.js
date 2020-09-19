import React from 'react';
import {
useLocation
} from "react-router-dom";

import '../styles/Footer.css'
import NewsletterSignupFooter from './NewsletterSignupFooter'
import textLogo from '../assets/textLogoWhite.svg'
import symbolLogo from '../assets/symbol-logo.png'
import facebookLogo from '../assets/facebookLogoWhite.svg'
import instagramLogo from '../assets/instagramLogoWhite.svg'

function Footer() {
  let location = useLocation();
  
  return (
    <div className="container-fluid mb-5 bg-green w-100 p-5">
      <div className="row">
        <div className="col-lg-4 col-12 p-xl-5 py-4">
          <img
            src={textLogo}
            alt="Techniclarity logo"
            className="img-fluid pb-3 pt-2"
          />
          <p className="text-white">Techniclarity delivers education that lifts the mist surrounding technology so you can get crystal clear clarity for your startup. Spend some time with us and leave ready to fulfil your potential, confident and in control of your tech product.</p>
          <div className="d-flex">
            <a href="https://instagram.com/the.techniclarity">
            <img
              src={instagramLogo}
              alt="Instagram logo"
              className="img-fluid d-inline-block pr-2"
            />
            </a>
            <a href="https://facebook.com/the.techniclarity">
            <img
              src={facebookLogo}
              alt="Facebook logo"
              className="img-fluid d-inline-block pl-2 "
            />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-12 p-xl-5 py-4">
          <h3 className="text-white">The <span>Handbook</span></h3>
          <p className="text-white">Sign up to our newsletter for high-quality info that stops you feeling like a fraud when you're running your startup.</p>
          <a name="footer-newsetter-signup">
          {location.hash === '#newsletter-signup' ?  <h2 className="text-white">Thanks for signing up</h2>  : <NewsletterSignupFooter/>}
            
          </a>
        </div>
        <div className="col-lg-4 col-12 p-xl-5 py-4">
          <div className="row">
            <div className="col-6 col-sm-4 col-md-2 col-lg-12">
              <img
                src={symbolLogo}
                alt="Techniclarity logo"
                className="w-lg-25 w-xs-100 mb-2 img-fluid"
              />
            </div>
            <div className="col-lg-12 col-6">
              <p className="text-white m-0">	&#169; Techniclarity 2020</p>
              <p className="text-white m-0">Site design by <a className="footerLink" href="https://www.chloeford.co.uk/">Chloe Ford</a></p>
              <p className="text-white">Built by <a className="footerLink" href="https://sophieheb.com">Sophie Hebdidge</a></p>
              <p className="text-white"><a className="footerLink" href="/terms-and-conditions">Terms and Conditions</a> & <a className="footerLink" href="privacy-policy">Privacy Policy</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
