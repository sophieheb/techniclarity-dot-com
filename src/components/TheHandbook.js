import React from 'react';
import NewsletterSignup from '../components/NewsletterSignup'
import handGlobe from '../assets/hand-globe.png'
function TheHandbook() {
    return (
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

    )}

    export default TheHandbook;