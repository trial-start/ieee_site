import React, { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HiTrash } from "react-icons/hi2";
import { useEvents } from "../features/events/useEvents";
import Spinner from "./Spinner";
import EventButtonIcon from "./EventButtonIcon";
import { useUser } from "../features/authentication/useUser";
import { useDeleteEvent } from "../features/events/useDeleteEvent";
import EventNotFound from "../components/EventNotFound";

const imgs = ["temp.jpg"];

const Events = ({ by = "" }) => {
  const { isLoading, events: allEvents } = useEvents();
  const { isAuthenticated } = useUser();
  const { isDeleting, deleteEvent } = useDeleteEvent();

  const events =
    by === ""
      ? allEvents || [] // Ensure events is an array even if allEvents is undefined
      : (allEvents || []).filter((event) => {
          return event.conductedBy.includes(by);
        });

  const initialEventsToShow = 3;
  const [eventsToShow, setEventsToShow] = useState(initialEventsToShow);
  const [showFullDescription, setShowFullDescription] = useState(
    Array(events?.length).fill(false)
  );
  const [isHovered, setIsHovered] = useState(false);

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
  if (!isLoading && events.length === 0)
    return <EventNotFound check={false} />;

  return (
    <>
      <Row className="events-container">
        {events.slice(0, eventsToShow).map((event, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card
              className={`shadow-sm border-0 h-100 card-animate card-hover ${
                isHovered ? "visible" : ""
              }`}
              style={{
                margin: "20px",
                borderRadius: "20px",
                overflow: "hidden",
                backgroundColor: "#0d1117",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(true)}
            >
              <Card.Img
                variant="top"
                src={event.image.split("--")[0] || `images/${imgs[0]}`}
                style={{
                  width: "100%",
                  height: "35vh",
                }}
                alt={`Event ${index + 1}`}
              />
              <Card.Body
                style={{
                  backgroundColor: "rgba(29, 52, 229, 0.2)",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                <Card.Title
                  style={{
                    fontWeight: "700",
                    fontSize: "1.8rem",
                    color: "#ffffff",
                    marginTop: "1.1rem",
                  }}
                >
                  {event.title}
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "0.9rem",
                    color: "white",
                  }}
                  onClick={() => handleToggleDescription(index)}
                >
                  {truncateDescription(event.description, 10, index)}
                </Card.Text>
                <Card.Text>Date: {event.date}</Card.Text>
                <Card.Text>Conducted By : {event.conductedBy}</Card.Text>
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="primary"
                    onClick={() => handleClick(event.id)}
                    style={{
                      backgroundColor: "#1e90ff", // Custom background color
                      borderColor: "#1e90ff", // Custom border color
                      color: "#ffffff", // Text color
                      fontWeight: "bold", // Bold text
                      borderRadius: "10px", // Rounded corners
                      padding: "10px 20px", // Padding for better spacing
                      transition: "background-color 0.3s ease", // Smooth hover effect
                      marginTop: "20px"
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#4682b4")
                    } // Hover effect
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#1e90ff")
                    } // Reset on hover out
                  >
                    Learn More
                  </Button>

                  {isAuthenticated && (
                    <EventButtonIcon onClick={() => handleDelete(event.id)}>
                      <HiTrash />
                    </EventButtonIcon>
                  )}
                </div>
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
