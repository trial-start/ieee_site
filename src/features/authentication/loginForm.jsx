import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../components/SpinnerMini";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("sample2003test@gmail.com");
  const [password, setPassword] = useState("sample123");
  const { login, isLoading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  };

  return (
    <Container className="" style={{ marginTop: "200px" }}>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6} className="text-center">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/ieee_cbit_logo.jpeg`}
              alt="Logo"
              className="rounded-circle mb-4"
              width="100"
              height="100"
            />
          </Link>
          <h2>Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                disabled={isLoading}
                className="mt-3"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Control
                type="password"
                placeholder="Enter password"
                className="mt-3"
                value={password}
                disabled={isLoading}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-3 "
              style={{ width: "100px !important" }}
            >
              {!isLoading ? "Login" : <SpinnerMini />}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
