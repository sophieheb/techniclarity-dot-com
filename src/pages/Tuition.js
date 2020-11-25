import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { PlusIcon, DashIcon } from '@primer/octicons-react';
import { isMobile } from 'react-device-detect';
import ReactPlayer from 'react-player';
import { openPopupWidget } from 'react-calendly';
import { Helmet } from 'react-helmet';

import styles from '../styles/tuition.module.css';

import pinkCircle from '../assets/pink-circle.svg';
import hand from '../assets/line-hand-left.svg';
import headshot from '../assets/headshot.jpg';
import woman from '../assets/woman-tuition.svg';
import rocket from '../assets/line-rocket.svg';
import greenDiamond from '../assets/green-diamond.svg';

import Instagram from '../components/Instagram';

function Tuition() {
  const [faqOneOpen, setFaqOneOpen] = useState(false);
  const [faqTwoOpen, setFaqTwoOpen] = useState(false);
  const [faqThreeOpen, setFaqThreeOpen] = useState(false);
  const [faqFourOpen, setFaqFourOpen] = useState(false);
  const [faqFiveOpen, setFaqFiveOpen] = useState(false);

  const iconSize = isMobile ? 18 : 22;

  return (
    <>
      <Helmet>
        <title>Tuition | Techniclarity</title>
        <meta name="description" content="Get personalised support from someone who's built startups before." />
        <meta property="og:url" content="techniclarity.co/course" />
        <meta property="og:description" content="Get personalised support from someone who's built startups before." />
        <meta property="og:title" content="Tuition | Techniclarity" />
        <meta property="og:image" content={woman} />
        <meta name="twitter:title" content="Tuition | Techniclarity" />
        <meta name="twitter:description" content="Get personalised support from someone who's built startups before." />
        <meta name="twitter:image" content={woman} />
        <meta name="twitter:image:alt" content="Line drawing" />
      </Helmet>
      <div
        className="container-fluid position-relative vh-100 d-flex pt-5 align-items-start align-items-lg-center"
      >
        <div className="row">
          <div className="col-lg-6 col-12 order-1 order-lg-0 position-relative d-flex justify-content-center align-items-center">
            <img
              src={pinkCircle}
              alt="Pink circle background"
              className="w-xs-100 w-sm-75 w-md-50 w-lg-100"
            />
            <img
              src={hand}
              alt="Line drawing of a hand"
              className="w-xs-100 w-sm-75 w-md-50  w-lg-75 position-absolute"
            />
          </div>
          <div className="col-12 mb-lg-0 mb-5 col-lg-6 order-0 order-lg-1 d-flex flex-column align-items-lg-center justify-content-center">
            <h2 className="text-center">Tuition</h2>
            <h1 className="text-center">
              Working
              {' '}
              <span>Together</span>
              {' '}
              1:1
            </h1>
            <h3 className="text-center">
              <span>Your chance</span>
              {' '}
              to get personalised support from someone who&apos;s been there and done that.
            </h3>
            <div className="text-center">
              <Button variant="red" className="btn-lg" href="#buy-now">BOOK NOW</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 mb-5">
        <h3 className="text-center"><span>Does this sound like you?</span></h3>
        <div className="p-4 mb-5 ">
          <h3 className="text-center">
            I&apos;m committed to making this idea real
          </h3>
          <h3 className="text-center">
            I want to be able to lead my startup with confidence
          </h3>
          <h3 className="text-center">
            I&apos;m done standing on the sidelines
          </h3>
          <h3 className="text-center">
            I want to not be scared of tech anymore
          </h3>
          <h3 className="text-center">
            I&apos;m ready to invest in my business
          </h3>
        </div>
      </div>

      <div
        className="container-fluid position-relative p-lg-5 pb-5 d-flex align-items-center"
      >
        <div className="row">
          <div className="col-lg-6 col-12 order-1 order-lg-0 ">
            <h1>
              You’re closer to
              {' '}
              {' '}
              <span>overcoming the barriers </span>
              {' '}
              than you think.
            </h1>
            <p>
              Imagine introducing yourself as the founder of a tech startup.
              Your company is growing, it’s got investment, a product you can show
              off to people and it’s something you can be really proud of.
              {' '}
            </p>
            <p>
              So, what’s holding you back from being there now?
            </p>
            <p>
              You’re working harder than ever before so I&apos;m going to guess
              it&apos;s fear that&apos;s stopping you.
              A sure-fire way to overcome fear is by levelling up your know-how in a safe,
              non-judgemental environment.
            </p>
            <div>
              <Button variant="red" className="btn-lg" href="#buy-now">BOOK NOW</Button>
            </div>
          </div>
          <div className="col-lg-6 col-12 order-0 order-lg-1 position-relative d-flex justify-content-center align-items-center">
            <img
              src={pinkCircle}
              alt="Pink circle background"
              className="w-100"
            />
            <img
              src={woman}
              alt="Line drawing of a woman in a suit jacket with her hand on her hip"
              className="position-absolute h-lg-100 h-xs-75"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid p-5 bg-cyan ">
        <div className="row w-xl-75 mx-auto align-items-center justify-content-space-between">
          <div className="col-xl-6 col-lg-4 col-12">
            <h3 className="text-white">
              Meet your
              {' '}
              <span>tutor</span>
            </h3>
            <h2 className="text-white">
              It can feel like you are on your own in this entrepreneurial
              journey but by working with me you’ll have a
              {' '}
              <span>cheerleader, teacher and guide </span>
              {' '}
              by your side.
            </h2>
            <Button variant="red" className="btn-lg" href="/about">READ MORE</Button>
          </div>
          <div className="col-xl-6 col-lg-8 col-12 pt-lg-0 pt-5 d-flex justify-content-center align-items-center">
            <ReactPlayer url="https://vimeo.com/470963117" />
          </div>
        </div>
      </div>

      <div className="container p-5 mt-5">
        <div className="row justify-content-center ">
          <div className="col-lg-6 col-12 text-center">

            <h3>
              Nothing in life is to be feared, it is only to be understood. Now is the time to
              {' '}
              {' '}
              <span>understand more </span>
              {' '}
              so that we may
              {' '}
              {' '}
              <span>fear less.</span>
            </h3>
            <p>-  Marie Curie</p>
          </div>
        </div>
      </div>

      <a id="buy-now" />
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-lg-6 col-12 p-lg-5 py-5 px-3">
            <h2>01</h2>
            <h1>
              Power
              {' '}
              {' '}
              <span>Hour</span>
            </h1>
            <p className="mb-3">
              Do you feel like you’re googling for hours to get the answers you need?
              Then when you finally get one you understand, you still aren&apos;t
              confident in it. A power hour is for you.
            </p>
            <p className="mb-3">
              Come with a specific question and in one hour
              we&apos;ll work through the answer together.
              At the end you’ll have an answer to that
              question that’s been holding you back for months.
            </p>
            <p><b>You might be asking:</b></p>
            <p className="mb-0">Where should I start with my product strategy?</p>
            <p className="mb-0">
              How do I figure out if this product is worth pursuing?
            </p>
            <p className="mb-0">
              How do I best work with my CTO or developer?
            </p>
            <p className="mb-0">
              Is this the best programming language to use?
            </p>
            <p className="mb-0">
              What can I do to make sure my product is successful?
            </p>
            <p className="mb-0">
              How much will it cost to build an app?
            </p>
            <h2 className="mt-5">ONE HOUR</h2>
            <h1>£100</h1>
            <Button variant="red" className="btn-lg" as="a" onClick={() => openPopupWidget({ url: 'https://calendly.com/learning-about-technology/power-hour' })}>BOOK NOW</Button>
          </div>
          <div className={`w-100 ${styles.divider} d-lg-none`} />
          <div className="col-lg-6 col-12 p-lg-5 py-5 px-3">
            <h2>02</h2>
            <h1>
              {' '}
              Sanity
              {' '}
              {' '}
              <span>Check</span>
            </h1>
            <p className="mb-3">
              You’ve done the work and the research, but you don&apos;t have the
              professional eye to feel confidence in the output.
              {' '}
            </p>
            <p className="mb-3">
              In one hour we’ll work through your idea, strategy, specification or roadmap.
              With an expert eye, I&apos;ll validate your work and
              give you my professional opinion on places for improvement.
              {' '}
            </p>
            <p>
              You’ll leave feeling confident in your work and the
              next steps and tweaks you might need to make.
            </p>
            <p><b>You might be asking:</b></p>
            <p className="mb-0">
              My developer&apos;s asking me for a specification,
              can you check what I&apos;ve done is right?
            </p>
            <p className="mb-0">
              I&apos;ve written a strategy, but I&apos;m not sure I&apos;ve thought of everything.
            </p>
            <p className="mb-0">
              I&apos;m recruiting a CTO, is this job specification
              going to get me the best people applying?
            </p>
            <p className="mb-0">
              I&apos;ve got this idea, is it possible?
            </p>
            <p className="mb-0">
              How do I know that this plan is right?
            </p>
            <p className="mb-0">
              What haven&apos;t I thought of?
            </p>
            <h2 className="mt-5">ONE HOUR</h2>
            <h1>£100</h1>
            <Button
              variant="red"
              className="btn-lg"
              as="a"
              onClick={() => openPopupWidget({ url: 'https://calendly.com/learning-about-technology/sanity-check' })}
            >
              BOOK NOW
            </Button>
          </div>
          <div className={`w-100 ${styles.divider} d-lg-none`} />
          <div className="col-lg-6 col-12 p-lg-5 py-5 px-3">
            <h2>03</h2>
            <h1>Masterclass</h1>
            <p className="mb-3">
              Are you feeling like you are ready to put your
              ideas into action? In one 4 hour session,
              I’ll guide you through a tailored workbook so that you can take the next
              step in your journey to launching your startup. This means you’ll wrap
              up the session having ticked that big scary tech task off of your to-do list.
            </p>
            <h2 className="mt-5">FOUR HOURS</h2>
            <h1>£500</h1>
            <Button
              variant="red"
              className="btn-lg"
              target="_blank"
              href="https://view.flodesk.com/pages/5f9c3ae8ca796f4d56d56932"
            >
              DOWNLOAD BROCHURE
            </Button>
          </div>
          <div className={`w-100 ${styles.divider} d-lg-none`} />
          <div className="col-lg-6 col-12 p-lg-5 py-5 px-3">
            <h2>04</h2>
            <h1>
              On-going
              {' '}
              <span>support</span>
            </h1>
            <p className="mb-3">
              You can call me your part-time CTO on retainer, advisor, tech
              expert or whatever you want (within reason) but basically this
              means I’ll be there for you, your business and your tech for as
              much or as little time as you want. With an expert on speed dial,
              nothing will hold you back.
            </p>
            <Button
              variant="red"
              className="btn-lg"
              target="_blank"
              href="https://view.flodesk.com/pages/5f9c43bbd722c9216eca9b61"
            >
              DOWNLOAD BROCHURE
            </Button>
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
            <h3 className="text-white">Hi I&apos;m Sophie</h3>
            <p className="text-white">
              Over the last decade I’ve built and launched products and startups.
              I’ve ridden the highs and the lows, so I’ve been in your shoes.
              I’ve taken everything I’ve learnt and packaged it up so that you
              can start your entrepreneurial journey. When I was a CTO, I saw
              first hand how many businesses never made it past the idea stage,
              all because there wasn’t enough tech support available.
              I’ve taught senior exec about their businesses&apos; digital transformations
              and even budding software developers how to build their first website.
              But now I think it’s high-time I support you because I know your idea is
              set for success and I can’t wait to help you set the foundations for your startup.
            </p>
          </div>
          <div className="col-md-6 col-12 p-lg-5 py-5 px-3 order-0 order-md-1 position-relative d-flex justify-content-center align-items-center">
            <img
              src={headshot}
              alt="Sophie, Techniclarity's founder laughing"
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
              {' '}
              <span>questions?</span>
              {' '}
              Send them over to:
            </p>
            <a href="mailto:tuition@techniclarity.co?subject=Question about Tuition">
              <p><b>tuition @techniclarity.co</b></p>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12 py-3">
            <div
              role="button"
              tabIndex={0}
              className="d-flex flex-row"
              onClick={() => { setFaqOneOpen(!faqOneOpen); }}
              onKeyDown={() => { setFaqOneOpen(!faqOneOpen); }}
            >
              {faqOneOpen ? <DashIcon size={iconSize} /> : <PlusIcon size={iconSize} />}
              <h2 className="pl-4">How does it work?</h2>
            </div>
            <Collapse in={faqOneOpen}>
              <div>
                <p>Once you book your time and make your payment it’s a three-step process.</p>
                <ol>
                  <li>
                    A week before your booking you’ll receive a questionnaire which gives me all
                    the information I need to make sure we can work together most efficiently.
                  </li>
                  <li>
                    We have the session, you leave full of clarity and
                    revved up to make progress in your startup.
                  </li>
                  <li>
                    In the following days, I’ll send over a full recap of what we worked on,
                    including any recommended resources, top tips and next steps.
                  </li>
                </ol>
              </div>
            </Collapse>
          </div>
          <div className="col-md-6 col-12 py-3">
            <div role="button" tabIndex={0} className="d-flex flex-row" onKeyDown={() => { setFaqTwoOpen(!faqTwoOpen); }} onClick={() => { setFaqTwoOpen(!faqTwoOpen); }}>
              {faqTwoOpen ? <DashIcon size={iconSize} /> : <PlusIcon size={iconSize} />}
              <h2 className="pl-4">Why should I work with you?</h2>
            </div>
            <Collapse in={faqTwoOpen}>
              <div>
                <p>
                  If you&apos;re looking for someone who will care for your startup
                  nearly as much as you do, then I&apos;m for you
                  I believe in creating more female-founded businesses. When I was a CTO
                  I kept seeing women stalled by lack of tech knowledge.
                  It felt like that knowledge was locked away, only for those in the know.
                  I don’t want your idea to get stalled in the same way.
                  It is my mission to support your growth.
                </p>
              </div>
            </Collapse>
          </div>
          <div className="col-md-6 col-12 py-3">
            <div role="button" tabIndex={0} className="d-flex flex-row" onKeyDown={() => { setFaqThreeOpen(!faqThreeOpen); }} onClick={() => { setFaqThreeOpen(!faqThreeOpen); }}>
              {faqThreeOpen ? <DashIcon size={iconSize} /> : <PlusIcon size={iconSize} />}
              <h2 className="pl-4">Who do you work with?</h2>
            </div>
            <Collapse in={faqThreeOpen}>
              <div>
                <p>
                  The clients that work with me are passionate, ambitious business owners,
                  who have a brilliant idea they just can’t wait to get out into the world.
                  The ideas they have range from apps to web platforms, from fintech to sextech.
                  Usually, they are aware of the lack of knowledge they have when it comes to tech,
                  but are so driven by their mission that they won’t stop until it’s complete.
                </p>
              </div>
            </Collapse>
          </div>
          <div className="col-lg-6 col-12 py-3">
            <div role="button" tabIndex={0} className="d-flex flex-row" onKeyDown={() => { setFaqFourOpen(!faqFourOpen); }} onClick={() => { setFaqFourOpen(!faqFourOpen); }}>
              {faqFourOpen ? <DashIcon size={iconSize} /> : <PlusIcon size={iconSize} />}
              <h2 className="pl-4">How soon can we start?</h2>
            </div>
            <Collapse in={faqFourOpen}>
              <div>
                <p>
                  For power hours or sanity checks, you can book a time that suits
                  you once you click on the Book Now buttons.
                  There are usually slots available in the next two weeks.
                </p>
                <p>
                  For masterclasses, I’ll send you over a selection of dates
                  once you have downloaded the brochure.
                  Normal availability is up to a month in advance.
                  If you are interested in on-going support,
                  it all depends on other client bookings.
                  Once you’ve downloaded the brochure and thought about how best we can work
                  together then we can chat about timelines.
                </p>
              </div>
            </Collapse>
          </div>
          <div className="col-md-6 col-12 py-3">
            <div role="button" tabIndex={0} className="d-flex flex-row" onKeyDown={() => { setFaqFiveOpen(!faqFiveOpen); }} onClick={() => { setFaqFiveOpen(!faqFiveOpen); }}>
              {faqFiveOpen ? <DashIcon size={iconSize} /> : <PlusIcon size={iconSize} />}
              <h2 className="pl-4">Can I change the time of my booking?</h2>
            </div>
            <Collapse in={faqFiveOpen}>
              <div>
                <p>
                  Power hours and sanity checks can be changed
                  up to 1 week before they are scheduled.
                  Any changes in the week before we are booked in will incur a rescheduling fee.
                </p>
                <p>
                  Masterclasses can be rearranged up to 2 weeks before they are scheduled.
                  Any changes after that date will incur a rescheduling fee.
                </p>
              </div>
            </Collapse>
          </div>
        </div>

      </div>

      <div className="container-fluid p-lg-5 py-5 bg-cyan">
        <h3 className="text-center text-white p-3">Ready to get started?</h3>
        <div className="text-center p-lg-3">
          <Button variant="red" className="btn-lg" href="#buy-now">BOOK NOW</Button>
        </div>
      </div>

      <div
        className="container-fluid position-relative d-flex align-items-center p-5"
      >
        <div className="row">
          <div className="col-md-6 col-12 position-relative d-flex justify-content-center align-items-center">
            <img
              src={greenDiamond}
              alt="Green diamond background"
              className="w-100"
            />
            <img
              src={rocket}
              alt="Line drawing of a rocket"
              className="h-xs-75 h-lg-50 w-75 position-absolute"
            />
          </div>
          <div className="col-md-6 col-12 d-flex flex-column justify-content-center">
            <h1 className="text-center">
              Looking for our
              {' '}
              <span>courses?</span>
            </h1>
            <div className="text-center">
              <Button variant="red" className="btn-lg" href="/course">FIND OUT MORE</Button>
            </div>
          </div>
        </div>
      </div>

      <Instagram />

    </>
  );
}

export default Tuition;
