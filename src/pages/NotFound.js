import React from 'react';

import styles from '../styles/notFound.module.css';

import globe from '../assets/globe.webp';
import pinkGlobe from '../assets/pink-circle.svg';

function NotFound() {
  return (
    <div
      className="container-fluid position-relative h-100 d-flex align-items-center overflow-hidden flex-grow-1"
    >
      <img
        src={globe}
        alt="Globe Background"
        className={`position-absolute h-75 ${styles.globe}`}
      />
      <img
        src={pinkGlobe}
        alt="Globe Background"
        className={`position-absolute h-75 ${styles.pinkGlobe}`}
      />
      <div
        className="w-75 ml-5 pl-5 row"
      >
        <h1>
          <span>404</span>
          {' '}
          Whoops! This page doesn't exist.
        </h1>
        <p>
          You were probably looking for our
          <a href="/course">courses</a>
          {' '}
          or
          <a href="/tuition">tuition</a>
          . Or maybe you just want to head back to the
          <a href="/">homepage.</a>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
