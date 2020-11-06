import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { createBrowserHistory } from 'history';
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

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {

  const [headerColor, setHeaderColour] = useState('#E1D5FA');

  useEffect(()=> {
    ReactPixel.init(process.env.REACT_APP_FACEBOOK_PIXEL)
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
    
  })

  return (
    <>
    <Router>
      <div className="d-flex min-vh-100 flex-column justify-content-between">
      <Header headerColor={headerColor}/>
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
        <Route exact path="/">
          <Home setHeaderColour={(color)=> setHeaderColour(color)} />
        </Route>
        <Route >
          <NotFound />
        </Route>
      </Switch>
      <Footer/>
      </div>
  </Router>
  <CookieConsent 
    onDecline={()=>{
      ReactPixel.revokeConsent();
      const cookies = Cookies.get()
      Object.keys(cookies).forEach(cookie => {
        Cookies.remove(cookie)
      })}} 
    enableDeclineButton 
    declineButtonText="No thanks" 
    setDeclineCookie={false}
    location="bottom"
    flipButtons
    buttonWrapperClasses='d-flex flex-wrap'
    style={{ background: "#0B807F"}}
    declineButtonClasses="bg-cyan text-white"
    declineButtonStyle={{width: 'auto', 'border-radius': '23px', padding: '0.15rem 3rem'}}
    buttonClasses=" bg-yellow text-blue"
    buttonStyle={{width: 'auto', 'border-radius': '23px', padding: '0.15rem 3rem'}}
    contentStyle= {{display: 'flex', }}
    ><h2>We use cookies to improve your experience on our site. By using our site you consent to cookies. <a href="/cookie-policy" className="text-white" style={{'text-decoration-line': 'underline'}} >Learn more</a></h2></CookieConsent>
  </>
  );
}

export default App;
