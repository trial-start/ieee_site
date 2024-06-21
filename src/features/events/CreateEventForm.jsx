import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import { useCreateEvent } from "./useCreateEvent";
import toast from "react-hot-toast";

const CreateEventForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [conductedBy, setConductedBy] = useState("");
  const [customConductedBy, setCustomConductedBy] = useState("");
  const [image, setImage] = useState();
  const { createEvent, isLoading } = useCreateEvent();

  function handleFileUpload(e) {
    const imgArr = [];
    for (let i = 0; i < e.target.files.length; i++) {
      imgArr.push(e.target.files[i]);
    }
    setImage(imgArr);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title,
      description,
      date,
      image,
      location,
      conductedBy: conductedBy === "other" ? customConductedBy : conductedBy,
    };
    if (title && description && date && location && (conductedBy || customConductedBy) && image) {
      createEvent(newEvent);
      setTitle("");
      setDescription("");
      setDate("");
      setLocation("");
      setConductedBy("");
      setCustomConductedBy("");
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", alignContent: "center", marginTop: "100px" }}>
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
                <Form.Label style={{ fontWeight: "bold", textAlign: 'justify'}} className="mt-2">
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
                  accept="image/*"
                  onChange={handleFileUpload}
                  multiple
                  name="images[]"
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
                  <option value="Robotics and Automation Society">Robotics and Automation Society</option>
                  <option value="Power and Energy Society">Power and Energy Society</option>
                  <option value="Women in Engineering Society">Women in Engineering Society</option>
                  <option value="Signal Processing Society">Signal Processing Society</option>
                  <option value="Computer Society">Computer Society</option>
                  <option value="Circuits and Systems Society">Circuits and Systems Society</option>
                  <option value="Education Society">Education Society</option>
                  <option value="Other">Other</option>
                </Form.Control>
              </Form.Group>

              {conductedBy === "other" && (
                <Form.Group controlId="customConductedBy">
                  <Form.Label style={{ fontWeight: "bold" }} className="mt-2">
                    Please specify
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter who conducted the event"
                    value={customConductedBy}
                    disabled={isLoading}
                    onChange={(e) => setCustomConductedBy(e.target.value)}
                  />
                </Form.Group>
              )}

              <Button className="mt-3" variant="primary" disabled={isLoading} type="submit">
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







