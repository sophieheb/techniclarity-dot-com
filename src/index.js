import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/custom.scss';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

// console.log(process.env.REACT_APP_SENTRY)
// Sentry.init({
//   dsn: process.env.REACT_APP_SENTRY,
//   integrations: [
//     new Integrations.BrowserTracing(),
//   ],

//   tracesSampleRate: 1.0,
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
