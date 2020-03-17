import React from 'react';
import ContactForm from './ContactForm';
import '../styles/app.css';
import styles from '../styles/tuition.module.css';

// TODO: Add this into bottom paragraph once we launch courses
// // <p className="w-75 mx-auto col-8">
// Do you still feel confused about the technology portion of your business
// even though you have already taken one of our online courses? Or perhaps
// you can’t find an online course anywhere that covers what you need.</p>


const Tuition = () => (
  <div>
    <section className={`${styles.tuitionBackground} p-5 container-fluid`}>
      <h1 className="text-wrap">Tuition</h1>
      <h2 className="w-75">
        For ambitious aspiring entrepreneurs who want to level up their
        knowledge of technology.
      </h2>
    </section>
    <hr className="m-0" />
    <section className="p-5 background-white contaner">
      <p className="w-75 mx-auto">
        You’ve got lofty ideas and goals for your business. But each goal and
        each idea comes with lots of murky water that you have to wade through.
        Unfortunately, if you don’t have technical skills and you are creating a
        technical business, this water can be even thicker.
      </p>
      <p className="w-75 mx-auto">
        If you’ve ever tried to navigate this alone, you’ll know how tough it is.
        You’ll know that without increasing your technical knowledge you’ll never
        be able to achieve your goals or bring your ideas into real-life.
      </p>
    </section>
    <section className={`${styles.tuitionDivider} p-5 contaner-fluid`}>
      <div className="background-green box-shadow p-3 w-50 mx-auto text-center">
        <h3>
          The truth is a little personal help is all you need to have that
          magical moment where everything clicks into place.
        </h3>
        <h4>Scheduling virtual tuition with us will get you to clarity.</h4>
      </div>
    </section>
    <section className="p-5 background-white container-fluid">
      <p className="w-75 mx-auto col-8">
        Have you done personal research yet you are still asking yourself if
        this is the right price? Or if this part of your technical build should
        take this long?
      </p>
      <p className="w-75 mx-auto col-8">
        What about if building your first website is baffling and everyone you
        speak to keeps using words that sound like a foreign language? Maybe
        you’ve been told about this thing called social media, but don’t know
        where to begin.
      </p>
    </section>
    <hr className="m-0 col-12" />
    <section className="container-fluid">
      <section className="row">
        <section className="col-sm-6 p-5">
          <h3>
            With virtual tuition, you can ask any question you’ve been too
            scared to ask before. Our expert instructors are here to create space
            for you to expand your knowledge at your pace.
          </h3>
        </section>
        <section className="col-sm-6 p-5">
          <h4>Get in touch now to book your 15-minute exploration call.</h4>
          <p>
            We’ll work with you to create a tailored programme of education,
            that fits your learning needs, schedule and budget.
          </p>
          <ContactForm key="tuition" />
        </section>
      </section>
    </section>
  </div>
);

export default Tuition;
