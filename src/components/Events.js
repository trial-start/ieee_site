import React, { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import events from "../static/event_details"; // Import events data from JSON file
// import eventImage1 from "./event-image-1.jpg"; // Import your event images
// import eventImage2 from "./event-image-2.jpg";
// import "./Events.css"; // Import custom CSS file for styling
const imgs = ["temp.jpg"];

const Events = () => {
  const initialEventsToShow = 4;
  const [eventsToShow, setEventsToShow] = useState(initialEventsToShow);
  const [showFullDescription, setShowFullDescription] = useState(
    Array(events.length).fill(false)
  );

  const handleViewMore = () => {
    if (eventsToShow === initialEventsToShow) setEventsToShow(events.length);
    else setEventsToShow(initialEventsToShow);
  };

  const navigate = useNavigate();

  const handleClick = (index) => {
    navigate(`/events/${index}`);
  };

  const handleToggleDescription = (index) => {
    setShowFullDescription((prevShowFull) => {
      const newShowFull = [...prevShowFull];
      newShowFull[index] = !newShowFull[index];
      return newShowFull;
    });
  };

  const truncateDescription = (description, wordLimit, index) => {
    if (showFullDescription[index]) {
      return description;
    }
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " .....";
    }
    return description;
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
                <Card.Text onClick={() => handleToggleDescription(index)}>
                  {truncateDescription(event.description, 15, index)}
                </Card.Text>
                <Card.Text>Date: {event.date}</Card.Text>
                <Button variant="primary" onClick={() => handleClick(index)}>
                  Learn More
                </Button>
                {/* {showFullDescription[index] && (
                  <Button
                    className="event_margin"
                    onClick={() => handleToggleDescription(index)}
                  >
                    Show Less
                  </Button>
                )} */}
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
