import React from 'react';
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
  return (
    <Router>
      <Header/>
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
          <Home />
        </Route>
      </Switch>
      <Footer/>
  </Router>
  );
}

export default App;
