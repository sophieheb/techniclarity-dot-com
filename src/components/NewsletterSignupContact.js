import React from 'react';

import '../styles/NewsletterSignup.css';

function NewsletterSignupContact() {
  return (
    <div className="fd-ef-5f630c94692a71f60a04364d">
      <div className="ff__root">
        <div className="ff__container">
          <form className="ff__form" action="https://form.flodesk.com/submit" method="post" data-form="fdv2">
            <h3 className="ff__title">
              <div />
            </h3>
            <div className="ff__subtitle">
              <div />
            </div>
            <div className="ff__fields">
              <input type="text" name="name" readOnly value="" style={{ display: 'none' }} />
              <input type="hidden" name="submitToken" readOnly value="2956704bfedb69dde384ab642226dc345e7e216b08f39d792ef8039bf7f7da6f615da6e34d67b9c429d81f92b62fa93e7a20e6008faffd2db9106498ec24b18ca3f795825f9d252af0b9933619dddc10fc5edf2378397403a0d2f9bef9aa9924" />
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
                  <button type="submit" className="fd-btn ff__button btn-lg" data-form-el="submit">
                    Submit
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

      <img height="1" width="1" style={{ display: 'none' }} src="https://t.flodesk.com/utm.gif?r=5f630c94692a71f60a04364d" />
      <script src="https://assets.flodesk.com/form.js?v=1600327797311" />
    </div>

  );
}

export default NewsletterSignupContact;
