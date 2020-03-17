import React from 'react';
import SignUp from './SignUp';

import '../styles/app.css';
import styles from '../styles/courses.module.css';

// TODO: Add this into bottom paragraph once we launch courses
// // <p className="w-75 mx-auto col-8">
// Do you still feel confused about the technology portion of your business
// even though you have already taken one of our online courses? Or perhaps
// you can’t find an online course anywhere that covers what you need.</p>


const Courses = () => ([
  <section className={`${styles.coursesBackground} p-5 container-fluid`}>
    <h1 className="text-wrap">Courses</h1>
    <h2 className="w-75">
      Coming Spring 2020, you&apos;ll be able to level up your tech know-how by
      taking one of our online courses.
    </h2>
  </section>,
  <section className="container-fluid">
    <section className="row">
      <section className="col-sm-6 p-5">
        <h3>
          The combination of new knowledge
          delivered via videos you can watch any time and hands-on exercises to
          tailor to your own business will take you from stumbling around with
          google, to an action plan in no time.
        </h3>
      </section>
      <section className="col-sm-6 p-5">
        <h4>Pop your name on the list and we&apos;ll keep in touch until we launch.</h4>
        <SignUp />
      </section>
    </section>
  </section>,
]
);

export default Courses;
