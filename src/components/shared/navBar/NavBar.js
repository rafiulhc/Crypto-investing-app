import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import './navBar.css';
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <div>
      <Navbar
        sticky="fixed-top"
        collapseOnSelect
        expand="lg"
        className="nav-design"
      >
        {/* <Link to="/home" className="nav-container">
          Home
        </Link> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-container" to="/projects">
              Projects
            </Link>
            <Link className="nav-container" to="/blogs">
              Blog
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-container" to="/resume">
              Resume
            </Link>
            <Link className="nav-container" to="/contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;