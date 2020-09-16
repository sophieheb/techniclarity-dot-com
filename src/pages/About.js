import React from 'react';
import Instagram from '../components/Instagram'

import pinkCircle from '../assets/pink-circle.svg'
import blueSemiCircle from '../assets/blue-semicircle.svg'
import womanTop from '../assets/woman-about-top.svg'
import womanMiddle from '../assets/woman-about-middle.svg'

import headshot from '../assets/headshot.jpg'

import styles from '../styles/about.module.css'

import Services from '../components/Services'

function About() {
  return (
    <>
     <div 
      className={`container-fluid position-relative p-5 mt-5 d-flex align-items-center`}
    >
      <div className="col-6">
        <h2 >What?</h2>
        <h1 >Techniclarity teaches <span>female founders </span> the tech know-how they need to lead their startups.</h1>
        <p>Whether it’s by levelling up with an online course or us working together one to one to remove all your technical blockers - Techniclarity was started to help you press the go-faster button on your app or web-platform idea.</p>
        <p>Founders without experience in technology are reliant on people with technical skills to create and grow their products. But why does it feel like that knowledge is locked away, kept for a small group that are in the know? You can’t lead a company when there’s a part of it that’s a total mystery to you.  Knowing it all isn’t the goal - the solution isn’t you totally retraining. It’s about getting to know the basics so you can manage technology with confidence.</p>
        <p>Think of spending time with Techniclarity as increasing your tech fluency, so you can lead your business without feeling like a total fraud.</p> 
      </div>
      <div className="col-6 h-100 position-relative d-flex justify-content-center align-items-center">
        <img
        src={blueSemiCircle}
        alt="Blue semi-circle background"
        className={`w-100 ${styles.blueSemiCircle}`}
        />
        <img
          src={womanTop}
          alt="Line drawing of a woman"
          className={`h-100 position-absolute`}
        />
      </div>
    </div>

    <div 
      className={`container-fluid position-relative p-5 mt-5 d-flex align-items-center`}
    >
      <div className="col-6 h-100 position-relative d-flex justify-content-center align-items-center">
        <img
        src={pinkCircle}
        alt="Pink circle background"
        className={'w-100'}
        />
        <img
          src={womanMiddle}
          alt="Line drawing of a woman"
          className={`h-100 position-absolute`}
        />
      </div>
      <div className="col-6">
        <h2 >Why?</h2>
        <h1 >People leading technological change and new ideas all come from <span>one demographic.</span></h1>
<p>Technology is creating a new world; this gives us the chance to create a more equal society. However, when the majority of founders, people leading technological change and new ideas all come from one demographic, well that new world is going to be pretty geared towards that one group - and won’t be so equal.</p>
        </div>
 
    </div>

    <div className="container-fluid p-5 bg-cyan">
      <div className="row p-5 ">
        <div className="col-4 p-5">
          <h1 className="text-white text-center">
            20%
          </h1>
          <p className="text-white text-center">Only 20% of founders are female (and that's an improvement from last year).</p>
        </div>
        <div className="col-4 p-5">
          <h1 className="text-white text-center">
            Skills
          </h1>
          <p className="text-white text-center">The most common reason women give for not starting their business is that they don’t believe they have the right skills.</p>
        </div>
        <div className="col-4 p-5">
          <h1 className="text-white text-center">
            3%
          </h1>
          <p className="text-white text-center">In 2019 only 3% of venture dollar went towards female-founded businesses.</p>
        </div>
      </div>
      <h2 className="text-white text-center m-auto w-50 pb-4">As a result</h2>
      <h3 className="text-white text-center m-auto w-50 pb-5">Women with ideas that could change the world are <span>completely stalled.</span></h3>
    </div>

    <div className="container-fluid bg-green p-5">
      <h3 className="w-50 m-auto text-white text-center p-5">Techniclarity was started to create <span>long term change </span> - to equip women with what they needed for the future, not just for now. Which is why Techniclarity is <span>all about education </span>because as you grow, so does your business. 
</h3>
    </div>

    <div 
      className={`container-fluid position-relative p-5 mt-5 d-flex align-items-center`}
    >
      <div className="col-6">
        <h2 >About me</h2>
        <h1 >I'm Sophie and I'm the<span> Founder </span> of Techniclarity</h1>
        <p>A cross-hatch of experience led me to found Techniclarity. I've developed websites and apps for small business and charities focussing on creating solutions that solve problems for women. Think anything from sex-tech to ed-tech. Plus I spent four years teaching senior execs about the digital transformation their businesses were going through.</p>
        <p>My journey into technology started early when I studied Computer Science and Maths at university. My subject was thrust upon me, but I fell in love with creating new technology and the way it’s transforming the world.</p>
        <p>Whilst wrapping up the first business I had my light-bulb moment. I was the CTO of PKT which created a voice bot that equipped teenage girls with the skills they need to manage their own mental health. I kept encountering women who were turning their backs on entrepreneurship simply because despite having an incredible idea, they lacked the technical fluency to turn it into action.</p>
       <p>I’m inspired to help people without my sort of background, to help themselves gain a better understanding of technology. Then support them whilst they use that new clarity to grow businesses that make an impact.</p>
       <p><i>P.S I’m also a sausage dog owner, attempting to learn Spanish and a total chocoholic. I love listening to podcasts and starting new books (finishing them is a different story).</i></p>
       </div>
      <div className="col-6 h-100 d-flex justify-content-center">
        <img
          src={headshot}
          alt="Photograph of Sophie"
          className={`rounded-circle img-fluid w-75 m-auto`}
        />
      </div>
    </div>

    <Services/>


    <Instagram/>
    </>
  );
}

export default About;
