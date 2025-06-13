import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../components/SpinnerMini";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <Container style={{ marginTop: "120px" }}>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={5}>
          <Card
            style={{
              width: "100%",
              maxWidth: "420px",
              margin: "0 auto",
              padding: "30px",
              borderRadius: "16px",
              backgroundColor: "#161b22",
              boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
              color: "#f0f6fc",
            }}
          >
            <div className="text-center mb-4">
              <Link to="/">
                <img
                  src={`${process.env.PUBLIC_URL}/images/ieee_cbit_logo.jpeg`}
                  alt="Logo"
                  className="rounded-circle mb-3"
                  width="90"
                  height="90"
                  style={{ border: "2px solid #30363d" }}
                />
              </Link>
              <h3 className="text-white">Login</h3>
            </div>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  disabled={isLoading}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    backgroundColor: "#21262d",
                    color: "#f0f6fc",
                    border: "1px solid #30363d",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="password" className="mt-3">
                <Form.Label className="text-light">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  disabled={isLoading}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    backgroundColor: "#21262d",
                    color: "#f0f6fc",
                    border: "1px solid #30363d",
                  }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 mt-4 fw-bold"
                style={{
                  backgroundColor: "#238636",
                  border: "none",
                  fontWeight: "500",
                }}
              >
                {!isLoading ? "Login" : <SpinnerMini />}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
