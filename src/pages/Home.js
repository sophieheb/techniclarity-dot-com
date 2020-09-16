import React, {useEffect, useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';


import styles from '../styles/home.module.css'

import cloudTop from '../assets/cloud-1.png'
import cloudLeft from '../assets/cloud-2.png'
import cloudRight from '../assets/cloud-3.png'
import globe from '../assets/globe.png'
import pinkGlobe from '../assets/pink-circle.svg'
import greenDiamond from '../assets/green-diamond.svg'
import cloudFreebieRight from '../assets/cloud-freebie-right.png'
import cloudFreebieLeft from '../assets/cloud-freebie-left.png'
import glossary from '../assets/glossary.png'

import handGlobe from '../assets/hand-globe.png'

import useOnScreen from '../shared/onScreen'
import NewsletterSignup from '../components/NewsletterSignup'
import Instagram from '../components/Instagram'
import Services from '../components/Services'


function Home({setHeaderColour}) {
  
  const [loaded, setLoaded] = useState(false);



  useEffect(() => {
    setHeaderColour('#262DBA')
    const timer = setTimeout(() => {
      setHeaderColour('#8294F1')
      setLoaded(true)
    }, 10);
    return () => clearTimeout(timer);
  }, []);



  const ref = useRef();
  const glossaryOnScreen = useOnScreen(ref, '-300px');


  return (
    <>
    <div 
      className={`container-fluid position-relative vh-100 d-flex align-items-center ${ loaded ? styles.containerTopLoaded : styles.containerTop}`}
    >
      <img
        src={cloudTop}
        alt="Cloud Background"
        className={`position-absolute h-25 ${ loaded ? styles.cloudTopLoaded :styles.cloudTop}`}
      />
      <img
        src={cloudRight}
        alt="Cloud Background"
        className={`position-absolute h-25 ${ loaded ? styles.cloudMiddleLoaded :styles.cloudMiddle}`}

      />
      <img
        src={cloudLeft}
        alt="Cloud Background"
        className={`position-absolute h-25 ${ loaded ? styles.cloudBottomLoaded :styles.cloudBottom}`}
      />
      <img
        src={globe}
        alt="Globe Background"
        className={`position-absolute h-75 ${styles.globe}`}
      />
      <img
        src={pinkGlobe}
        alt="Globe Background"
        className={`position-absolute h-75 ${styles.pinkGlobe}`}
      />
      <div 
        className="w-75 ml-5 pl-5 row"
      >
        <h1>Stop dreaming about your startup. Learn just enough tech to <span>make it happen.</span></h1>
        <p>We develop female founders by teaching them the tech know-how they need to lead a startup to success.</p>
      </div>
    </div>
    <div
      ref={ref}
      className={`bg-cyan p-4 container-fluid position-relative d-flex align-items-center`}
    >
      <img
        src={cloudFreebieLeft}
        alt="Cloud Background"
        className={`position-absolute h-100 ${ glossaryOnScreen ? styles.cloudFreebieLeftLoaded : styles.cloudFreebieLeft}`}
      />
      <img
        src={cloudFreebieRight}
        alt="Cloud Background"
        className={`position-absolute h-100 ${ glossaryOnScreen ? styles.cloudFreebieRightLoaded : styles.cloudFreebieRight}`}

      />
      <div className="container py-5">
      <div className="row justify-content-center">
      <img
        src={glossary}
        alt="Glossary"
        className="col-3"
      />
      <div 
        className="col-5 text-center my-auto"
      >
        <h2 className="text-white">Free!</h2>
        <h1 className="text-white">The <span>Glossary</span> of Tech Lingo</h1>
        <p className="text-white">All the tech jargon you need to know so that you can chat about your product with ease.</p>
        <Button  className="btn-lg" variant="purple" href="https://view.flodesk.com/pages/5f4e822801a6b70026d79b01">Download now</Button>
      </div>
      </div>
      </div>
    </div>
    <Services/>
    <div
      className={`bg-cyan p-4 container-fluid position-relative d-flex align-items-center`}
    >
      <div className="container py-5">
        <div className="row justify-content-center">

          <div 
            className="col-6 text-center my-auto"
          >
            <h2 className="text-white">Newsletter</h2>
            <h1 className="text-white">The <span>handbook</span></h1>
            <p className="text-white">You don’t need more advice (or inbox clutter), you just need high-quality info that stops you feeling like a fraud when you’re running your startup.
</p>
            <NewsletterSignup/>
          </div>
          <img
            src={handGlobe}
            alt="Line drawing of a hand holding a globe"
            className="col-6 img-fluid"
          />
        </div>
      </div>
    </div>

    <Instagram/>
      
    </>
    );
}

export default Home;
