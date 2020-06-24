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

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link ml-auto"  href="https://view.flodesk.com/pages/5ef34f1c08344d002685bdd2">Freebie</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link ml-auto" to="product-launchpad">Product Launchpad</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="tuition">Tuition</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link" to="about">About</Link>
              </li>
            </ul>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>


        <Switch>
          <Route path="/product-launchpad">
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
