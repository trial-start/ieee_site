import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
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
  const [image, setImage] = useState();
  const { createEvent, isLoading } = useCreateEvent();

  function handleFileUpload(e) {
    setImage(e.target.files[0]);
  }

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
      image,
      location,
      conductedBy,
    };
    if (title && description && date && location && conductedBy && image) {
      createEvent(newEvent);
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
      <Container className="mt-4">
        <NavBar />
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

              <Form.Group controlId="image">
                <Form.Label style={{ fontWeight: "bold" }} className="mt-2">
                  Event Image
                </Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Enter image url"
                  disabled={isLoading}
                  onChange={handleFileUpload}
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
                  <option value="robotics and automation society">
                    robotics and automation society
                  </option>
                  <option value="power and energy society">
                    power and energy society
                  </option>
                  <option value="women in engineering society">
                    women in engineering society
                  </option>
                  <option value="signal processing society">
                    signal processing society
                  </option>
                  <option value="computer society">computer society</option>
                  <option value="circuits and systems society">
                    circuits and systems society
                  </option>
                  <option value="education society">education society</option>
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

export default React.memo(CreateEventForm);
