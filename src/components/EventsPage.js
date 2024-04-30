import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "./Carousel";
import NavBar from "./NavBar";
import EventNotFound from "./EventNotFound";
// import events from "../static/event_details";
// import { useParams } from "react-router-dom";
import Footer from "./Footer";
import { useEvent } from "../features/events/useEvent";
import Spinner from "./Spinner";
import styled from "styled-components";

const Fullpage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const EventsPage = () => {
  // console.log(id);
  const { event: selectedEvent, isLoading } = useEvent();

  // console.log(selectedEvent.image);
  // console.log(selectedEvent);

  if (!isLoading && !selectedEvent) return <EventNotFound />;

  if (isLoading)
    return (
      <Fullpage>
        <Spinner />
      </Fullpage>
    );

  // const selectedEvent = events[id];

  return (
    <div className="app-container">
      <>
        <NavBar itemName="Event" teamType="Highlights" val="x" />
        <div className="section" id="home">
          {/* <ImageCarousel /> */}
          <Carousel
            // imgs={["robo_soc.jpg", "robo_soc.jpg"]}
            imgs={selectedEvent.image}
            ie="y"
          />
        </div>
        <hr className="section-divider" />
        <div className="section" id="event-details">
          <Container>
            <Row>
              <Col>
                <h1 style={{ textAlign: "center" }}>{selectedEvent.title}</h1>
                <p style={{ fontSize: "17px" }}>{selectedEvent.description}</p>
              </Col>
            </Row>
          </Container>
        </div>
        <hr className="section-divider" />
        <div className="section" id="event-date">
          <Container>
            <Row>
              <Col>
                <h2 style={{ fontSize: "25px" }}>Date</h2>
                <p>{selectedEvent.date}</p>
              </Col>
            </Row>
          </Container>
          <hr className="section-divider" />

          <Container>
            <Row>
              <Col>
                <h2 style={{ fontSize: "25px" }}>Location</h2>
                <p>{selectedEvent.location}</p>
              </Col>
            </Row>
          </Container>
          <hr className="section-divider" />

          <Container>
            <Row>
              <Col>
                <h2 style={{ fontSize: "25px" }}>Conducted by</h2>
                <p style={{ fontStyle: "italic", fontSize: "20px" }}>
                  {selectedEvent.conductedBy}
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <hr className="section-divider" />

        {/* <hr className="section-divider" /> */}
        <Footer />
      </>
    </div>
  );
};

export default React.memo(EventsPage);
