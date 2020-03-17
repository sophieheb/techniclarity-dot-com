import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import * as Sentry from '@sentry/browser';
import '../styles/app.css';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errored, setError] = useState(false);

  const sendEmail = (e) => {
    setSubmitting(true);
    e.preventDefault();

    emailjs.sendForm('sendgrid', 'tuition_form', e.target, 'user_ji8184bYW5twLGDRjDGqC')
      .then(() => {
        setSubmitted(true);
      }, (error) => {
        setError(true);
        Sentry.captureException(error.text);
      });
  };

  if (submitted) {
    return <h3>Thanks for getting in touch, you&apos;ll be hearing from us soon.</h3>;
  }
  return (
    <form className="tuition-form" onSubmit={sendEmail}>
      <input placeholder="Name" name="name" type="text" aria-label="Name" required />
      <input placeholder="Email" name="email" type="email" aria-label="Email" required />
      <button type="submit" disabled={submitting}>{submitting ? 'Sending' : 'Send'}</button>
      <p className={`p-2 text-purple ${errored ? '' : 'hidden'}`}>Woops, something went wrong, let&apos;s try again.</p>
    </form>
  );
};

export default ContactForm;
