import React, {useState, useEffect} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserView,
  MobileView,
} from "react-device-detect";
import styles from '../styles/header.module.css'

import symbolLogo from '../assets/symbolLogo.png'
import textLogo from '../assets/textLogo.svg'
import facebookLogo from '../assets/facebookLogo.svg'
import instagramLogo from '../assets/instagramLogo.svg'
import cloudTop from '../assets/cloud-1.png'
import cloudBottom from '../assets/cloud-2.png'
import Burger from './Burger';

function Header({headerColor}) {
  const [collapsed, setCollapsed] = useState(true)
  const [scrolled, setScrolled]= useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 10 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  
  useEffect(() => {
    document.body.style.overflow = collapsed ? 'unset' : 'hidden';
  }, [collapsed ]);

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
  
  return (
    <>
    <BrowserView>
      <Navbar 
        className={`${scrolled ? styles.scrolled : null} w-100 d-flex justify-content-between align-items-start`}
        style={{backgroundColor: headerColor}}
        >
        <Navbar.Brand href="/" className="">
          <img
            src={textLogo}
            height={25}
            alt="Techniclarity logo"
          />
        </Navbar.Brand>
        <img
            src={symbolLogo}
            height={75}
            alt="Techniclarity logo"
            className={`${scrolled ? 'd-none' : 'd-flex'}`}
          />
        <Nav className="" navbar={false}>
          <Nav.Link href="tuition">Tuition</Nav.Link>
          <Nav.Link href="course">Course</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </BrowserView>
    <MobileView >
      <div className={`${scrolled ? styles.scrolled : null} ${collapsed ? null : 'vh-100'} d-flex flex-column bg-teal`}>
      <Navbar className="d-flex justify-content-between">
        <Navbar.Brand href="/" className="w-50">
          <img
            src={textLogo}
            className="w-100"
            alt="Techniclarity logo"
          />
        </Navbar.Brand>
        <Burger collapsed={collapsed} setCollapsed={() =>setCollapsed(!collapsed)}/>
      </Navbar>
      {collapsed ? null :
      <div className={`container flex-grow-1 d-flex justify-content-between flex-column pb-4 pt-3 ${styles.menu}`}>
          <img
            src={cloudTop}
            alt="Cloud Background"
            className="position-absolute h-25"
            style={{top:'10%', left:'50%'}}
          />
          <img
            src={cloudBottom}
            alt="Cloud Background"
            className="position-absolute h-25"
            style={{top:'40%', right:'45%'}}
          />
          <Nav className="row flex-column"  navbar={false}>
            <Nav.Link href="tuition" className={styles.link}>Tuition</Nav.Link>
            <Nav.Link href="course" className={styles.link}>Course</Nav.Link>
            <Nav.Link href="about" className={styles.link}>About</Nav.Link>
            <Nav.Link href="contact" className={styles.link}>Contact</Nav.Link>
          </Nav>
          <div className={`${styles.footer} row d-flex justify-content-between align-items-end`}>
            <div className="col-3 d-flex h-50">
              <a href="https://instagram.com/the.techniclarity">
              <img
                src={instagramLogo}
                alt="Instagram logo"
                className="img-fluid d-inline-block pr-2"
              />
              </a>
              <a href="https://facebook.com/the.techniclarity">
              <img
                src={facebookLogo}
                alt="Facebook logo"
                className="img-fluid d-inline-block pl-2"
              />
              </a>
            </div>
            <div className="col-3 d-flex ">
              <img
                src={symbolLogo}
                alt="Techniclarity logo"
                className="img-fluid"
              />
            </div>

          </div>
        </div>
      }
      </div>

      
    </MobileView>
    </>
  );
}

export default Header;
