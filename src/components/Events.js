import React, { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import allEvents from "../static/event_details";
import { HiTrash } from "react-icons/hi2";
import { useEvents } from "../features/events/useEvents";
import Spinner from "./Spinner";
import EventButtonIcon from "./EventButtonIcon";
import { useUser } from "../features/authentication/useUser";
import { useDeleteEvent } from "../features/events/useDeleteEvent";

const imgs = ["temp.jpg"];

const Events = ({ by = "" }) => {
  const { isLoading, events: allEvents } = useEvents();
  const { isAuthenticated } = useUser();
  const { isDeleting, deleteEvent } = useDeleteEvent();

  allEvents ?? <div>Event not found</div>;

  // console.log(error);
  // console.log(events1);
  // console.log("sushanth");
  const events =
    by === ""
      ? allEvents
      : allEvents?.filter((event) => event.conductedBy === by);

  const initialEventsToShow = 3;
  const [eventsToShow, setEventsToShow] = useState(initialEventsToShow);
  const [showFullDescription, setShowFullDescription] = useState(
    Array(events?.length).fill(false)
  );

  const handleViewMore = () => {
    if (eventsToShow === initialEventsToShow) setEventsToShow(events.length);
    else setEventsToShow(initialEventsToShow);
  };

  const handleDelete = (id) => {
    deleteEvent(id);
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
      return words?.slice(0, wordLimit).join(" ") + " .....";
    }
    return description;
  };

  if (isLoading || isDeleting) return <Spinner />;

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
                <Card.Text>Conducted By : {event.conductedBy}</Card.Text>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="primary"
                    onClick={() => handleClick(event.id)}
                  >
                    Learn More
                  </Button>

                  {isAuthenticated && (
                    <EventButtonIcon onClick={() => handleDelete(event.id)}>
                      <HiTrash />
                    </EventButtonIcon>
                  )}
                </div>
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

      {events.length > 3 && (
        <div className="text-center mt-3">
          <Button onClick={handleViewMore} variant="outline-primary">
            {eventsToShow === initialEventsToShow ? "View More" : "View Less"}
          </Button>
        </div>
      )}
    </>
  );
};

export default React.memo(Events);
