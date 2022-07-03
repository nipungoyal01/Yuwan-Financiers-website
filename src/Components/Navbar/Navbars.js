import React, { useState } from 'react'
import { Navbar, Nav, Container, NavDropdown, ButtonGroup, Dropdown, Button} from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../img/Logo.jpg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
/**
* @author
* @function Navbars
**/

const Navbars = (props) => {
 
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
  
    
      <Navbar expanded={expanded} className={nav ? 'navDiv navbar-scroll-color' : 'navDiv'} className={navbar ? 'navDiv navbar-scroll-margin' : 'navDiv'}fixed="top" expand="lg">
    <Container fluid>
    <NavLink to="/" className="navbar">
    <a className="navbar-brand">
    <img src={Logo} height="60" alt="Yuwan Financiers"></img>
    </a>
    </NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setTimeout(() => {setExpanded(expanded ? false : "expanded")}, 200)}></Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="navbar">
    <NavLink exact to="/" className="navLink" activeClassName="activeNavLink" onClick={() => setTimeout(() => {setExpanded(false)}, 200)}>Home</NavLink>
    <NavLink to="/about" className="navLink" activeClassName="activeNavLink" onClick={() => setTimeout(() => {setExpanded(false)}, 200)}>About Us</NavLink>
    
    
    <li id="loans" className="navLink" activeClassName="activeNavLink" className="dropdown"><a>Loans<span className="caret"></span></a>
    <ul className="dropdown-menu">
    <li id="sub-dropdown" className="dropdown" activeClassName="activeNavLink"><NavLink to="/vehicle"><a>Vehicle Loan<span ></span></a></NavLink>
   <ul id="sub-dropdown-menu" className="dropdown-menu">
   <li activeClassName="activeNavLink"><NavLink to="/vehicle/two-wheeler" ><a>Two Wheeler</a></NavLink></li>
   <li activeClassName="activeNavLink"><NavLink to="/vehicle/three-wheeler"><a>Three Wheeler</a></NavLink></li>
   <li activeClassName="activeNavLink"><NavLink to="/vehicle/four-wheeler"><a>Four Wheeler</a></NavLink></li>
   <li activeClassName="activeNavLink"><NavLink to="/vehicle/heavy-vehicle"><a>Heavy Vehicles</a></NavLink></li>
   <li activeClassName="activeNavLink"><NavLink to="/vehicle/electric-vehicle"><a>Electric Vehicles</a></NavLink></li>
   </ul>
   </li>
    <li activeClassName="activeNavLink"><NavLink to="/mortage"><a>Mortage Loan</a></NavLink></li>
    
    <li id="sub-dropdown" className="dropdown"><NavLink to="/gold"><a>Gold Loan<span className="glyphicon glyphicon-chevron-right"></span></a></NavLink>
    <ul id="sub-dropdown-menu" className="dropdown-menu">
   <li activeClassName="activeNavLink"><NavLink to="/goldloan"><a>Gold Loan</a></NavLink></li>
   <li activeClassName="activeNavLink"><NavLink to="/silverloan"><a>Silver Loan</a></NavLink></li>
   </ul>
   </li>
    <li activeClassName="activeNavLink"><NavLink to="/personal"><a>Personal Loan</a></NavLink></li>
    </ul>
    </li>
   
    <NavLink to="/blogs" className="navLink" activeClassName="activeNavLink" onClick={() => setTimeout(() => {setExpanded(false)}, 200)}>Blogs</NavLink>
    <NavLink to="/emicalculator" className="navLink" activeClassName="activeNavLink" onClick={() => setTimeout(() => {setExpanded(false)}, 200)}>EMI Calculator</NavLink>
    <NavLink to="/contact" className="navLink" activeClassName="activeNavLink" onClick={() => setTimeout(() => {setExpanded(false)}, 200)}>Contact Us</NavLink>
    
    </Nav>
    <div className="social-handles">
    <div className="social-icons">
    {renderIconListItems()}
    </div>
    </div>
    </Navbar.Collapse>
 
  
  </Container>
</Navbar>
 

  

  
  </>
  )
}


export default Navbars