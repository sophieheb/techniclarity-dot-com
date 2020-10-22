import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CookieConsent, { Cookies } from "react-cookie-consent";



import Tuition from './pages/Tuition';
import Home from './pages/Home';
import Course from './pages/Course';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {


  const [headerColor, setHeaderColour] = useState('#E1D5FA')

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
      const cookies = Cookies.get()
      console.log(cookies)
      Object.keys(cookies).forEach(cookie => {
        Cookies.remove(cookie)
      })
      const cookies2 = Cookies.get()
    console.log(cookies2)}} 
    enableDeclineButton 
    declineButtonText="No thanks" 
    setDeclineCookie={false}
    location="bottom"
    flipButtons
    buttonWrapperClasses='d-flex'
    style={{ background: "#0B807F"}}
    declineButtonClasses="bg-yellow text-blue"
    declineButtonStyle={{width: 'auto', 'border-radius': '23px', padding: '0.15rem 3rem'}}
    buttonClasses="bg-cyan text-white"
    buttonStyle={{width: 'auto', 'border-radius': '23px', padding: '0.15rem 3rem'}}
    contentStyle= {{display: 'flex', }}
    ><h2>We use cookies to improve your experience on our site. By using our site you consent to cookies. <a href="/cookie" className="text-white" style={{'text-decoration-line': 'underline'}} >Learn more</a></h2></CookieConsent>
  </>
  );
}

export default App;
