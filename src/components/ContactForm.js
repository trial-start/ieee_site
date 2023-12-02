import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
// import Verifier from "email-verifier";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if the domain is allowed (Gmail or cbit.org.in)
    const emailDomain = formData.email.split("@")[1];
    if (emailDomain !== "gmail.com" && emailDomain !== "cbit.org.in") {
      setAlert({
        variant: "danger",
        message: "Provide an email with gmail.com or cbit.org.in domains",
      });
      setTimeout(() => {
        setAlert(null);
      }, 5000);

      return;
    }

    // Check email existence (simplified example)
    // let verifier = new Verifier("your_email_verification_api_key");
    // verifier.verify("r@rdegges.com", (err, data) => {
    //   if (err) throw err;
    //   console.log(data);
    // });

    // const verifier = new Verifier("at_2UWtXClUPlx0FJnUngT97kLV4thFS"); // Replace with a valid API key
    // const result = await verifier.verify(formData.email);

    // if (!result.formatCheck || !result.mxCheck || !result.smtpCheck) {
    //   // Invalid email or doesn't exist
    //   setAlert({
    //     variant: "danger",
    //     message:
    //       "Invalid email address or email doesn't exist. Please provide a valid email.",
    //   });
    //   setTimeout(() => {
    //     setAlert(null);
    //   }, 5000);

    //   return;
    // }

    // Use your own Email.js template and service IDs
    const templateParams = {
      reply_to: formData.email,
      from_name: formData.name,
      message: formData.message,
    };

    // Use your own Email.js service ID and user ID
    emailjs
      .send(
        "service_tdrt432",
        "template_tb1c1ym",
        templateParams,
        "2pWMiPSLQ8WR-SfSF"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);

        // Show success alert for 5 seconds
        setAlert({ variant: "success", message: "Email sent successfully!" });
        setTimeout(() => {
          setAlert(null);
        }, 5000);
      })
      .catch((error) => {
        console.error("Email failed to send:", error);

        // Show failure alert for 5 seconds
        setAlert({
          variant: "danger",
          message: "Failed to send email. Please try again later.",
        });
        setTimeout(() => {
          setAlert(null);
        }, 5000);
      });

    // After sending the email, you may want to reset the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-5  text-white cust_bg_color"
      style={{ minHeight: "60vh" }}
    >
      <Container>
        <h1 className="text-center mb-5">Contact Us</h1>
        <div className="col-md-6 mx-auto">
          {alert && (
            <Alert
              variant={alert.variant}
              onClose={() => setAlert(null)}
              dismissible
            >
              {alert.message}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mb-3"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mb-3"
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mb-3"
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
