import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "./Carousel";
import NavBar from "./NavBar";
import events from "../static/event_details";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const EventsPage = () => {
  const { id } = useParams();
  const selectedEvent = events[id];

  return (
    <div className="app-container">
      <>
        <NavBar itemName="Event" teamType="Highlights" val="x" />
        <div className="section" id="home">
          {/* <ImageCarousel /> */}
          <Carousel imgs={["robo_soc.jpg", "robo_soc.jpg"]} />
        </div>
        <hr className="section-divider" />
        <div className="section" id="event-details">
          <Container>
            <Row>
              <Col>
                <h1 style={{ textAlign: "center" }}>{selectedEvent.title}</h1>
                <p>{selectedEvent.description}</p>
              </Col>
            </Row>
          </Container>
        </div>
        <hr className="section-divider" />
        <div className="section" id="event-date">
          <Container>
            <Row>
              <Col>
                <h2>Date</h2>
                <p>{selectedEvent.date}</p>
              </Col>
            </Row>
          </Container>
          <hr className="section-divider" />

          <Container>
            <Row>
              <Col>
                <h2>Conducted By</h2>
                <p>{selectedEvent.conductedBy}</p>
              </Col>
            </Row>
          </Container>
        </div>
        <hr className="section-divider" />
        <div className="section" id="event-highlights">
          <Container>
            <Row>
              <Col>
                <h2>Highlights</h2>
                {/* Add your highlights content here */}
                <ul>
                  <li>Highlight 1</li>
                  <li>Highlight 2</li>
                  {/* Add more highlights as needed */}
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <hr className="section-divider" />
        <Footer />
      </>
    </div>
  );
};

export default EventsPage;
