import React, {useEffect} from 'react';
import SignUp from './SignUp';

import '../styles/app.css';
import styles from '../styles/courses.module.css';

import comingSoonOne from '../assets/coming-soon-1.png';
import comingSoonTwo from '../assets/coming-soon-2.png';
import comingSoonThree from '../assets/coming-soon-3.png';
import comingSoonFour from '../assets/coming-soon-4.png';

// TODO: Add this into bottom paragraph once we launch courses
// // <p className="w-75 mx-auto col-8">
// Do you still feel confused about the technology portion of your business
// even though you have already taken one of our online courses? Or perhaps
// you can’t find an online course anywhere that covers what you need.</p>


const Courses = () => {
  useEffect(() => {
    window.fd('form', {
      formId: '5ec655ccb9c153002b5acf92',
      containerEl: '#fd-form-5ec655ccb9c153002b5acf92'
    });
  });

  return [
  <section className={`p-sm-5 p-3 container-fluid`}>
    <h1 className="p-sm-5 p-3 text-wrap row">Product Launchpad</h1>
    <h2 className="p-sm-5 p-3 w-75 row">
      You&apos;ve got an incredible idea for your tech product. You just need a place to start.
    </h2>
    <div className="row">
      <a className={`${styles.buyButton} m-sm-5 m-3 p-4 row`} href="https://courses.techniclarity.co/enroll/749942?price_id=797731&coupon=early-bird">Buy now</a>
    </div>
  </section>,
  <section className={`${styles.coursesDivider} p-sm-5 p-3 py-5 container-fluid text-center`}>
    <div className="w-75 p-5 m-auto box-shadow background-green">
      <p className="text-wrap">We&apos;re so pleased you&apos;re here</p>
      <hr className="short-break background-white"/>
      <h2>
        Because you shouldn't be feeling overwhelmed when you could be turning your idea into a reality.
      </h2>
    </div>
  </section>,
  <section className="container-fluid background-white p-5">
    <h2 className="pb-3 mx-auto col-lg-6">Here's what to expect at the end of this course...</h2>
    <div className="row p-5 d-flex justify-content-center">
      <div className="col-sm-3">
        <img src={comingSoonOne} className="img-fluid" alt="Illustrative doodle" />
      </div>
      <div className="col-sm-9 col-lg-6 my-auto">
        <h3 >Clearly articulate your idea</h3>
        <p>By getting clarity on what your idea really is you'll reduce the overwhelm. This is the first step in taking your big idea and turning it into manageable pieces.</p>
      </div>
    </div>
    <div className="row p-5 d-flex justify-content-center">
      <div className="col-sm-3 order-sm-1">
        <img src={comingSoonTwo} className="img-fluid"  alt="Illustrative doodle" />
      </div>
      <div className="col-sm-9 order-sm-0 col-lg-6 my-auto">
        <h3 >Estimate costs and timelines</h3>
        <p >When you don't know how long something will take or how much it will cost it's hard to know if to invest. Digging deeper into the specifics of your idea will unlock your ability to answer these questions.</p>
      </div>
    </div>
    <div className="row p-5 d-flex justify-content-center">
      <div className="col-sm-3">
        <img src={comingSoonThree} className="img-fluid"  alt="Illustrative doodle" />
      </div>
      <div className="col-sm-9 col-lg-6 my-auto">
        <h3 >Figure out whats possible</h3>
        <p >Not coming from a technical background, you probably still feel reliant on others to help you shape your dreams. Understanding the possibilities puts you back in the driver's seat.</p>
      </div>
    </div>
    <div className="row p-5 d-flex justify-content-center">
      <div className="col-sm-3 order-sm-1">
        <img src={comingSoonFour} className="img-fluid"  alt="Illustrative doodle" />
      </div>
      <div className="col-sm-9 order-sm-0 col-lg-6 my-auto">
        <h3 >Collect vital feedback</h3>
        <p >It is challenging to get feedback on your idea without something for potential users to play with. You'll create early versions of your product so that the wheels are in motion.</p>
      </div>
    </div>
  </section>,
  <section className={`${styles.coursesDivider} p-sm-5 p-3 py-5 container-fluid text-center`}>
    <div className="w-75 p-5 m-auto box-shadow background-green">
      <p className="text-wrap">Usually priced at £450, Product Launchpad is offered at £225 for the first five users. That's a massive 50% discount.</p>
      <h4>Just to sweeten the deal you'll also get a bonus 60 minute tuition session to make sure you cement your new knowledge on completion.</h4>
      <hr className="short-break background-white"/>
      <a className={`${styles.buyButton} m-sm-5 m-3 p-4` } href="https://courses.techniclarity.co/enroll/749942?price_id=797731&coupon=early-bird">Buy now</a>
    </div>
  </section>,
  <section className="container-fluid">
    <section className="row">
      <section className="col-sm-6 p-5">
        <p>
          The combination of new knowledge
          delivered via videos you can watch any time and hands-on exercises to
          tailor to your own business will take you from stumbling around with
          google, to an action plan in no time.
        </p>
      </section>
      <section className="col-sm-6 p-5">
        <div id="fd-form-5ec655ccb9c153002b5acf92"></div>
        </section>
    </section>
  </section>,
]
};

export default Courses;
