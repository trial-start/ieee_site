import { Col, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function Cards({ img, societyName, description,link }) {
  return (
    <Col>
      <NavLink to={`/${link}`}  style={{textDecoration:"none"}}>
        <Card style={{ margin: "15px" }}>
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
