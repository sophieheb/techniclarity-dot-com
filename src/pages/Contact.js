import React from 'react';
import { MailIcon } from '@primer/octicons-react';
import {
  useLocation,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import woman from '../assets/woman-contact.svg';
import greenDiamond from '../assets/green-diamond.svg';

import TheHandbook from '../components/TheHandbook';
import Instagram from '../components/Instagram';

import NewsletterSignupContact from '../components/NewsletterSignupContact';

function Contact() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Contact | Techniclarity</title>
        <meta name="description" content="Get in touch to find out about your first steps to a tech startup." />
        <meta property="og:url" content="techniclarity.co/contact" />
        <meta property="og:description" content="Get in touch to find out about your first steps to a tech startup." />
        <meta property="og:title" content="Contact | Techniclarity" />
        <meta property="og:image" content={woman} />
        <meta name="twitter:title" content="Contact | Techniclarity" />
        <meta name="twitter:description" content="Get in touch to find out about your first steps to a tech startup." />
        <meta name="twitter:image" content={woman} />
        <meta name="twitter:image:alt" content="Line drawing" />
      </Helmet>
      <div
        className="container-fluid position-relative p-5 mt-5 d-flex align-items-center"
      >
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2 className="text-center">Contact</h2>
            <h1 className="text-center">Let's have a chat</h1>
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-sm-6 col-12 p-5 ">
                <h2 className="text-center">Media Enquiries</h2>
                <a href="mailto:press@techniclarity.co?subject=Media Enquiry">
                  <p className="text-center">press @techniclarity.co</p>
                </a>
                <div className="text-center">
                  <a href="mailto:press@techniclarity.co?subject=Media Enquiry">
                    <MailIcon size={36} />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-12 p-5 ">
                <h2 className="text-center">Work together</h2>
                <a href="mailto:partnerships@techniclarity.co?subject=Let's work together">
                  <p className="text-center">partnerships @techniclarity.co</p>
                </a>
                <div className="text-center">
                  <a href="mailto:partnerships@techniclarity.co?subject=Let's work together">
                    <MailIcon size={36} />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-12 p-5 ">
                <h2 className="text-center">Everything else</h2>
                <a href="mailto:hello@techniclarity.co?subject=Techniclarity Website Enquiry">
                  <p className="text-center">hello @techniclarity.co</p>
                </a>
                <div className="text-center">
                  <a href="mailto:hello@techniclarity.co?subject=Techniclarity Website Enquiry">
                    <MailIcon size={36} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 h-100 position-relative d-flex justify-content-center align-items-center">
            <img
              src={greenDiamond}
              alt="Green diamond background"
              className="w-100 "
            />
            <img
              src={woman}
              alt="Line drawing of a woman"
              className="h-100 position-absolute"
            />
          </div>
        </div>
      </div>

      <a name="newsletter-signup">
        <TheHandbook newsletterSignUp={<NewsletterSignupContact />} signedUp={location.hash === '#newsletter-signup'} />
      </a>
      <Instagram />
    </>
  );
}

export default Contact;
