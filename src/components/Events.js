import React, { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import events from "../static/event_details"; // Import events data from JSON file
// import eventImage1 from "./event-image-1.jpg"; // Import your event images
// import eventImage2 from "./event-image-2.jpg";
// import "./Events.css"; // Import custom CSS file for styling
const imgs = ["temp.jpg"];

const Events = () => {
  const initialEventsToShow = 4;
  const [eventsToShow, setEventsToShow] = useState(initialEventsToShow);

  const handleViewMore = () => {
    if (eventsToShow === initialEventsToShow) setEventsToShow(events.length);
    else setEventsToShow(initialEventsToShow);
  };

  return (
    <>
      <Row className="events-container">
        {events.slice(0, eventsToShow).map((event, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="event-card">
              <Card.Img
                variant="top"
                src={`images/${imgs[0]}`}
                alt={`Event ${index + 1}`}
              />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text>Date: {event.date}</Card.Text>
                <Card.Text>Location: {event.location}</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-3">
        <Button onClick={handleViewMore} variant="outline-primary">
          {eventsToShow === initialEventsToShow ? "View More" : "View Less"}
        </Button>
      </div>
    </>
  );
};

export default Events;
