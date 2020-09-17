import React from 'react';
import {MailIcon} from '@primer/octicons-react'
import {
  useLocation
} from "react-router-dom";

import woman from '../assets/woman-contact.svg'
import greenDiamond from '../assets/green-diamond.svg'

import TheHandbook from '../components/TheHandbook'
import Instagram from '../components/Instagram'

import NewsletterSignupContact from '../components/NewsletterSignupContact'

function Contact() {
  let location = useLocation();

  console.log(location.hash)
  return (
    <>
     <div 
      className={`container-fluid position-relative p-5 mt-5 d-flex align-items-center`}
    >
      <div className="col-6">
        <h2 className="text-center">Contact</h2>
        <h1 className="text-center">Let's have a chat</h1>
        <div className="row d-flex align-items-center justify-content-center">
        <div className='col-6 p-5 '>
          <h2 className="text-center">Media Enquiries</h2>
          <p className="text-center">press@techniclarity.co</p>
          <div className="text-center">
            <a href="mailto:press@techniclarity.co">
            <MailIcon size={36}/>
            </a>
          </div>
        </div>
        <div className='col-6 p-5 '>
          <h2 className="text-center">Work together</h2>
          <p className="text-center">partnerships@techniclarity.co</p>
          <div className="text-center">
            <a href="mailto:partnerships@techniclarity.co">
            <MailIcon size={36}/>
            </a>
          </div>
        </div>
        <div className='col-6 p-5 '>
          <h2 className="text-center">Everything else</h2>
          <p className="text-center">hello@techniclarity.co</p>
          <div className="text-center">
            <a href="mailto:hello@techniclarity.co">
            <MailIcon size={36}/>
            </a>
          </div>
        </div>
      </div>
      </div>
      <div className="col-6 h-100 position-relative d-flex justify-content-center align-items-center">
        <img
        src={greenDiamond}
        alt="Green diamond background"
        className={`w-100 `}
        />
        <img
          src={woman}
          alt="Line drawing of a woman"
          className={`h-100 position-absolute`}
        />
      </div>
    </div>

    <a name="newsletter-signup">
      <TheHandbook newsletterSignUp={<NewsletterSignupContact/>} signedUp={location.hash === '#newsletter-signup' ? true : false}/>
    </a>
    <Instagram />
    </>
  );
}

export default Contact;
