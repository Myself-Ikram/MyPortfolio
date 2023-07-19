import React from "react";
import Container from "react-bootstrap/Container";
import Project from "./Project";
export default function Projects() {
  return (
    <Container className="r pt-2">
      <Project
        title="Phishing Website Detection Using Machine Learning"
        subtitle="Machine Learning"
        desc="Developed ML-based phishing website detection system, enhancing security by accurately identifying and flagging potential threats.."
      />
      <Project
        title="Automatic Water Overflow Prevention (wireless IOT system)"
        subtitle="IOT Technology"
        desc="Designed wireless IoT system for automatic water overflow prevention, utilizing sensors and intelligent algorithms to prevent wastage and damage."
      />
    </Container>
  );
}
