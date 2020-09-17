import React, {useEffect} from 'react';

import '../styles/NewsletterSignup.css'

function NewsletterSignupHome() {

  return (
<div class="fd-ef-5f490f51c1e8d80026e7fb98">
  <div class="ff__root">
    <div class="ff__container">
      <form class="ff__form" action="https://form.flodesk.com/submit" method="post" data-form="fdv2">
        <h3 class="ff__title">
          <div></div>
        </h3>
        <div class="ff__subtitle">
          <div></div>
        </div>
        <div class="ff__fields">
          <input type="text" name="name" value="" style={{display:'none'}} />
          <input type="hidden" name="submitToken" value="2956704bfedb69dde384ab642226dc345e7e216b08f39d792ef8039bf7f7da6f615da6e34d67b9c429d81f92b62fa93e2fbe1bf3bd6b367e465336b1874b113e3b4bdbb85cf52e97021a2c69af64f1d4b9735ca79c7772c6568b0f6946480031" />
          <div class="ff__grid">

            <div class="ff__cell">
              <div class="fd-form-group">
                <input class="fd-form-control ff__control" type="text" name="firstName" placeholder="First name"/>
              </div>
            </div>

            <div class="ff__cell">
              <div class="fd-form-group">
                <input class="fd-form-control ff__control" type="text" name="email" placeholder="Email address"/>
              </div>
            </div>
            <div class="ff__footer">
              <button type="submit" class="fd-btn ff__button" data-form-el="submit">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <div class="fd-success ff__success" data-form-el="success">
          <p>Thank you for subscribing!</p>
        </div>
        <div class="fd-error ff__error" data-form-el="error"></div>
      </form>
    </div>
  </div>

  <img height="1" width="1" style={{display:'none'}} src="https://t.flodesk.com/utm.gif?r=5f490f51c1e8d80026e7fb98" />
  <script src="https://assets.flodesk.com/form.js?v=1600276197696"></script>
</div>


  );
}

export default NewsletterSignupHome;

