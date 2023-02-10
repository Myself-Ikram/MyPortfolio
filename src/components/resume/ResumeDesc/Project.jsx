import React from "react";
import Container from "react-bootstrap/Container";
export default function Project(props) {
  return (
    <Container>
      <h6 style={{ color: "#ff5823", fontSize: "14px" }}>
        <i>o</i> {props.title}
      </h6>
      <b style={{ fontSize: "11px" }}>{props.subtitle}</b>
      <p style={{ fontSize: "10px" }}>{props.desc}</p>
    </Container>
  );
}
