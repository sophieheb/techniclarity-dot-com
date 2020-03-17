import React from 'react';
import '../styles/app.css';
import styles from '../styles/about.module.css';

import headshot from '../assets/headshot.jpg';


const About = () => ([
  <section className={`${styles.aboutBackground} container-fluid p-5`}>
    <h1>
      Techniclarity teaches female founders the tech skills they need to
      grow a thriving business.
    </h1>
  </section>,
  <section className="container-fluid">
    <div className="row">
      <div className="col-sm-6 px-5 my-auto">
        <h3>Hi, I&apos;m Sophie, Founder of Techniclarity</h3>
        <p>
          A cross-hatch of experience led me to found Techniclarity. I&apos;ve developed
          websites and apps, plus spent four years teaching senior execs about the
          digital transformation their businesses were going through.
        </p>
        <p>
          However, it was whilst wrapping up my first business that I had my
          light-bulb moment. I have seen first-hand how technology is  an enabler to
          entrepreneurship; but also how many people were turned away from the
          experience, simply because despite having an incredible idea, they lacked
          the technical fluency to turn it into action. I was inspired to help
          people without my sort of background, help themselves to gain a better
          understanding - clarity - of technological obstacles that they may face
          when starting up their own business.
        </p>
        <p>
          I realised how much founders without experience in technology are reliant
          on those with technical skills to create and grow their businesses. But it
          felt like those technical skills were still locked away, kept for a small
          group that were in the know. This gap meant founders were unable to set
          their technical vision appropriately which lead to lost money, lost time
          and sadly, failed businesses.
        </p>
        <p>
          With my background in technical education, partnered with my founder
          experience and breadth of technical knowledge I knew that I could provide
          budding entrepreneurs with the skills to move their ideas forward.
        </p>
      </div>
      <div className="col-sm-6 my-auto">
        <img src={headshot} className="img-fluid" alt="Headshot of Sophie Hebdidge, Founder Techniclarity" />
      </div>
    </div>
  </section>,


]
);

export default About;
