// NavBar.js
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Logout from "../features/authentication/Logout";
import "./NavBar.css";

const NavBar = ({
  hideCoreTeam,
  hideEvents,
  hideContactUs,
  additionalLinks = [],
}) => {
  const [expanded, setExpanded] = useState(false);
  const { isAuthenticated } = useUser();
  const location = useLocation(); // Get the current route

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const navbar = document.querySelector(".custom-navbar");

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (navbar) {
        if (prevScrollPos > currentScrollPos || currentScrollPos < 10) {
          navbar.style.transform = "translateY(0)";
          navbar.classList.remove("navbar-hidden");
        } else {
          navbar.style.transform = "translateY(-100%)";
          navbar.classList.add("navbar-hidden");
        }
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => setExpanded(!expanded);
  const closeNav = () => setExpanded(false);

  const isHomePage = location.pathname === "/";
  const isAddEventPage = location.pathname === "/add-event";
  const isEventsPage = location.pathname.startsWith("/events");

  return (
    <Navbar
      className="custom-navbar"
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={handleToggle}
    >
      <Container fluid="xxl">
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo_n.jpg`}
            alt="IEEE Logo"
            className="navbar-logo"
          />
          <span className="navbar-title">IEEE CBIT</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-collapse"
          className="navbar-toggler-custom"
        />

        <Navbar.Collapse id="navbar-collapse" className="justify-content-end">
          <Nav className="align-items-lg-center nav-links-container">
            {isHomePage && (
              <>
                <Nav.Link href="#about" className="nav-link-custom">
                  About
                </Nav.Link>
                <Nav.Link href="#societies" className="nav-link-custom">
                  Societies
                </Nav.Link>
              </>
            )}
            {!isHomePage && !isAddEventPage && (
              <Nav.Link as={NavLink} to="/" className="nav-link-custom">
                Home
              </Nav.Link>
            )}
            {!isAddEventPage && !isHomePage && !isEventsPage && (
              <Nav.Link href="#about" className="nav-link-custom">
                About
              </Nav.Link>
            )}
            {!hideCoreTeam && (
              <Nav.Link href="#coreteam" className="nav-link-custom">
                Core Team
              </Nav.Link>
            )}
            {!hideEvents && !isEventsPage && (
              <Nav.Link href="#events" className="nav-link-custom">
                Events
              </Nav.Link>
            )}
            {isEventsPage && (
              <Nav.Link href="#event-details" className="nav-link-custom">
                About Event
              </Nav.Link>
            )}
            {!hideContactUs && (
              <Nav.Link href="#contact1" className="nav-link-custom">
                Contact Us
              </Nav.Link>
            )}
            {additionalLinks.map((link, index) => (
              <Nav.Link key={index} href={link.href} className="nav-link-custom">
                {link.name}
              </Nav.Link>
            ))}
            {isAuthenticated && (
              <Nav.Link
                as={NavLink}
                to="/add-event"
                onClick={closeNav}
                className="nav-link-custom"
              >
                Add Event
              </Nav.Link>
            )}
            {isAuthenticated ? (
              <Logout className="ms-lg-3 logout-button" onClick={closeNav} />
            ) : (
              <Nav.Link
                as={NavLink}
                to="/login"
                onClick={closeNav}
                className="nav-link-custom login-button"
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;