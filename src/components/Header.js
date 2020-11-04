import React, {useState, useEffect} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserView,
  MobileView,
} from "react-device-detect";
import styles from '../styles/header.module.css'

import symbolLogo from '../assets/symbol-logo.png'
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
    document.body.style.height = collapsed ? 'auto' : '100vh';
  }, [collapsed ]);

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
  
  return (
    <>
    <BrowserView>
      <div className="container-fluid bg-green">
        <a  href="https://view.flodesk.com/pages/5f4e822801a6b70026d79b01" className={`${styles.annoucementBarLink}`}>
        <h2 className={`text-center text-white m-0 p-2 ${styles.annoucementBar}`}>GET YOUR FREE GUIDE 'THE GLOSSARY OF TECH LINGO'</h2>
        </a>
      </div>
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
        <a href="/">
        <img
            src={symbolLogo}
            height={50}
            alt="Techniclarity logo"
            className={`${scrolled ? 'd-none' : 'd-flex'}`}
          />
          </a>
        <Nav className="" navbar={false}>
          <Nav.Link href="tuition">TUITION</Nav.Link>
          <Nav.Link href="course">COURSE</Nav.Link>
          <Nav.Link href="about">ABOUT</Nav.Link>
          <Nav.Link href="contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar>
    </BrowserView>
    <MobileView >
      <div className={`${scrolled ? styles.scrolled : null} ${collapsed ? null : 'vh-100'} w-100 d-flex flex-column bg-teal`}>
      <Navbar className="d-flex justify-content-between">
        <Navbar.Brand href="/" className="w-50">
          <img
            src={textLogo}
            className="w-100"
            alt="Techniclarity logo"
          />
        </Navbar.Brand>
        <Burger collapsed={collapsed} setCollapsed={() =>setCollapsed(!collapsed)} />
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
          <Nav className="row h-75 flex-column"  navbar={false}>
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
