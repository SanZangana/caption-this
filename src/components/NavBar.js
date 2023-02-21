import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../logo.svg";
import styles from "../styles/NavBar.module.css";

// Eventuellt ha en NavBar där det står vilken
// användare man är inloggad med, tex "Signed in as: San Zangana"

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" sticky="top">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="45" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <i className="fas fa-house-user"></i>Home
            </Nav.Link>
            <Nav.Link>
              <i className="fas fa-file-signature"></i>Contact
            </Nav.Link>
            <NavDropdown title="My Account" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <i className="fas fa-user-plus"></i>Sign Up
              </NavDropdown.Item>
              <NavDropdown.Item>
                <i class="fas fa-person-walking-arrow-right"></i>Sign In
              </NavDropdown.Item>
              <NavDropdown.Item>
                <i class="fas fa-person-circle-minus"></i>Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
