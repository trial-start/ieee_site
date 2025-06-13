import { Col, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Cards({ img, societyName, description, link }) {
  return (
    <Col md={6} lg={4} className="mb-4">
      <NavLink to={`/${link}`} style={{ textDecoration: "none" }}>
        <Card
          className="shadow-sm border-0 h-100 card-hover"
          style={{
            margin: "20px",
            borderRadius: "20px",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            backgroundColor: "#0d1117",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.03)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
          }}
        >
          <Card.Img
            variant="top"
            src={img}
            style={{
              height: "420px", // Slightly increased image height
              objectFit: "cover",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          />
          <Card.Body
            style={{
              backgroundColor: "rgba(29, 52, 229, 0.2)",
              color: "#ffffff",
              textAlign: "center",
              padding: "0.01rem 1rem", // Slightly decreased bottom padding
            }}
          >
            <Card.Title
              style={{
                fontWeight: "700",
                fontSize: "1.6rem",
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
