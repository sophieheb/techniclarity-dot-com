import React from 'react';

import {
  HeartIcon, HeartFillIcon, RocketIcon, ThumbsupIcon, StarFillIcon, StarIcon,
} from '@primer/octicons-react';
import styles from '../styles/testimonials.module.css';

function Testimonials() {
  return (
    <div className="container-fluid pt-5">
      <h1 className="text-center">
        Happy
        <span>students</span>
      </h1>
      <div className="row flex-nowrap overflow-scroll py-5 " id="testimonials">
        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-9 mx-sm-3">

          <div className={`h-100 bg-purple p-5 rounded ${styles.testimonial} d-flex flex-column`}>
            <HeartIcon size={48} className="mb-3 mx-auto" />
            <p>
              &quot;Sophie brings an enormous amount of experience,
              expertise and excellence...&quot;
            </p>
            <p><b>Female Founder</b></p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-9 mx-sm-3">

          <div className={` h-100 bg-purple p-5 rounded ${styles.testimonial} d-flex flex-column`}>
            <StarFillIcon size={48} className="mb-3 mx-auto" />
            <p>&quot;Her company is well named - clarity is her key asset.&quot;</p>
            <p><b>Up and coming Founder</b></p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-9 mx-sm-3">

          <div className={` h-100 bg-purple p-5 rounded ${styles.testimonial} d-flex flex-column`}>
            <RocketIcon size={48} className="mb-3 mx-auto" />
            <p>
              &quot;She listens really carefully and responds to what you have actually said,
              not what &apos;everybody says&apos;
              or what she thought you would say or even what you think you said.&quot;
            </p>
            <p><b>Future Founder</b></p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-9 mx-sm-3">

          <div className={` h-100 bg-purple p-5 rounded ${styles.testimonial} d-flex flex-column`}>
            <HeartFillIcon size={48} className="mb-3 mx-auto" />
            <p>
              &quot;She completely understood what I was trying to achieve and has given me some
              tech options to explore that are much more realistic and cost-effective at
              this early stage than what I had in mind.
              I would never have got to those options on my own. &quot;
            </p>
            <p><b>Entrepreneur</b></p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-9 mx-sm-3">

          <div className={` h-100 bg-purple p-5 rounded ${styles.testimonial} d-flex flex-column`}>
            <StarIcon size={48} className="mb-3 mx-auto" />
            <p>
              &quot;She is so kind and really knowledgable not only about tech but
              about starting a business and she shares this knowledge so openly.&quot;
            </p>
            <p><b>Future Founder</b></p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-9 mx-sm-3">

          <div className={` h-100 bg-purple p-5 rounded ${styles.testimonial} d-flex flex-column`}>
            <ThumbsupIcon size={48} className="mb-3 mx-auto" />
            <p>
              &quot;I really recommend Techniclarity for any of your
              tech questions and conundrums.&quot;
            </p>
            <p><b>Founder of tomorrow</b></p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Testimonials;
