import React, { useState } from 'react'
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../img/Logo.jpg'
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

/**
* @author
* @function Navbar
**/

const Naavbar = (props) => {
 
  const [nav, setNav] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [expanded, setExpanded] = useState(false);
 
  const changeNavColor = () => {
    if(window.scrollY >= 100) {
      setNav(true)
    } else {
      setNav(false)
    }
  }

  const changeMargin = () => {
    if(window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeNavColor);
  window.addEventListener('scroll', changeMargin);

  const FooterIconListItems = [
    ["https://instagram.com/the_miracle_solutions", "fa-facebook-f"], ["https://instagram.com/the_miracle_solutions", "fa-twitter"],
    ["https://instagram.com/the_miracle_solutions", "fa-instagram"], ["https://instagram.com/the_miracle_solutions", "fa-linkedin-in"]
]
const renderIconListItems = () => {
  return (  FooterIconListItems.map((val, index) => { return <li className="social-media" key={index}> <a href={val[0]} target="_blank" rel="noopener noreferrer"> <i className="font-icons"className={`fab ${val[1]}`} aria-hidden="true"></i> </a> </li> }) )
}

  return (
    <>
 
    <nav expanded={expanded} className={nav ? 'navDiv navbar-scroll-color' : 'navDiv'} className={navbar ? 'navDiv navbar-scroll-margin' : 'navDiv'}fixed="top" expand="lg" className="navbar navbar-expand-lg navbar-light">
    <NavLink to="/" className="navbar">
    <a href="#" className="navbar-brand">
    <img src={Logo} height="60" alt="Yuwan Financiers"></img>
    </a>
    </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav mr-auto">

      <NavLink to="/">
      <li className="nav-item active" className="navLink" activeClassName="activeNavLink" onClick={() => setTimeout(() => {setExpanded(false)}, 200)}>
      <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
      </li>
      </NavLink>

      <NavLink to="/about">
      <li className="nav-item" className="navLink" activeClassName="activeNavLink" onClick={() => setTimeout(() => {setExpanded(false)}, 200)}>
      <a className="nav-link" href="#">About us</a>
      </li>
      </NavLink>

      <li className="nav-item dropdown" className="nav-item active">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Loans
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" className="navLink" activeClassName="activeNavLink"  href="#">Vehicle Loan</a>
          <a className="dropdown-item" href="#">Mortage Loan</a>
          <a className="dropdown-item" href="#">Gold Loan</a>
          <a className="dropdown-item" href="#">Personal Loan</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Insurance</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Emi Calculator</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Conferences & Events</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact us</a>
      </li>
      </ul>
      <div className="social-handles">
  <div className="social-icons">
        {renderIconListItems()}
    </div>
    </div>
  </div>
</nav>

  
  </>
  )
}


export default Naavbar