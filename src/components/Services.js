import React from 'react';
import Button from 'react-bootstrap/Button';

import rocket from '../assets/line-rocket.svg';
import hand from '../assets/line-hand-right.svg';
import pinkCircle from '../assets/pink-circle.svg';
import greenDiamond from '../assets/green-diamond.svg';

function Services() {
  return (
    <div className="container py-5">
      <h1 className="text-center">Services</h1>
      <div className="row py-5">
        <div className="col-lg-6 order-lg-1 position-relative d-flex justify-content-center align-items-center">
          <img
            src={greenDiamond}
            alt="Green diamond background"
            className="w-100"
          />
          <img
            src={rocket}
            alt="Line drawing of a rocket"
            className="h-lg-50 h-75 position-absolute"
          />
        </div>
        <div className="col-lg-6 order-lg-0 my-auto">
          <h2>Course</h2>
          <h1>
            Product
            {' '}
            <span>Launchpad</span>
          </h1>
          <h3>
            The
            {' '}
            <span>starting point</span>
            {' '}
            you need to get your idea ready for your future technical team.
          </h3>
          <p>
            Product Launchpad is an online course that guides you
            through the first few steps of creating your app or
            web platform. You’ll learn all the knowledge you need
            to launch your product and put all that new know-how
            into practice at the same time.
          </p>
          <Button className="btn-lg" variant="red" href="/course">FIND OUT MORE</Button>
        </div>

      </div>
      <div className="row py-5">
        <div className="col-lg-6 position-relative d-flex justify-content-center align-items-center">
          <img
            src={pinkCircle}
            alt="Pink circle background"
            className="w-100"
          />
          <img
            src={hand}
            alt="Line drawing of a hand"
            className="w-lg-75 w-100 position-absolute"
          />
        </div>
        <div className="col-lg-6  my-auto ">
          <h2>Tuition</h2>
          <h1>
            Work
            {' '}
            <span>together</span>
            {' '}
            1:1
          </h1>
          <h3>
            Get
            {' '}
            <span>an expert take</span>
            {' '}
            on your tech plans and idea.
            {' '}
          </h3>
          <p>
            You can do all the research in the world, but sometimes
            all you need is an experienced pair of eyes to validate
            your thinking. You’ll leave with solutions to problems
            that have been holding you back, so that you can lead
            with confidence.
          </p>
          <Button className="btn-lg" variant="red" href="/tuition">FIND OUT MORE</Button>
        </div>

      </div>
    </div>

  );
}

export default Services;
