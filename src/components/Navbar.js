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
          <div className="hamburger" onClick={handleClick}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
           
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Resume"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Running Website"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Running Website
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Personal Story"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Personal Story
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Pay" className="nav-links" onClick={closeMobileMenu}>
                Pay
              </Link>
            </li>
          </ul> 
      </div>
      </nav>
  </header>
    </>

  )
}

export default Navbar
