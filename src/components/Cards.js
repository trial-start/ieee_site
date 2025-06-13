import { useEffect, useRef, useState } from "react";
import { Col, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Cards({ img, societyName, description, link }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Col md={6} lg={4} className="mb-4">
      <NavLink to={`/${link}`} style={{ textDecoration: "none" }}>
        <Card
          ref={cardRef}
          className={`shadow-sm border-0 h-100 card-hover card-animate ${
            isVisible ? "visible" : ""
          }`}
          style={{
            margin: "20px",
            borderRadius: "20px",
            overflow: "hidden",
            backgroundColor: "#0d1117",
          }}
        >
          <Card.Img
            variant="top"
            src={img}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <Card.Body
            style={{
              backgroundColor: "rgba(29, 52, 229, 0.2)",
              color: "#ffffff",
              textAlign: "center",
              paddingBottom: "20px",
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
              {societyName}
            </Card.Title>
            <Card.Text
              style={{
                fontSize: "0.9rem",
                color: "white",
              }}
            >
              {description}
            </Card.Text>
          </Card.Body>
        </Card>
      </NavLink>
    </Col>
  );
}
