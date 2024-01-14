import { Col, Image } from "react-bootstrap";
export default function Member({ img, name, description = "fejg" }) {
  console.log(img);
  return (
    <Col
      md={4}
      className="mb-4"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <div style={{ textAlign: "center" }}>
        <Image
          src={img}
          roundedCircle
          style={{ float: "left", height: "18vh", width: "18vh" }}
        />
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
