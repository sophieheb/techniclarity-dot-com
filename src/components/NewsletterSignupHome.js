import React from 'react';

import '../styles/NewsletterSignup.css';

function NewsletterSignupHome() {
  return (
    <div className="fd-ef-5f490f51c1e8d80026e7fb98">
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
              <input type="hidden" name="submitToken" readOnly value="2956704bfedb69dde384ab642226dc345e7e216b08f39d792ef8039bf7f7da6f615da6e34d67b9c429d81f92b62fa93e2fbe1bf3bd6b367e465336b1874b113e3b4bdbb85cf52e97021a2c69af64f1d4b9735ca79c7772c6568b0f6946480031" />
              <div className="ff__grid">

                <div className="ff__cell col-12 mw-100">
                  <div className="fd-form-group">
                    <input className="fd-form-control ff__control" type="text" name="firstName" placeholder="First name" />
                  </div>
                </div>

                <div className="ff__cell col-12 mw-100">
                  <div className="fd-form-group">
                    <input className="fd-form-control ff__control" type="text" name="email" placeholder="Email address" />
                  </div>
                </div>
                <div className="ff__footer col-12 mw-100">
                  <button type="submit" className="fd-btn ff__button" data-form-el="submit">
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

      <img height="1" width="1" style={{ display: 'none' }} alt="" src="https://t.flodesk.com/utm.gif?r=5f490f51c1e8d80026e7fb98" />
      <script src="https://assets.flodesk.com/form.js?v=1600276197696" />
    </div>

  );
}

export default NewsletterSignupHome;
