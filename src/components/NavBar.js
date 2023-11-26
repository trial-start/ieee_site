import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = ({ itemId, itemName, teamType, val }) => {
  const [expanded, setExpanded] = useState(false);

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
    <Navbar
      bg="dark"
      variant="dark"
      fixed="top"
      expand="lg"
      expanded={expanded}
      style={{ transition: "top 0.7s" }}
    >
      <Navbar.Brand>
        <Link to="/">
          <img
            src="images/logo_n.jpg"
            alt="IEEE Logo"
            style={{ width: "170px", height: "60px", marginLeft: "15px" }}
          />{" "}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto custom-nav">
          <Nav.Link href={`#${itemId}`} className="custom-margin">
            {itemName}
          </Nav.Link>
          <Nav.Link href="#coreteam" className="custom-margin">
            {teamType}
          </Nav.Link>
          {val !== "x" && (
            <Nav.Link href="#events" className="custom-margin">
              Events
            </Nav.Link>
          )}
          <Nav.Link href="#contact1" className="custom-margin">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
