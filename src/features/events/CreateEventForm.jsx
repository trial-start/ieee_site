import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import Spinner from "../../components/Spinner";
// import styled from "styled-components";
import NavBar from "../../components/NavBar";
import { useCreateEvent } from "./useCreateEvent";
import toast from "react-hot-toast";

// const FullPage = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

const CreateEventForm = () => {
  const [title, setTitle] = useState("ewfwe");
  const [description, setDescription] = useState("dqewfewfefe");
  const [date, setDate] = useState("04-01-2024");
  const [location, setLocation] = useState("hyderabad");
  const [conductedBy, setConductedBy] = useState("");

  const { createEvent, isLoading } = useCreateEvent();

  // if (isLoading)
  //   return (
  //     <FullPage>
  //       <Spinner />
  //     </FullPage>
  //   );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title,
      description,
      date,
      location,
      conductedBy,
    };
    if (title && description && date && location && conductedBy) {
      createEvent(newEvent);
      console.log(newEvent);
      setTitle("");
      setDescription("");
      setDate("");
      setLocation("");
      setConductedBy("");
    } else {
      toast.error("Please fill all the fields");
    }
    // Handle form submission logic here
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        marginTop: "100px",
      }}
    >
      <Container className="mt-5">
        <NavBar itemId="societies" itemName="Socities" teamType="CoreTeam" />
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label style={{ fontWeight: "bold" }} className="mt-2">
                  Title
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  disabled={isLoading}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label style={{ fontWeight: "bold" }} className="mt-2">
                  Description
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter description"
                  value={description}
                  disabled={isLoading}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="date">
                <Form.Label style={{ fontWeight: "bold" }} className="mt-2">
                  Date
                </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter date"
                  value={date}
                  disabled={isLoading}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="location">
                <Form.Label style={{ fontWeight: "bold" }} className="mt-2">
                  Location
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  value={location}
                  disabled={isLoading}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="conductedBy">
                <Form.Label style={{ fontWeight: "bold" }} className="mt-2">
                  Conducted By
                </Form.Label>
                <Form.Control
                  as="select"
                  value={conductedBy}
                  disabled={isLoading}
                  onChange={(e) => setConductedBy(e.target.value)}
                >
                  <option value="">Select conducted by</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </Form.Control>
              </Form.Group>

              <Button
                className="mt-3 "
                variant="primary"
                disabled={isLoading}
                type="submit"
              >
                Create Event
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateEventForm;
