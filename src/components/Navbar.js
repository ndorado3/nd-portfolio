import React from "react";
import "../Assets/css/Navbar.css";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="sm" variant="dark" sticky="top">
      <Navbar.Brand as={Link} to="/">
        Nd
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="style">
        <Nav className="mr-auto ">
          <Nav.Link as={Link} to="/about">
            about
          </Nav.Link>
          <Nav.Link as={Link} to="/projects">
            projects
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/resume">
            resume
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
