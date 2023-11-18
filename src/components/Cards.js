import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Cards({ img, societyName, description }) {
  return (
    <Col>
      <Link to="/computer-society">
        <Card style={{ margin: "15px" }}>
          <Card.Img variant="top" src={img} style={{ height: "350px" }} />
          <Card.Body>
            <Card.Title>{societyName}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}