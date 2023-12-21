import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Footer = () => {
  const [isContactFormVisible, setContactFormVisible] = useState(false);

  const toggleContactForm = () => {
    setContactFormVisible((prevVisible) => !prevVisible);
  };
  return (
    <footer className="footer_parent" id="contact1">
      <Container>
        <Row>
          <Col sm={4} className="cbit_map_parent">
            <iframe
              className="cbit_map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.410749434572!2d78.31734661433356!3d17.392064807249177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb94eba8ad7c87%3A0xb78f51ed556f7cc5!2sChaitanya+Bharathi+Institute+of+Technology!5e0!3m2!1sen!2sin!4v1565501761816!5m2!1sen!2sin"
              width="250"
              height="250"
              allowFullScreen
              title="Google Maps"
            ></iframe>
            <a href="https://www.cbit.ac.in/" className="cbit_contact">
              <p>Chaitanya Bharathi Institute Of Technology</p>
              <p>Gandipet, Hyderabad</p>
            </a>
          </Col>
          <Col sm={4}>
            <h3>IEEE CBIT</h3>
            <a href="/#about" className="footer-link">
              About
            </a>
            <br />
            {/* <a href="/#coreteam" className="footer-link">
              Team
            </a> */}
            <Link to="/#coreteams" className="footer-link">
              team
            </Link>
            <br />
            <Link to="/#events" className="footer-link">
              Events
            </Link>
          </Col>
          <Col sm={4}>
            <h3>GET IN TOUCH</h3>
            <a href="mailto:cbit_ieee@gmail.com" className="footer-link">
              <i className="fas fa-envelope-square"></i> Email
            </a>
            <br />
            <a
              href="https://www.facebook.com/freaking.techies.cbit"
              className="footer-link"
            >
              <i className="https://www.facebook.com/ieeecbit?mibextid=ZbWKwL"></i>{" "}
              Facebook
            </a>
            <br />
            <a
              href="https://instagram.com/ieee_cbit?igshid=NzZlODBkYWE4Ng=="
              className="footer-link"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <br />
            <a href="https://github.com/ieee_cbit" className="footer-link">
              <i className="fab fa-github"></i> GitHub
            </a>
            <br />
            <a
              href="https://x.com/IeeeCbit?t=IERGxoAIdJ2X3SxuLZngGg&s=09"
              className="footer-link"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </Col>
          <Col sm={12} className="text-center mt-3">
            <h3
              onClick={toggleContactForm}
              // className="contact-form-toggle"
              // data-tip="Click to fill the form"
              data-tooltip-id="my-tooltip"
              // data-tooltip-content="Hello world!"
            >
              Contact Form
            </h3>
            <Tooltip id="my-tooltip">
              {isContactFormVisible
                ? "Click to close the form"
                : "Click to fill the form"}
            </Tooltip>

            {/* {isHovered && (
              <Tooltip id="my-tooltip">Click to fill the form</Tooltip>
            )} */}
            {isContactFormVisible && <ContactForm />}
          </Col>
          {/* <ContactForm /> */}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
