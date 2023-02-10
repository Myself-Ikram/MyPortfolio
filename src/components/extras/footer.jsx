import React from "react";
import { Container } from "react-bootstrap";
import { FaCopyright } from "react-icons/fa";
export default function Footer() {
  return (
    <Container
      className="text-center text-light bg-dark"
      style={{ height: "100px" }}
      fluid
    >
      <p className="pt-2 mb-0">
        <FaCopyright /> 2022 ShaDE | All Right Reserved
      </p>
    </Container>
  );
}
