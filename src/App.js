import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

import Tuition from './pages/Tuition';
import Home from './pages/Home';
import Course from './pages/Course';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';
import Cookie from './pages/Cookie';
import TermsAndConditions from './pages/TermsAndConditions';
import Links from './pages/Links';

function useAnalytics() {
  const location = useLocation();
  useEffect(() => {
    console.log("SETTING IT UP")
    ReactPixel.init(process.env.REACT_APP_FACEBOOK_PIXEL);
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
  }, []);

  useEffect(() => {
    console.log("SENDING A PAGE VIEW")
    ReactGA.send(['pageview', location.pathname]);
  }, [location]);
}

function Routes({ setHeaderColour }) {
  useAnalytics();
  return (
    <Switch>
      <Route path="/tuition">
        <Tuition />
      </Route>
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
        <Home setHeaderColour={(color) => setHeaderColour(color)} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

function App() {
  const [headerColor, setHeaderColour] = useState('#E1D5FA');

  return (
    <>
      <Router>
        <div className="d-flex min-vh-100 flex-column justify-content-between">
          <Header headerColor={headerColor} />
          <Routes setHeaderColour={setHeaderColour} />
          <Footer />
        </div>
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
          We use cookies to improve your experience on our site. By using our site you consent to cookies.
          <a href="/cookie-policy" className="text-white" style={{ 'text-decoration-line': 'underline' }}>Learn more</a>
        </h2>
      </CookieConsent>
    </>
  );
}

export default App;
