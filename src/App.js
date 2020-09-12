import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Tuition from './pages/Tuition';
import Home from './pages/Home';
import Course from './pages/Course';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

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
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home setHeaderColour={(color)=> setHeaderColour(color)} />
        </Route>
      </Switch>
      <Footer/>
      </div>
  </Router>
  );
}

export default App;
