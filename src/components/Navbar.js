import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import  "./navbar.css"
// import { Dropdown } from "flowbite-react";

function Navbar() {
  const [click, setClick]= useState(false);
  const handleClick =() => setClick(!click);
  const closeMobileMenu=() => setClick(false);

  
  return (
    <>
    <header class="header">
    <nav className="navbar">
        <div className="navbar-container">
        <Link to="/" className="navbar-logo">
            Home <i className="fa-solid fa-bars" />
        </Link>
        <div className="menu-icon">
      < i className={click ? "fas fa-times " :"fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active": "nav-menu"} ></ul>
       <li className="nav-item">Home</li>
      <Link to="/"className="nav-links" onClick={closeMobileMenu}></Link>

      <ul className={click ? "nav-menu active": "nav-menu"} ></ul>
       <li className="nav-item">Resume</li>
      <Link to="/Resume"className="nav-links" onClick={closeMobileMenu}></Link>

      <ul className={click ? "nav-menu active": "nav-menu"} ></ul>
       <li className="nav-item">Running Website</li>
      <Link to="/Running Website"className="nav-links" onClick={closeMobileMenu}></Link>

      <ul className={click ? "nav-menu active": "nav-menu"} ></ul>
       <li className="nav-item">Personal Story</li>
      <Link to="/Personal Story"className="nav-links" onClick={closeMobileMenu}></Link>

      <ul className={click ? "nav-menu active": "nav-menu"} ></ul>
       <li className="nav-item">Pay</li>
      <Link to="/Pay"className="nav-links" onClick={closeMobileMenu}></Link>
      <div class="hamburger">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
      </div>
      </div>
      </nav>
  </header>
    </>

  )
}

export default Navbar
