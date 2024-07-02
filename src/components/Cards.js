import { Col, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
 // make sure to import your CSS file

export default function Cards({ img, societyName, description, link }) {
  return (
    <Col>
      <NavLink to={`/${link}`} style={{ textDecoration: "none" }}>
        <Card className="card-hover" style={{ margin: "15px" }}>
          <Card.Img variant="top" src={img} style={{ height: "350px" }} />
          <Card.Body>
            <Card.Title>{societyName}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </NavLink>
    </Col>
  );
}
