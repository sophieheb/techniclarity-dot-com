import React, {
  useEffect, Suspense, lazy,
} from 'react';
import BarLoader from 'react-spinners/BarLoader';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import womanMiddle from './assets/woman-about-middle.svg';

// const Tuition = lazy(() => import('./pages/Tuition'));
const Home = lazy(() => import('./pages/Home'));
const Course = lazy(() => import('./pages/Course'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Cookie = lazy(() => import('./pages/Cookie'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const Links = lazy(() => import('./pages/Links'));

function useAnalytics() {
  const location = useLocation();
  useEffect(() => {
    ReactPixel.init(process.env.REACT_APP_FACEBOOK_PIXEL);
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
  }, []);

  useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, [location]);
}

function Routes() {
  useAnalytics();
  return (

    <Switch>
      {/* <Route path="/tuition">
        <Tuition />
      </Route> */}
      <Route path="/course">
        <Course />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/privacy-policy">
        <Privacy />
      </Route>
      <Route path="/cookie-policy">
        <Cookie />
      </Route>
      <Route path="/terms-and-conditions">
        <TermsAndConditions />
      </Route>
      <Route path="/links">
        <Links />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>

  );
}

function App() {
  return (
    <>
      <Helmet>
        <title>Techniclarity</title>
        <meta name="description" content="Grow and scale your tech startup with education that lifts the mist around technology." />
        <meta property="og:url" content="techniclarity.co" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Grow and scale your tech startup with education that lifts the mist around technology." />
        <meta property="og:title" content="Techniclarity" />
        <meta property="og:image" content={womanMiddle} />
        <meta property="og:site_name" content="Techniclarity" />
        <meta name="twitter:title" content="Techniclarity" />
        <meta name="twitter:description" content="Grow and scale your tech startup with education that lifts the mist around technology." />
        <meta name="twitter:image" content={womanMiddle} />
        <meta name="twitter:image:alt" content="Line drawing" />
      </Helmet>
      <Router>
        <Suspense fallback={(
          <BarLoader
            height={10}
            color="#031799"
            width="100%"
          />
        )}
        >
          <div className="d-flex min-vh-100 flex-column justify-content-between">
            <Header />
            <Routes />
            <Footer />
          </div>
        </Suspense>
      </Router>
      <CookieConsent
        onDecline={() => {
          ReactPixel.revokeConsent();
          const cookies = Cookies.get();
          Object.keys(cookies).forEach((cookie) => {
            Cookies.remove(cookie);
          });
        }}
        enableDeclineButton
        declineButtonText="No thanks"
        setDeclineCookie={false}
        location="bottom"
        flipButtons
        buttonWrapperClasses="d-flex flex-wrap"
        style={{ background: '#0B807F' }}
        declineButtonClasses="bg-cyan text-white"
        declineButtonStyle={{ width: 'auto', 'border-radius': '23px', padding: '0.15rem 3rem' }}
        buttonClasses=" bg-yellow text-blue"
        buttonStyle={{ width: 'auto', 'border-radius': '23px', padding: '0.15rem 3rem' }}
        contentStyle={{ display: 'flex' }}
      >
        <h2>
          We use cookies to improve your experience on our site.
          By using our site you consent to cookies.
          {' '}
          <a href="/cookie-policy" className="text-white" style={{ 'text-decoration-line': 'underline' }}>Learn more</a>
        </h2>
      </CookieConsent>
    </>
  );
}

export default App;
