import React from 'react';
import { MilestoneIcon } from '@primer/octicons-react';

import cloud from '../assets/cloud-2.webp';
import cloudPng from '../assets/cloud-2.png';

function Links() {
  return (
    <div
      className="container-fluid position-relative p-5 mt-5 d-flex align-items-center"
    >
      <div className="row">
        <div className="col-lg-6 col-12">
          <h2 className="text-center">Links</h2>
          <h1 className="text-center">What are you looking for?</h1>
          <div className="row d-flex align-items-center justify-content-center">

            <div className="col-sm-6 col-12 p-5 ">
              <h2 className="text-center">Newsletter</h2>
              <a href="/links/#footer-newsletter-signup">
                <p className="text-center">The Handbook</p>
              </a>
              <div className="text-center">
                <a href="/links/#footer-newsletter-signup">
                  <MilestoneIcon size={36} />
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-12 p-5 ">
              <h2 className="text-center">Freebie</h2>
              <a href="https://view.flodesk.com/pages/5f4e822801a6b70026d79b01">
                <p className="text-center">The Glossary of Tech Lingo</p>
              </a>
              <div className="text-center">
                <a href="https://view.flodesk.com/pages/5f4e822801a6b70026d79b01">
                  <MilestoneIcon size={36} />
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-12 p-5 ">
              <h2 className="text-center">Course</h2>
              <a href="/course">
                <p className="text-center">Product Launchpad</p>
              </a>
              <div className="text-center">
                <a href="/course">
                  <MilestoneIcon size={36} />
                </a>
              </div>
            </div>
            {/* <div className="col-sm-6 col-12 p-5 ">
              <h2 className="text-center">Tuition</h2>
              <a href="/tuition">
                <p className="text-center">Power Hours</p>
              </a>
              <div className="text-center">
                <a href="/tuition">
                  <MilestoneIcon size={36} />
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-12 p-5 ">
              <h2 className="text-center">Tuition</h2>
              <a href="/tuition">
                <p className="text-center">Sanity Checks</p>
              </a>
              <div className="text-center">
                <a href="/tuition">
                  <MilestoneIcon size={36} />
                </a>
              </div>
            </div> */}
            <div className="col-sm-6 col-12 p-5 ">
              <h2 className="text-center">Freebie</h2>
              <a href="https://bit.ly/3bPsl8w">
                <p className="text-center">Idea to Product Workbook</p>
              </a>
              <div className="text-center">
                <a href="https://bit.ly/3bPsl8w">
                  <MilestoneIcon size={36} />
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-12 p-5 ">
              <h2 className="text-center">Home</h2>
              <a href="/">
                <p className="text-center">The Website</p>
              </a>
              <div className="text-center">
                <a href="/">
                  <MilestoneIcon size={36} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 position-relative d-flex justify-content-center align-items-center">
          <picture>
            <source srcSet={cloud} type="image/webp" />
            <img
              src={cloudPng}
              alt="Cloud"
              className="w-100 "
            />
          </picture>

        </div>
      </div>
    </div>
  );
}

export default Links;
