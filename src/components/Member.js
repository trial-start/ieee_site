import { Col, Image } from "react-bootstrap";
export default function Member({ img, name, description = "fejg" }) {
  return (
    <Col md={4} className="mb-4">
      <div style={{ textAlign: "center" }}>
        <Image src={img} roundedCircle style={{ float: "left" }} />
      </div>
      <div style={{ marginLeft: "130px", marginTop: "20px" }}>
        <p style={{ marginTop: "10px" }}>{name}</p>
        <p style={{ marginTop: "5px" }}>{description}</p>
      </div>
    </Col>
  );
}
