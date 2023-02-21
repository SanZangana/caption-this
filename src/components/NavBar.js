import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../logo.svg";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

// Eventuellt ha en NavBar där det står vilken
// användare man är inloggad med, tex "Signed in as: San Zangana"

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" sticky="top">
      <Container>
        <NavLink to="/"></NavLink>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="45" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fas fa-house-user"></i>Home
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/contact"
            >
              <i className="fas fa-file-signature"></i>Contact
            </NavLink>
            <NavDropdown title="My Account" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/signup"
                >
                  <i className="fas fa-user-plus"></i>Sign Up
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/signin"
                >
                  <i class="fas fa-person-walking-arrow-right"></i>Sign In
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/signout"
                >
                  <i class="fas fa-person-circle-minus"></i>Sign Out
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
