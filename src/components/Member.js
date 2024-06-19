import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Member({ img, name, description = "fejg" }) {
  console.log(img.slice(1, img.length));
  return (
    <Col
      md={4}
      className="mb-4"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <div style={{ textAlign: "center" }}>
        {console.log(img)}
        <a href={img.slice(1, img.length)}>
          <Image
            src={img}
            roundedCircle
            style={{ float: "left", height: "18vh", width: "18vh" }}
          />
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        // className="cust-ml"
        // style={{ marginLeft: "140px", marginTop: "42px" }}
      >
        {/* <p style={{ marginTop: "10px" }}>{name}</p>
        <p style={{ marginTop: "5px" }}>{description}</p> */}
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </Col>
  );
}
