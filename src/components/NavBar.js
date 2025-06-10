// NavBar.js
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import Logout from '../features/authentication/Logout';
import './NavBar.css'; // Import the custom CSS file

const NavBar = ({ itemId, itemName, val }) => {
  const [expanded, setExpanded] = useState(false);
  const { isAuthenticated } = useUser();

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const navbar = document.querySelector('.custom-navbar');

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (navbar) { // Ensure navbar exists before manipulating style
        if (prevScrollPos > currentScrollPos || currentScrollPos < 10) {
          navbar.style.transform = 'translateY(0)';
          navbar.classList.remove('navbar-hidden');
        } else {
          navbar.style.transform = 'translateY(-100%)';
          navbar.classList.add('navbar-hidden');
        }
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => setExpanded(!expanded);
  const closeNav = () => setExpanded(false);

  return (
    <Navbar
      className="custom-navbar"
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={handleToggle} // Use onToggle prop for Navbar
    >
      <Container fluid="xxl">
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo_n.jpg`}
            alt="IEEE Logo"
            className="navbar-logo"
          />
          <span className="navbar-title">IEEE CBIT</span> {/* Changed to IEEE CBIT for clarity */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-collapse" className="navbar-toggler-custom" />

        <Navbar.Collapse id="navbar-collapse" className="justify-content-end">
          <Nav className="align-items-lg-center nav-links-container">
            <Nav.Link href={`#${itemId}`} onClick={closeNav} className="nav-link-custom">
              {itemName}
            </Nav.Link>
            <Nav.Link href="#coreteam" onClick={closeNav} className="nav-link-custom">
              Core Team
            </Nav.Link>
            {val !== 'x' && (
              <Nav.Link href="#events" onClick={closeNav} className="nav-link-custom">
                Events
              </Nav.Link>
            )}
            <Nav.Link href="#contact1" onClick={closeNav} className="nav-link-custom">
              Contact Us
            </Nav.Link>
            {isAuthenticated && (
              <Nav.Link as={NavLink} to="/add-event" onClick={closeNav} className="nav-link-custom">
                Add Event
              </Nav.Link>
            )}
            {isAuthenticated ? (
              <Logout className="ms-lg-3 logout-button" onClick={closeNav} />
            ) : (
              <Nav.Link as={NavLink} to="/login" onClick={closeNav} className="nav-link-custom login-button">
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