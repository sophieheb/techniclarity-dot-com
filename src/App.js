import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
  );
}

export default App;
