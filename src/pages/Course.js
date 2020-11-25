import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { Waypoint } from 'react-waypoint';
import {
  CheckIcon, XIcon, PlusIcon, DashIcon,
} from '@primer/octicons-react';
import { isMobile } from 'react-device-detect';
import ReactPlayer from 'react-player';

import styles from '../styles/course.module.css';

import rocket from '../assets/line-rocket.svg';
import greenDiamond from '../assets/green-diamond.svg';
import pinkCircle from '../assets/pink-circle.svg';
import woman from '../assets/woman-course.svg';
import globe from '../assets/globe.png';
import sparkle from '../assets/sparkle.svg';
import cloud from '../assets/small-cloud.png';
import headshot from '../assets/headshot.jpg';
import hand from '../assets/line-hand-left.svg';
import Instagram from '../components/Instagram';

function Course() {
  const [sparkleOne, setSparkleOne] = useState(false);
  const [sparkleTwo, setSparkleTwo] = useState(false);
  const [sparkleThree, setSparkleThree] = useState(false);
  const [sparkleFour, setSparkleFour] = useState(false);
  const [sparkleFive, setSparkleFive] = useState(false);
  const [sparkleSix, setSparkleSix] = useState(false);
  const [sparkleSeven, setSparkleSeven] = useState(false);
  const [sparkleEight, setSparkleEight] = useState(false);
  const [sparkleNine, setSparkleNine] = useState(false);

  const [faqOneOpen, setFaqOneOpen] = useState(false);
  const [faqTwoOpen, setFaqTwoOpen] = useState(false);
  const [faqThreeOpen, setFaqThreeOpen] = useState(false);
  const [faqFourOpen, setFaqFourOpen] = useState(false);
  const [faqFiveOpen, setFaqFiveOpen] = useState(false);

  const outcomeIconSize = isMobile ? 22 : 36;

  const faqIconSize = isMobile ? 18 : 22;

  return (
    < >
      <div
        className="container-fluid position-relative vh-100 d-flex align-items-center"
      >
        <div className="row">
          <div className="col-md-6 col-12 order-1 order-md-0 position-relative d-flex justify-content-center align-items-center">
            <img
              src={greenDiamond}
              alt="Green diamond background"
              className="w-75"
            />
            <img
              src={rocket}
              alt="Line drawing of a rocket"
              className="h-xs-75 h-sm-50 h-lg-50 position-absolute"
            />
          </div>
          <div className="col-12 pb-lg-0 pb-5 col-md-6 order-0 order-md-1 d-flex flex-column align-items-lg-center justify-content-center">
            <h2 className="text-center">Course</h2>
            <h1 className="text-center">
              Product
              {' '}
              <span>Launchpad</span>
            </h1>
            <h3 className="text-center">
              An
              {' '}
              <span>online course</span>
              {' '}
              for early-stage startup founders.
            </h3>
            <div className="text-center">
              <Button variant="red" className="btn-lg" target="_blank" href="https://view.flodesk.com/pages/5f9bff5cd722c98461c9758e">JOIN THE WAITLIST</Button>
              {/* <Button variant="red" className="btn-lg" href="https://courses.techniclarity.co/enroll/749942">BUY NOW</Button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 mb-5">
        <h3 className="text-center"><span>Get ready to:</span></h3>
        <div className="p-4 mb-5 ">

          <h3 className="text-center">
            Secure investment
          </h3>
          <h3 className="text-center">
            Hire your ideal tech team
          </h3>
          <h3 className="text-center">
            Launch & grow your tech startup
          </h3>
          <h3 className="text-center">
            All without a CTO
          </h3>
        </div>
      </div>

      <div
        className="container-fluid position-relative p-5 d-flex align-items-center"
      >
        <div className="row">
          <div className="col-lg-6 col-12 order-1 order-lg-0 ">

            <h1>
              You could be turning your idea into reality,
              {' '}
              <span>instead of feeling overwhelmed.</span>
            </h1>
            <p>
              You’ve mastered all the other parts of your startup, but you’re stuck when it comes to creating your product.
              The process is confusing, the jargon sounds like another language and you just don’t know what the first step is. The app idea you’ve got is needed, or the web platform you want to create is a total game-changer, but that doesn’t make bringing it to life any easier.
            </p>
            <p>
              What would you say if I told you I had something to give you everything you needed to stop talking about your idea and actually get it into customers hands?
            </p>
            <div>
              <Button variant="red" className="btn-lg" target="_blank" href="https://view.flodesk.com/pages/5f9bff5cd722c98461c9758e">JOIN THE WAITLIST</Button>
              {/* <Button variant="red" className="btn-lg" href="https://courses.techniclarity.co/enroll/749942">BUY NOW</Button> */}
            </div>
          </div>
          <div className="col-lg-6 col-12 order-0 order-lg-1  position-relative d-flex justify-content-center align-items-center">
            <img
              src={greenDiamond}
              alt="Green diamond background"
              className="w-100"
            />
            <img
              src={woman}
              alt="Line drawing of a woman in a suit jacket with her hand on her hip"
              className="position-absolute  h-lg-100 h-xs-75"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid p-5 bg-cyan ">
        <div className="row w-xl-75 mx-auto align-items-center justify-content-space-between">
          <div className="col-xl-6 col-lg-4 col-12">
            <h1 className="text-white">
              Meet your
              {' '}
              <span>tutor</span>
            </h1>
            <h3 className="text-white">Find out why Sophie created the course.</h3>
            <Button variant="red" className="btn-lg" href="/about">READ MORE</Button>
          </div>
          <div className="col-xl-6 col-lg-8 col-12 pt-lg-0 pt-5 d-flex justify-content-center align-items-center">
            <ReactPlayer url="https://vimeo.com/470963786" />
          </div>
        </div>
      </div>

      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-4 col-12 pt-5">
            <div className={styles.curriculum}>
              <h1>The Curriculum</h1>
              <img
                src={globe}
                alt="Globe background"
                className={`position-relative d-lg-inline d-none
           ${styles.globe}`}
              />
            </div>
          </div>
          <div className="col-lg-6 col-12 p-lg-5 p-3">
            <div className="mb-5 row">
              <Waypoint
                bottomOffset="100px"
                onEnter={() => { setSparkleOne(true); }}
                onLeave={() => { setSparkleOne(false); }}
              />
              <img
                src={sparkle}
                alt="Sparkle"
                className={`col-2 h-100
            ${styles.sparkle} ${sparkleOne ? 'visible' : 'invisible'}`}
              />
              <div className="col-10">
                <h3>
                  01 -
                  {' '}
                  <span>How to build a </span>
                  {' '}
                  product
                </h3>
                <p>In the first module you’ll drill into the 4 step process you’ll repeatedly go through as a leader of a tech product. Showing you the foundations of building a tech product, this module gets you to challenge the assumptions you’ve already made about your product. At the end of this module, you’ll be in the right mindset to lead a tech build.</p>
              </div>
            </div>
            <div className="mb-5 row">
              <Waypoint
                bottomOffset="100px"
                onEnter={() => { setSparkleTwo(true); }}
                onLeave={() => { setSparkleTwo(false); }}
              />
              <img
                src={sparkle}
                alt="Sparkle "
                className={`col-2 h-100
            ${styles.sparkle} ${sparkleTwo ? 'visible' : 'invisible'}`}
              />
              <div className="col-10">
                <h3>
                  02 - Your idea
                  {' '}
                  <span> in a sentence</span>
                </h3>
                <p>In this module, you’ll get clarity on what your idea really is so you can articulate it to investors, colleagues and even your mum. We’ll start to dive into technical jargon so you can make informed decisions about your product. This is the first step in taking your big idea and turning it into manageable pieces. </p>
              </div>
            </div>
            <div className="mb-5 row">
              <Waypoint
                bottomOffset="100px"
                onEnter={() => { setSparkleThree(true); }}
                onLeave={() => { setSparkleThree(false); }}
              />
              <img
                src={sparkle}
                alt="Sparkle "
                className={`col-2 h-100
              ${styles.sparkle} ${sparkleThree ? 'visible' : 'invisible'}`}
              />
              <div className="col-10">
                <h3>
                  03 -
                  {' '}
                  <span>Creating a </span>
                  big picture
                </h3>
                <p>If you aren’t clear on the purpose of your product, it will be an uphill battle to get others to join in on your startup journey. By the end of this module, you’ll have a vision for your product so clear, it will be obvious why everyone needs to follow you on this journey.</p>
              </div>
            </div>
            <div className="mb-5 row">
              <Waypoint
                bottomOffset="100px"
                onEnter={() => { setSparkleFour(true); }}
                onLeave={() => { setSparkleFour(false); }}
              />
              <img
                src={sparkle}
                alt="Sparkle "
                className={`col-2 h-100
            ${styles.sparkle} ${sparkleFour ? 'visible' : 'invisible'}`}
              />
              <div className="col-10">
                <h3>
                  04 -
                  {' '}
                  <span>Diving into </span>
                  details
                </h3>
                <p>When you don't know how long something will take or how much it will cost it's hard to know if to invest. Digging deeper into the specifics of your idea will unlock your ability to answer these questions. You’ll create a feature list that’s more organised and prioritised to a T because then you know exactly what’s worth building. Armed with this you’ll make your first estimate of costs and timelines.</p>
              </div>
            </div>
            <div className="mb-5 row">
              <Waypoint
                bottomOffset="100px"
                onEnter={() => { setSparkleFive(true); }}
                onLeave={() => { setSparkleFive(false); }}
              />
              <img
                src={sparkle}
                alt="Sparkle "
                className={`col-2 h-100
            ${styles.sparkle} ${sparkleFive ? 'visible' : 'invisible'}`}
              />
              <div className="col-10">
                <h3>
                  05 -
                  {' '}
                  <span>Your first</span>
                  {' '}
                  prototype
                </h3>
                <p>It is challenging to get feedback on your idea without something for potential users to play with. You'll create diagrams of how a user will move through your product and speak to users so you’ve got their opinions early on.</p>
              </div>
            </div>
            <div className="mb-5 row">
              <Waypoint
                bottomOffset="100px"
                onEnter={() => { setSparkleSix(true); }}
                onLeave={() => { setSparkleSix(false); }}
              />
              <img
                src={sparkle}
                alt="Sparkle "
                className={`col-2 h-100
            ${styles.sparkle} ${sparkleSix ? 'visible' : 'invisible'}`}
              />
              <div className="col-10">
                <h3>
                  06 - Prototype
                  {' '}
                  <span> level two </span>
                </h3>
                <p>This module teaches you everything you need to know about creating early versions of your product. You’ll create digital mockups of your product, to get feedback and to use in investor meetings (or at least to show your friends what you’re busy working on late at night).</p>
              </div>
            </div>
            <div className="mb-5 row">
              <Waypoint
                bottomOffset="100px"
                onEnter={() => { setSparkleSeven(true); }}
                onLeave={() => { setSparkleSeven(false); }}
              />
              <img
                src={sparkle}
                alt="Sparkle "
                className={`col-2 h-100
            ${styles.sparkle} ${sparkleSeven ? 'visible' : 'invisible'}`}
              />
              <div className="col-10">
                <h3>
                  07 -
                  {' '}
                  <span>Getting</span>
                  {' '}
                  specific
                </h3>
                <p>In order to work with a tech team, you’ll need to be detailed on what you expect from them. In this module, you create a document that sets out exactly what your product is, down to the minutest detail. This means when you do go and work with a tech team, there will be no miscommunications on output.</p>
              </div>
            </div>
            <div className="mb-5 row">
              <Waypoint
                bottomOffset="100px"
                onEnter={() => { setSparkleEight(true); }}
                onLeave={() => { setSparkleEight(false); }}
              />
              <img
                src={sparkle}
                alt="Sparkle "
                className={`col-2 h-100
            ${styles.sparkle} ${sparkleEight ? 'visible' : 'invisible'}`}
              />
              <div className="col-10">
                <h3>
                  08 -
                  {' '}
                  <span>The road </span>
                  ahead
                </h3>
                <p>In this penultimate module, you will create a roadmap for your tech build and work out how it fits into your wider business. You’ll gain an understanding of the people you’ll need to work with to bring your idea to life. With a roadmap in hand you can plan, budget and resource for your growing business.</p>
              </div>
            </div>
            <div className="mb-5 row">
              <Waypoint
                bottomOffset="100px"
                onEnter={() => { setSparkleNine(true); }}
                onLeave={() => { setSparkleNine(false); }}
              />
              <img
                src={sparkle}
                alt="Sparkle "
                className={`col-2 h-100
            ${styles.sparkle} ${sparkleNine ? 'visible' : 'invisible'}`}
              />
              <div className="col-10">
                <h3>
                  09 - To infinity
                  {' '}
                  <span> and beyond</span>
                </h3>
                <p>To top it all off, you’ll create a launch plan, because your product’s needs to get out into the world and into the hands of users. We’ll discuss the ways you’ll know if your product has been a success and how to manage your app or web platform in the long term.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-5 bg-cyan">
        <h1 className="text-center text-white p-3 d-lg-none d-block">
          Ready to bring your
          {' '}
          <span> tech product </span>
          {' '}
          to life?
        </h1>
        <h3 className="text-center text-white p-3 d-lg-block d-none">
          Ready to bring your
          {' '}
          <span> tech product </span>
          {' '}
          to life?
        </h3>
        <h2 className="text-center text-white p-3 d-lg-block d-none">£450</h2>
        <h3 className="text-center text-white p-3 d-lg-none d-block">£450</h3>
        <div className="text-center p-3">
          <Button variant="red" className="btn-lg" target="_blank" href="https://view.flodesk.com/pages/5f9bff5cd722c98461c9758e">JOIN THE WAITLIST</Button>
          {/* <Button variant="red" className="btn-lg" href="https://courses.techniclarity.co/enroll/749942">BUY NOW</Button> */}
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="row mt-5">
          <div className="col-lg-6 col-12 pr-lg-5">
            <h3 className="ml-lg-5  mb-lg-4">
              <span>At the end of </span>
              {' '}
              Product Launchpad you’ll be:
            </h3>
            <div className="row ml-lg-5">
              <div className="col-2 col-sm-1">
                <CheckIcon size={outcomeIconSize} className="mr-3" />
              </div>
              <div className="col-10 col-sm-11">
                <p> Totally unphased by technical convos, because you’ve mastered all the lingo.</p>
              </div>
            </div>
            <div className="row ml-lg-5">
              <div className="col-2 col-sm-1">
                <CheckIcon size={outcomeIconSize} className="mr-3" />
              </div>
              <div className="col-10 col-sm-11">
                <p> Flying through the first steps you need to take to get your app or web platform off the ground. You’ll be guided through the process.</p>
              </div>
            </div>
            <div className="row ml-lg-5">
              <div className="col-2 col-sm-1">
                <CheckIcon size={outcomeIconSize} className="mr-3" />
              </div>
              <div className="col-10 col-sm-11">
                <p>Managing the technical process with ease, because you know it from top to bottom.</p>
              </div>
            </div>
            <div className="row ml-lg-5">
              <div className="col-2 col-sm-1">
                <CheckIcon size={outcomeIconSize} className="mr-3" />
              </div>
              <div className="col-10 col-sm-11">
                <p>Ready to pitch for investment (if that’s what you want for your business).</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 pr-lg-5 p-3">
            <h3 className="ml-lg-5 mb-lg-4">
              <span>Currently </span>
              {' '}
              you're spending your days:
            </h3>
            <div className="row ml-lg-5">
              <div className="col-2 col-sm-1">
                <XIcon size={outcomeIconSize} className="mr-3" />
              </div>
              <div className="col-10 col-sm-11">
                <p className="text-wrap"> Trying to hire a CTO, but without really understanding what their job description should look like</p>
              </div>
            </div>
            <div className="row ml-lg-5">
              <div className="col-2 col-sm-1">
                <XIcon size={outcomeIconSize} className="mr-3" />
              </div>
              <div className="col-10 col-sm-11">
                <p className="text-wrap">Working your butt off, but still don’t have a tangible product as an outcome</p>
              </div>
            </div>
            <div className="row ml-lg-5">
              <div className="col-2 col-sm-1">
                <XIcon size={outcomeIconSize} className="mr-3" />
              </div>
              <div className="col-10 col-sm-11">
                <p>Feeling like a fraud, because you’re confused when the conversation turns techy</p>
              </div>
            </div>
            <div className="row ml-lg-5">
              <div className="col-2 col-sm-1">
                <XIcon size={outcomeIconSize} className="mr-3" />
              </div>
              <div className="col-10 col-sm-11">
                <p>Worrying about how much building a tech product will cost.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="row mt-5">
          <div className="col-6 d-lg-block d-none">
            <img
              src={globe}
              alt="Globe background"
              className="float-right"
            />
          </div>
          <div className="col-lg-6 col-12 my-auto">
            <h3 className="mb-4 pb-4 text-center">
              <span>And </span>
              {' '}
              you'll be armed with:
            </h3>
            <div className="row justify-content-center">
              <div className="w-50 pb-5 mb-5 text-center">
                <img
                  src={cloud}
                  alt="Cloud icon"
                  className="w-lg-25 w-xs-75 "
                />
                <p className="pt-4 w-75 m-auto">
                  {' '}
                  A
                  {' '}
                  {' '}
                  <b className="font-weight-bold">product vision</b>
                  {' '}
                  so clear, you’ll never lose sight of it.
                </p>
              </div>
              <div className="w-50 pb-5 mb-5 text-center">
                <img
                  src={cloud}
                  alt="Cloud icon"
                  className="w-lg-25 w-xs-75 "
                />
                <p className="pt-4 w-75 m-auto">
                  <b className="font-weight-bold">Digital mockups and diagrams </b>
                  {' '}
                  of your product, your product will finally be real.
                </p>
              </div>
              <div className="w-50 pb-5 mb-5 text-center">
                <img
                  src={cloud}
                  alt="Cloud icon"
                  className="w-lg-25 w-xs-75 "
                />
                <p className="pt-4 w-75 m-auto">
                  <b className="font-weight-bold">Feedback from your ideal users,</b>
                  {' '}
                  so you can make decisions about what to invest in with them at the heart.
                </p>
              </div>
              <div className="w-50 pb-5 mb-5 text-center">
                <img
                  src={cloud}
                  alt="Cloud icon"
                  className="w-lg-25 w-xs-75 "
                />
                <p className="pt-4 w-75 m-auto">
                  {' '}
                  A
                  {' '}
                  {' '}
                  <b className="font-weight-bold">feature list</b>
                  {' '}
                  that’s more organised than Marie Kondo’s wrapping paper drawer, because then you know exactly what’s worth building.
                </p>
              </div>
              <div className="w-50 pb-5 mb-5 text-center">
                <img
                  src={cloud}
                  alt="Cloud icon"
                  className="w-lg-25 w-xs-75 "
                />
                <p className="pt-4 w-75 m-auto">
                  {' '}
                  A
                  {' '}
                  {' '}
                  <b className="font-weight-bold">roadmap, </b>
                  {' '}
                  so that you can plan the rest of your business in parallel with your tech milestones.
                </p>
              </div>
              <div className="w-50 pb-5 mb-5 text-center">
                <img
                  src={cloud}
                  alt="Cloud icon"
                  className="w-lg-25 w-xs-75 "
                />
                <p className="pt-4 w-75 m-auto">
                  {' '}
                  A
                  {' '}
                  {' '}
                  <b className="font-weight-bold">launch plan, </b>
                  {' '}
                  because your product’s no good to anyone if it stays stuck on someone’s laptop.
                </p>
              </div>
              <div className="w-50 pb-5 mb-5 text-center">
                <img
                  src={cloud}
                  alt="Cloud icon"
                  className="w-lg-25 w-xs-75 "
                />
                <p className="pt-4 w-75 m-auto">
                  <b className="font-weight-bold">Estimates</b>
                  {' '}
                  for time and cost of building your tech product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-5 bg-cyan">
        <h1 className="text-center text-white p-3 d-lg-none d-block">
          Ready to bring your
          {' '}
          <span> tech product </span>
          {' '}
          to life?
        </h1>
        <h3 className="text-center text-white p-3 d-lg-block d-none">
          Ready to bring your
          {' '}
          <span> tech product </span>
          {' '}
          to life?
        </h3>
        <h2 className="text-center text-white p-3 d-lg-block d-none">£450</h2>
        <h3 className="text-center text-white p-3 d-lg-none d-block">£450</h3>
        <div className="text-center p-3">
          <Button variant="red" className="btn-lg" target="_blank" href="https://view.flodesk.com/pages/5f9bff5cd722c98461c9758e">JOIN THE WAITLIST</Button>
          {/* <Button variant="red" className="btn-lg" href="https://courses.techniclarity.co/enroll/749942">BUY NOW</Button> */}
        </div>
      </div>

      <div className="container-fluid p-5">
        <h1 className="pb-5">
          How this course
          {' '}
          <span>works</span>
        </h1>
        <div className="row">
          <div className="col-12 col-lg-4 p-lg-5 pb-5">
            <h3>Workbooks</h3>
            <p className="w-100">Put everything you learn into practice straight away with workbooks you tailor specifically to your product.</p>
          </div>
          <div className="col-12 col-lg-4 p-lg-5 pb-5">
            <h3>Videos</h3>
            <p className="w-100">Walkthroughs of definitions, tools, techniques and processes.</p>
          </div>
          <div className="col-12 col-lg-4 p-lg-5 pb-5">
            <h3>Support</h3>
            <p className="w-100">You won’t be alone on this journey. Along the way, you’ll be able to ask any questions you have.</p>
          </div>
          <div className="col-12 col-lg-4 p-lg-5 pb-5">
            <h3>Self-paced</h3>
            <p className="w-100">Learn as and when it suits you. Early bird or night owl, it doesn’t matter to us!</p>
          </div>
          <div className="col-12 col-lg-4 p-lg-5 pb-5">
            <h3>Online</h3>
            <p className="w-100">Access all the content whenever suits you best, no need to travel.</p>
          </div>
        </div>
      </div>

      <div className="container-fluid position-relative p-5 d-flex align-items-center bg-green overflow-hidden">
        <div className="row">
          <div className="col-md-6 col-12 p-lg-5 py-5 px-3 order-1 order-md-1 ">
            <h1 className="text-white">
              About your
              {' '}
              <span>instructor</span>
            </h1>
            <h3 className="text-white">Hi I'm Sophie</h3>
            <p className="text-white">
              Over the last decade I’ve built and launched products and startups. I’ve ridden the highs and the lows, so I’ve been in your shoes. I’ve taken everything I’ve learnt and packaged it up so that you can start your entrepreneurial journey. When I was a CTO, I saw first hand how many businesses never made it past the idea stage, all because there wasn’t enough tech support available. I’ve taught senior exec about their businesses' digital transformations and even budding software developers how to build their first website. But now I think it’s high-time I support you because I know your idea is set for success and I can’t wait to help you set the foundations for your startup.
            </p>
          </div>
          <div className="col-md-6 col-12 p-lg-5 py-5 px-3 order-0 order-md-1 position-relative d-flex justify-content-center align-items-center">
            <img
              src={headshot}
              alt="Photo of Sophie laughing"
              className={`rounded-circle img-fluid w-xs-100 w-lg-75 ${styles.headshot}`}
            />
            <img
              src={pinkCircle}
              alt="pink circle background"
              className={` w-100 position-absolute ${styles.pinkCircle}`}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-5 col-12 mb-md-5 mb-3 ">
            <h1>FAQs</h1>
            <p className="mb-0">
              Got any more
              {' '}
              <span>questions?</span>
              {' '}
              Send them over to:
            </p>
            <a href="mailto:productlaunchpad@techniclarity.co?subject=Question about Product Launchpad">
              <p><b>productlaunchpad @techniclarity.co</b></p>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12 py-3">
            <div className="d-flex flex-row" onClick={() => { setFaqOneOpen(!faqOneOpen); }}>
              {faqOneOpen ? <DashIcon size={faqIconSize} /> : <PlusIcon size={faqIconSize} />}
              <h2 className="pl-4">Do I need to know how to code?</h2>
            </div>
            <Collapse in={faqOneOpen}>
              <p>Nope, not at all! You’ve got some incredible skills already. You don’t need to know how to code to be the founder of a tech business, but you do need to understand how tech products get built so you can manage the process.</p>
            </Collapse>
          </div>
          <div className="col-md-6 col-12 py-3">
            <div className="d-flex flex-row" onClick={() => { setFaqTwoOpen(!faqTwoOpen); }}>
              {faqTwoOpen ? <DashIcon size={faqIconSize} /> : <PlusIcon size={faqIconSize} />}
              <h2 className="pl-4">Will you connect me with people to build my product for me?</h2>
            </div>
            <Collapse in={faqTwoOpen}>
              <p>Product Launchpad teaches you how to work with technical people and will recommend where you can look to find the right tech team for you but we won’t connect you directly to those teams.</p>
            </Collapse>
          </div>
          <div className="col-md-6 col-12 py-3">
            <div className="d-flex flex-row" onClick={() => { setFaqThreeOpen(!faqThreeOpen); }}>
              {faqThreeOpen ? <DashIcon size={faqIconSize} /> : <PlusIcon size={faqIconSize} />}
              <h2 className="pl-4">Do I need to be building a tech product?</h2>
            </div>
            <Collapse in={faqThreeOpen}>
              <p>
                Yes, in this course you are guided through the process of creating a tech product, so it’s important that your main product is either an app or a web-platform.
              </p>
            </Collapse>
          </div>
          <div className="col-md-6 col-12 py-3">
            <div className="d-flex flex-row" onClick={() => { setFaqFourOpen(!faqFourOpen); }}>
              {faqFourOpen ? <DashIcon size={faqIconSize} /> : <PlusIcon size={faqIconSize} />}
              <h2 className="pl-4">Will I be able to ask you questions?</h2>
            </div>
            <Collapse in={faqFourOpen}>
              <p>Yes, support is available on each and every lesson in the course.</p>
            </Collapse>
          </div>
          <div className="col-md-6 col-12 py-3">
            <div className="d-flex flex-row" onClick={() => { setFaqFiveOpen(!faqFiveOpen); }}>
              {faqFiveOpen ? <DashIcon size={faqIconSize} /> : <PlusIcon size={faqIconSize} />}
              <h2 className="pl-4">How long will it take?</h2>
            </div>
            <Collapse in={faqFiveOpen}>
              <p>It’s up to you, you can binge-watch all the content in a day or you can space it out over a number of weeks. We recommend a week per module to keep your momentum up. Each module contains content which takes about an hour to consume and a workbook. Each workbook makes you take actionable steps which could take up to a day to complete, but there are occasionally other recommended activities that could take another day to two.</p>
            </Collapse>
          </div>
        </div>

      </div>

      <div className="container-fluid p-5 bg-cyan">
        <h1 className="text-center text-white p-3 d-lg-none d-block">Ready to get started?</h1>
        <h3 className="text-center text-white p-3 d-lg-block d-none">Ready to get started?</h3>
        <h2 className="text-center text-white p-3 d-lg-block d-none">£450</h2>
        <h3 className="text-center text-white p-3 d-lg-none d-block">£450</h3>
        <div className="text-center p-3">
          <Button variant="red" className="btn-lg" target="_blank" href="https://view.flodesk.com/pages/5f9bff5cd722c98461c9758e">JOIN THE WAITLIST</Button>
          {/* <Button variant="red" className="btn-lg" href="https://courses.techniclarity.co/enroll/749942">BUY NOW</Button> */}
        </div>
      </div>

      <div
        className="container-fluid position-relative d-flex align-items-center p-5 "
      >
        <div className="row">
          <div className="col-md-6 col-12 position-relative d-flex justify-content-center align-items-center">
            <img
              src={pinkCircle}
              alt="Pink circle background"
              className="w-100"
            />
            <img
              src={hand}
              alt="Line drawing of a hand"
              className="h-50 w-75 position-absolute"
            />
          </div>

          <div className="col-md-6 col-12 d-flex flex-column justify-content-center">
            <h1 className="text-center">
              Looking for
              {' '}
              <span>1:1 tuition?</span>
            </h1>
            <div className="text-center">
              <Button variant="red" className="btn-lg" href="/tuition">FIND OUT MORE</Button>
            </div>
          </div>
        </div>
      </div>

      <Instagram />

    </>
  );
}

export default Course;
