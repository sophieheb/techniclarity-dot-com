import React from 'react';

import '../styles/NewsletterSignup.css'

function NewsletterSignup() {
  return (

    <div className="fd-ef-5f490f51c1e8d80026e7fb98">
  
    <div className="ff__root">
      <div className="ff__container">
        <form className="ff__form p-0" action="https://form.flodesk.com/submit" data-form-id="5f490f51c1e8d80026e7fb98" data-form-status="initialized" target="_blank" method="post" data-form="fdv2">
          <div className="ff__fields">
            <input type="text" name="name" value="" style={{display: 'none'}} />
            <input type="hidden" name="submitToken" value="2956704bfedb69dde384ab642226dc345e7e216b08f39d792ef8039bf7f7da6f615da6e34d67b9c429d81f92b62fa93e2fbe1bf3bd6b367e465336b1874b113e3b4bdbb85cf52e97021a2c69af64f1d4b9735ca79c7772c6568b0f6946480031" />
            <div className="ff__grid">
  
              <div className="ff__cell">
                <div className="fd-form-group">
                  <input className="fd-form-control text-white ff__control" type="text" name="firstName" placeholder="First name" />
                </div>
              </div>
  
              <div className="ff__cell">
                <div className="fd-form-group">
                  <input className="fd-form-control ff__control"  type="text" name="email" placeholder="Email address" />
                </div>
              </div>
              <div className="ff__footer">
                <button type="submit" className="fd-btn ff__button px-5 py-3" data-form-el="submit">
                  <span id="ff__button">Submit</span>
                </button>
              </div>
            </div>
          </div>
          <div className="fd-success ff__success" data-form-el="success">
            <p>Thank you for subscribing!</p>
          </div>
          <div className="fd-error ff__error" data-form-el="error"></div>
        </form>
      </div>
    </div>
  
    <img height="1" width="1" style={{display:'none'}} src="https://t.flodesk.com/utm.gif?r=5f490f51c1e8d80026e7fb98" />
    <script src="https://assets.flodesk.com/form.js?v=1598624209353"></script>
  </div>

  );
}

export default NewsletterSignup;

