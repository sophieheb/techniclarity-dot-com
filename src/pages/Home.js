import React, {useEffect, useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import {
  useLocation
} from "react-router-dom";
import {  isMobile
} from "react-device-detect";

import styles from '../styles/home.module.css'

import cloudTop from '../assets/cloud-1.png'
import cloudLeft from '../assets/cloud-2.png'
import cloudRight from '../assets/cloud-3.png'
import globe from '../assets/globe.png'
import pinkGlobe from '../assets/pink-circle.svg'
import cloudFreebieRight from '../assets/cloud-freebie-right.png'
import cloudFreebieLeft from '../assets/cloud-freebie-left.png'
import glossary from '../assets/glossary.png'

import useOnScreen from '../shared/onScreen'

import Instagram from '../components/Instagram'
import Services from '../components/Services'
import TheHandbook from '../components/TheHandbook'

import NewsletterSignupHome from '../components/NewsletterSignupHome'


function Home({setHeaderColour}) {
  let location = useLocation();
  
  const [loaded, setLoaded] = useState(false);
  const [glossaryHasBeenOnScreen, setGlossaryHasBeenOnScreen] = useState(false)

  useEffect(() => {
    setHeaderColour('#262DBA')
    const timer = setTimeout(() => {
      setHeaderColour('#8294F1')
      setLoaded(true)
    }, 10);
    return () => clearTimeout(timer);
  }, []);



  const ref = useRef();
  const glossaryOnScreen = useOnScreen(ref, isMobile ? '-100px' : '-300px');

  useEffect(()=> {
    if(glossaryOnScreen && !glossaryHasBeenOnScreen){
      setGlossaryHasBeenOnScreen(true)
    }
  })


  return (
    <>
    <div 
      className={`container-fluid position-relative vh-100 d-flex align-items-lg-center align-items-top overflow-hidden ${ loaded ? styles.containerTopLoaded : styles.containerTop}`}
    >
      <img
        src={cloudTop}
        alt="Cloud Background"
        className={`position-absolute h-25  ${ loaded ? styles.cloudTopLoaded :styles.cloudTop}`}
      />
      <img
        src={cloudRight}
        alt="Cloud Background"
        className={`position-absolute h-25  d-none d-lg-block ${ loaded ? styles.cloudMiddleLoaded :styles.cloudMiddle}`}

      />
      <img
        src={cloudLeft}
        alt="Cloud Background"
        className={`position-absolute h-25 ${ loaded ? styles.cloudBottomLoaded :styles.cloudBottom}`}
      />
      <img
        src={globe}
        alt="Globe Background"
        className={`position-absolute h-100 ${styles.globe}`}
      />
      <img
        src={pinkGlobe}
        alt="Globe Background"
        className={`position-absolute h-100 ${styles.pinkGlobe}`}
      />
      <div 
        className="col-sm-9 col-lg-7 col-xl-6 ml-lg-5 pl-lg-5 pt-4 p-2 col-12"
      >
        <h1>Stop dreaming about your startup. Learn just enough tech to <span>make it happen.</span></h1>
        <p>We develop female founders by teaching them the tech know-how they need to lead a startup to success.</p>
      </div>
    </div>
    <div
      ref={ref}
      className={`bg-cyan p-4 container-fluid position-relative d-flex align-items-center overflow-hidden`}
    >
      <img
        src={cloudFreebieLeft}
        alt="Cloud Background"
        className={`position-absolute  h-xs-25 h-lg-100  h-sm-50 align-self-lg-center align-self-end  ${ glossaryHasBeenOnScreen || glossaryOnScreen ? styles.cloudFreebieLeftLoaded : styles.cloudFreebieLeft}`}
      />
      <img
        src={cloudFreebieRight}
        alt="Cloud Background"
        className={`position-absolute  h-xs-25 h-lg-100 h-sm-50  align-self-lg-center align-self-end ${ glossaryHasBeenOnScreen || glossaryOnScreen ? styles.cloudFreebieRightLoaded : styles.cloudFreebieRight}`}

      />
      <div className="container py-5">
      <div className="row justify-content-center">
        <div 
          className="col-lg-5 py-5 order-lg-1 text-center my-auto"
        >
          <h2 className="text-white">Free!</h2>
          <h1 className="text-white">The <span>Glossary</span> of Tech Lingo</h1>
          <p className="text-white">All the tech jargon you need to know so that you can chat about your product with ease.</p>
          <Button  className="btn-lg col-12 col-lg-9" variant="purple" target="_blank" as="a" href="https://view.flodesk.com/pages/5f4e822801a6b70026d79b01">DOWNLOAD NOW</Button>
        </div>
        <div           className="col-lg-4 col-12 order-lg-0 pt-xl-0 pt-4">
        <img
          src={glossary}
          alt="Glossary"
          className="img-fluid"

        />
        </div>
      </div>
      </div>
    </div>
    <Services/>

    <a name="newsletter-signup">
      <TheHandbook newsletterSignUp={<NewsletterSignupHome/>} signedUp={location.hash === '#newsletter-signup' ? true : false}/>
    </a>

    <Instagram/>
      
    </>
    );
}

export default Home;
