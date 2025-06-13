  import React, { useState } from "react";
  import { Container, Row, Col, Button } from "react-bootstrap";
  import ContactForm from "./ContactForm";
  import { Tooltip } from "react-tooltip";
  import {
    FaLink,
    FaEnvelope,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaUsers,
    FaCalendarAlt,
  } from "react-icons/fa";
  import { FiInfo } from "react-icons/fi";
  import "./Footer.css"; // We'll create this file for custom styles and animations

  const Footer = () => {
    const [isContactFormVisible, setContactFormVisible] = useState(false);

    const toggleContactForm = () => {
      setContactFormVisible((prevVisible) => !prevVisible);
    };

    return (
      <footer className="footer_parent" id="contact1">
        <Container>
          <Row className="justify-content-center text-center text-md-start">
            {/* Location and Map */}
            <Col md={4} className="mb-4 mb-md-0 cbit_map_parent">
              <h3 className="footer-heading">Visit Us</h3>
              <div className="map-container">
                <iframe
                  className="cbit_map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.914286701549!2d78.31880437430537!3d17.4116045018671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbef229b43e8d7%3A0xb304b4d6b6d6f51f!2sChaitanya%20Bharathi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" // Replaced with a real Google Maps embed URL
                  width="100%"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - CBIT"
                ></iframe>
              </div>
              <a
                href="https://www.cbit.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="cbit_contact footer-link mt-3 d-block"
              >
                <p>
                  Chaitanya Bharathi Institute Of Technology <br /> Gandipet,
                  Hyderabad
                </p>
              </a>
            </Col>

            {/* IEEE CBIT Navigation */}
            <Col md={4} className="mb-4 mb-md-0">
              <h3 className="footer-heading">IEEE CBIT</h3>
              <ul className="list-unstyled footer-links-list">
                <li>
                  <a href="/#about" className="footer-link">
                    <FiInfo size={22} className="me-2 footer-icon" />
                    About
                  </a>
                </li>
                <li>
                  <a href="/#coreteam" className="footer-link">
                    <FaUsers size={22} className="me-2 footer-icon" />
                    Team
                  </a>
                </li>
                <li>
                  <a href="/#events" className="footer-link">
                    <FaCalendarAlt size={22} className="me-2 footer-icon" />
                    Events
                  </a>
                </li>
              </ul>
            </Col>

            {/* Get In Touch */}
            <Col md={4}>
              <h3 className="footer-heading">Get In Touch</h3>
              <ul className="list-unstyled footer-links-list">
                <li>
                  <a
                    href="mailto:cbit_ieee@gmail.com"
                    className="footer-link"
                  >
                    <FaEnvelope size={22} className="me-2 footer-icon" />
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/ieee-cbit/mycompany/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <FaLinkedin size={22} className="me-2 footer-icon" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/ieee_cbit?igshid=NzZlODBkYWE4Ng=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <FaInstagram size={22} className="me-2 footer-icon" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://linktr.ee/ieee_cbitsb?fbclid=PAZXh0bgNhZW0CMTEAAaZXoXCD077Uo20aZ1Eqw16P3p41riLOMhUsLlLFj7FpZv89GyHWKMXiLNc_aem_ZmFrZWR1bW15MTZieXRlcw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <FaLink size={22} className="me-2 footer-icon" />
                    Linktree
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/IeeeCbit?t=IERGxoAIdJ2X3SxuLZngGg&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <FaTwitter size={22} className="me-2 footer-icon" />
                    Twitter
                  </a>
                </li>
              </ul>
            </Col>
          </Row>

          <hr className="footer-divider" />

          {/* Contact Form Toggle */}
          <Row>
            <Col sm={12} className="text-center mt-3">
              <Button
                className="contact-form-toggle-btn"
                onClick={toggleContactForm}
                data-tooltip-id="contact-form-tooltip"
              >
                Contact Form
              </Button>
              <Tooltip id="contact-form-tooltip" place="top" effect="solid">
                {isContactFormVisible
                  ? "Click to close the form"
                  : "Click to fill the form"}
              </Tooltip>

              {isContactFormVisible && (
                <div className="contact-form-fade-in mt-4">
                  <ContactForm />
                </div>
              )}
            </Col>
          </Row>

          <Row>
            <Col sm={12} className="text-center mt-4 pt-3">
              <p className="copyright-text">
                &copy; {new Date().getFullYear()} IEEE CBIT. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };

  export default Footer;

