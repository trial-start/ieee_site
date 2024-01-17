import React from "react";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

const NotFoundPage = ({ check = true }) => {
  return (
    <Container
      fluid
      className="vh-100 d-flex flex-column align-items-center justify-content-center"
    >
      <Row className="mb-4">
        <Col xs={12} className="text-center">
          <Alert variant="danger">
            <h1 className="display-4">
              Event{`${check === false ? "s" : ""}`} Not Found
            </h1>
            <p className="lead">
              The requested event{`${check === false ? "s" : ""}`} could not be
              found.
            </p>
          </Alert>
        </Col>
      </Row>
      {check && (
        <Row>
          <Col xs={12} className="text-center">
            <Link to="/">
              <Button variant="outline-primary">Go to Home</Button>
            </Link>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default NotFoundPage;
