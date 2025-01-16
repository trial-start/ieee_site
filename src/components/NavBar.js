// NavBar.js

import React, { useState, useEffect } from "react";
import { Navbar as NB, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Logout from "../features/authentication/Logout";
import "../../src/NavBar.css";

const NavBar = ({ itemId, itemName, teamType, val }) => {
  const [expanded, setExpanded] = useState(false);
  const { isAuthenticated } = useUser();

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        // User is scrolling up
        document.querySelector("nav").style.top = "0";
      } else {
        // User is scrolling down
        document.querySelector("nav").style.top = "-100px";
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <NB
      className="custom-navbar" // Add the custom-navbar class
      bg="dark"
      variant="dark"
      fixed="top"
      expand="lg"
      expanded={expanded}
      style={{ transition: "top 0.7s" }}
    >
      <NB.Brand>
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo_n.jpg`}
            alt="IEEE Logo"
            className="navbar-brand-logo" // Add the navbar-brand-logo class
          />
        </Link>
      </NB.Brand>
      <NB.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
      <NB.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto custom-nav">
          <Nav.Link href={`#${itemId}`} className="custom-margin">
            {itemName}
          </Nav.Link>
          <Nav.Link href="#coreteam" className="custom-margin">
            {/* {teamType} */}
            Core
          </Nav.Link>
          {val !== "x" && (
            <Nav.Link href="#events" className="custom-margin">
              Events
            </Nav.Link>
          )}
          <Nav.Link href="#contact1" className="custom-margin">
            Contact Us
          </Nav.Link>
          {isAuthenticated && (
            <Nav.Link as={NavLink} to="/add-event" className="custom-margin">
              Add Event
            </Nav.Link>
          )}
          {isAuthenticated ? (
            <Logout />
          ) : (
            <Nav.Link as={NavLink} to="/login" className="custom-margin">
              Login
            </Nav.Link>
          )}
        </Nav>
      </NB.Collapse>
    </NB>
  );
};

export default NavBar;
