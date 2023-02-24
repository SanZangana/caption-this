import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="md" fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="45" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link>
              <i className="fas fa-house-user"></i>Home
            </Nav.Link>
            <Nav.Link>
              <i class="fas fa-person-walking-arrow-right"></i>Sign In
            </Nav.Link>
            <Nav.Link>
              <i className="fas fa-user-plus"></i>Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
