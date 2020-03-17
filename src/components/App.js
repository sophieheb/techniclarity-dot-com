import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import Tuition from './Tuition';
import Courses from './Courses';
import About from './About';
import TermsAndConditions from './TermsAndConditions';
import Privacy from './Privacy';

import navStyles from '../styles/nav.module.css';

import logo from '../assets/symbol-logo.png';

function App() {
  return (
    <div className="App background-green">
      <Router>
        <nav className="navbar navbar-expand-sm fixed-top navbar-light background-green">
          <Link className="navbar-brand" to="/">
            <img className={`${navStyles.navLogo}`} src={logo} alt="Logo" />
            Techniclarity
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-nav collapse navbar-collapse">
            <Link className="nav-item nav-link ml-auto" to="courses">Courses</Link>
            <Link className="nav-item nav-link" to="tuition">Tuition</Link>
            <Link className="nav-item nav-link" to="about">About</Link>
          </div>
        </nav>

        <Switch>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/tuition">
            <Tuition />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/termsandconditions">
            <TermsAndConditions />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
