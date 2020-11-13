import React, { useEffect } from 'react';

import '../styles/NewsletterSignup.css';

function NewsletterSignupContact() {
  return (
    <div className="fd-ef-5f63194fbf43d86374bfa2ea">
      <div className="ff__root">
        <div className="ff__container">
          <form className="ff__form p-0" action="https://form.flodesk.com/submit" method="post" data-form="fdv2">
            <h3 className="ff__title">
              <div />
            </h3>
            <div className="ff__subtitle">
              <div />
            </div>
            <div className="ff__fields w-100">
              <input type="text" name="name" value="" style={{ display: 'none' }} />
              <input type="hidden" name="submitToken" value="2956704bfedb69dde384ab642226dc345e7e216b08f39d792ef8039bf7f7da6f615da6e34d67b9c429d81f92b62fa93e4a788e7f2c2abd6a0470eb02a607e6a40166cedc7ce96d5f0b8a999234ebde18195efba4c0c37b8ec3271588c456397b" />
              <div className="ff__grid">

                <div className="ff__cell">
                  <div className="fd-form-group">
                    <input className="fd-form-control ff__control" type="text" name="firstName" placeholder="First name" />
                  </div>
                </div>

                <div className="ff__cell">
                  <div className="fd-form-group">
                    <input className="fd-form-control ff__control" type="text" name="email" placeholder="Email address" />
                  </div>
                </div>
                <div className="ff__footer">
                  <button type="submit" className="fd-btn ff__button w-100 btn btn-lg" data-form-el="submit">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
            <div className="fd-success ff__success" data-form-el="success">
              <p>Thank you for subscribing!</p>
            </div>
            <div className="fd-error ff__error" data-form-el="error" />
          </form>
        </div>
      </div>

      <img height="1" width="1" style={{ display: 'none' }} src="https://t.flodesk.com/utm.gif?r=5f63194fbf43d86374bfa2ea" />
      <script src="https://assets.flodesk.com/form.js?v=1600330257763" />
    </div>

  );
}

export default NewsletterSignupContact;
