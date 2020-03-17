import React from 'react';
import Mailchimp from 'react-mailchimp-form';
import PropTypes from 'prop-types';

import '../styles/app.css';

const SignUp = ({ styles }) => (
  <Mailchimp
    action="https://techniclarity.us4.list-manage.com/subscribe/post?u=9dcf898d418554bdf89558426&amp;id=0b107a3de8"
    fields={[
      {
        name: 'FNAME',
        placeholder: 'Name',
        type: 'text',
        required: true,
      },
      {
        name: 'EMAIL',
        placeholder: 'Email',
        type: 'email',
        required: true,
      },
    ]}
    className={styles}
  />
);
SignUp.defaultProps = {
  styles: '',
};
SignUp.propTypes = {
  styles: PropTypes.string,
};
export default SignUp;
