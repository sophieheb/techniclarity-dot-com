import React, { useEffect, useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import {
  useLocation,
} from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import styles from '../styles/home.module.css';
import cloudTop from '../assets/cloud-1.webp';
import cloudTopPng from '../assets/cloud-1.png';
import cloudLeft from '../assets/cloud-2.webp';
import cloudLeftPng from '../assets/cloud-2.png';
import cloudRight from '../assets/cloud-3.webp';
import cloudRightPng from '../assets/cloud-3.png';
import globe from '../assets/globe.webp';
import globePng from '../assets/globe.png';
import pinkGlobe from '../assets/pink-circle.svg';
import cloudFreebieRight from '../assets/cloud-freebie-right.webp';
import cloudFreebieRightPng from '../assets/cloud-freebie-right.png';
import cloudFreebieLeft from '../assets/cloud-freebie-left.webp';
import cloudFreebieLeftPng from '../assets/cloud-freebie-left.png';
import glossary from '../assets/glossary.webp';
import glossaryPng from '../assets/glossary.png';

import startupsmag from '../assets/press/startupsmag.png';
import signify from '../assets/press/signify.png';
import techround from '../assets/press/techround.png';

import useOnScreen from '../shared/onScreen';

import Instagram from '../components/Instagram';
import Services from '../components/Services';
import TheHandbook from '../components/TheHandbook';

import NewsletterSignupHome from '../components/NewsletterSignupHome';

function Home() {
  const location = useLocation();

  const [loaded, setLoaded] = useState(false);
  const [glossaryHasBeenOnScreen, setGlossaryHasBeenOnScreen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  const ref = useRef();
  const glossaryOnScreen = useOnScreen(ref, isMobile ? '-100px' : '-300px');

  useEffect(() => {
    if (glossaryOnScreen && !glossaryHasBeenOnScreen) {
      setGlossaryHasBeenOnScreen(true);
    }
  }, [glossaryOnScreen, glossaryHasBeenOnScreen]);

  return (
    <>
      <div
        className={`container-fluid position-relative vh-100 d-flex align-items-lg-center align-items-top overflow-hidden ${styles.containerTop}`}
      >
        <picture>
          <source srcSet={cloudTop} type="image/webp" />
          <img
            src={cloudTopPng}
            alt="Cloud Background"
            className={`position-absolute h-25  ${loaded ? styles.cloudTopLoaded : styles.cloudTop}`}
          />
        </picture>
        <picture>
          <source srcSet={cloudRight} type="image/webp" />
          <img
            src={cloudRightPng}
            alt="Cloud Background"
            className={`position-absolute h-25  d-none d-lg-block ${loaded ? styles.cloudMiddleLoaded : styles.cloudMiddle}`}
          />
        </picture>
        <picture>
          <source srcSet={cloudLeft} type="image/webp" />
          <img
            src={cloudLeftPng}
            alt="Cloud Background"
            className={`position-absolute h-25 ${loaded ? styles.cloudBottomLoaded : styles.cloudBottom}`}
          />
        </picture>
        <picture>
          <source srcSet={globe} type="image/webp" />
          <img
            src={globePng}
            alt="Globe Background"
            className={`position-absolute h-100 ${styles.globe}`}
          />
        </picture>

        <img
          src={pinkGlobe}
          alt="Globe Background"
          className={`position-absolute h-100 ${styles.pinkGlobe}`}
        />
        <div
          className="col-sm-9 col-lg-7 col-xl-6 ml-lg-5 pl-lg-5 pt-4 p-2 col-12"
        >
          <h1>
            Stop dreaming about your startup. Learn just enough tech to
            {' '}
            <span>make it happen.</span>
          </h1>
          <p>
            We develop female founders by teaching them the tech know-how they need
            to lead a startup to success.
          </p>
        </div>
      </div>
      <div
        ref={ref}
        className="bg-cyan p-4 container-fluid position-relative d-flex align-items-center overflow-hidden"
      >
        <picture className={`position-absolute ${glossaryHasBeenOnScreen || glossaryOnScreen ? styles.cloudFreebieLeftLoaded : styles.cloudFreebieLeft} h-xs-25 h-lg-100  h-sm-50  align-self-lg-center align-self-end `}>
          {/* h-xs-25 h-lg-100  h-sm-50 */}
          <source srcSet={cloudFreebieLeft} type="image/webp" />
          <img
            src={cloudFreebieLeftPng}
            alt="Cloud Background"
            className="h-100"
          />
        </picture>
        <picture className={`position-absolute  h-xs-25 h-lg-100 h-sm-50  align-self-lg-center align-self-end ${glossaryHasBeenOnScreen || glossaryOnScreen ? styles.cloudFreebieRightLoaded : styles.cloudFreebieRight}`}>
          <source srcSet={cloudFreebieRight} type="image/webp" />
          <img
            src={cloudFreebieRightPng}
            alt="Cloud Background"
            className="h-100"
          />
        </picture>

        <div className="container py-5">
          <div className="row justify-content-center">
            <div
              className="col-lg-5 py-5 order-lg-1 text-center my-auto"
            >
              <h2 className="text-white">Free!</h2>
              <h1 className="text-white">
                The
                {' '}
                <span>Glossary</span>
                {' '}
                of Tech Lingo
              </h1>
              <p className="text-white">All the tech jargon you need to know so that you can chat about your product with ease.</p>
              <Button className="btn-lg col-12 col-lg-9" variant="purple" target="_blank" as="a" href="https://view.flodesk.com/pages/5f4e822801a6b70026d79b01">DOWNLOAD NOW</Button>
            </div>
            <div className="col-lg-4 col-12 order-lg-0 pt-xl-0 pt-4">
              <picture>
                <source srcSet={glossary} type="image/webp" />
                <img
                  src={glossaryPng}
                  alt="Glossary"
                  className="img-fluid"
                />
              </picture>

            </div>
          </div>
        </div>
      </div>
      <Services />

      <a name="newsletter-signup"> { /* eslint-disable-line */ }
        <TheHandbook newsletterSignUp={<NewsletterSignupHome />} signedUp={location.hash === '#newsletter-signup'} />
      </a>

      <div
        className="bg-green p-4 container-fluid position-relative d-flex align-items-center overflow-hidden"
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div
              className="col-lg-5 py-5 order-lg-1 text-center my-auto"
            >
              <h2 className="text-white">Press</h2>
              <h1 className="text-white">
                As
                {' '}
                <span>seen</span>
                {' '}
                in...
              </h1>
            </div>
          </div>
          <div className="row align-content-center justify-content-center">
            <a className="col-lg-2 col-8 col-sm-5 px-2 py-3 my-auto" href="https://startupsmagazine.co.uk/article-mentoring-and-funding-are-only-getting-us-so-far">
              <img src={startupsmag} className="img-fluid" alt="Logo for Startups Magazine" target="_blank" />
            </a>
            <a className="col-lg-2 col-8 col-sm-5 px-5 py-3 my-auto" href="https://www.signifytechnology.com/blog/2020/05/coffee-with-female-founder-of-techniclarity-sophie-hebdidge">
              <img src={signify} className="img-fluid" alt="Logo for Signify Technology" target="_blank" />
            </a>
            <a className="col-lg-2 col-8 col-sm-5 px-5 py-3 my-auto" href="https://techround.co.uk/interviews/sophie-hebdidge-founder-at-techniclarity-helping-aspiring-female-founders-learn-more-about-tech/">
              <img src={techround} className="img-fluid" alt="Logo for Signify Technology" target="_blank" />
            </a>

          </div>
        </div>
      </div>

      <Instagram />

    </>
  );
}

export default Home;
