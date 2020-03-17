import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/app.css';
import styles from '../styles/footer.module.css';

import logo from '../assets/text-logo.png';

const Footer = () => (
  <div>
    <hr className="m-0" />
    <footer className="mt-5 container">
      <div className="row">
        <div className="col-md-2 text-center">
          <img className={`${styles.footerLogo} img-fluid`} src={logo} alt="Logo" />
        </div>
        <div className="col-md-10 align-middle">
          <p className="p-small"> Techniclarity delivers education that lifts the mist surrounding technology so you can get crystal clear clarity for your business. Spend some time with us and leave ready to fulfil your potential, confident that technology is not going to slow you down.</p>
          <nav className="navbar navbar-light background-green navbar-expand-sm">
            <a className="p-2" href="https://www.instagram.com/the.techniclarity/" aria-label="Instagram">
              <i className="fa fa-2x fa-instagram" />
            </a>
            <a className="p-2" href="https://www.facebook.com/the.techniclarity/" aria-label="Facebook">
              <i className="fa fa-2x fa-facebook" />
            </a>
            <div className="navbar-nav ml-auto">
              <Link className="nav-item nav-link" to="termsAndConditions">Terms and Conditions</Link>
              <Link className="nav-item nav-link" to="privacy">Privacy Policy</Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  </div>

);

export default Footer;
