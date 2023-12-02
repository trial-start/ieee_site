import { Col, Image } from "react-bootstrap";
export default function Member({ img, name, description = "fejg" }) {
  console.log(img);
  return (
    <Col md={4} className="mb-4">
      <div style={{ textAlign: "center" }}>
        <Image
          src={img}
          roundedCircle
          style={{ float: "left", height: "18vh", width: "18vh" }}
        />
      </div>
      <div
        className="cust-ml"
        style={{ marginLeft: "140px", marginTop: "42px" }}
      >
        <p style={{ marginTop: "10px" }}>{name}</p>
        <p style={{ marginTop: "5px" }}>{description}</p>
      </div>
    </Col>
  );
}
