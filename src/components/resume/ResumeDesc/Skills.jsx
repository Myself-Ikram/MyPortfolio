import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Skill from "./Skill";
export default function Skills() {
  return (
    <Container className="r" id="skills">
      <Row>
        <Skill nam="ReactJs/Redux" level="60" />
        <Skill nam="React Native" level="50" />
      </Row>
      <Row>
        <Skill nam="HTML/CSS" level="90" />
        <Skill nam="NodeJs" level="60" />
      </Row>
      <Row>
        <Skill nam="Javascript" level="80" />
        <Skill nam="MongoDB" level="60" />
      </Row>

      <Row>
        <Skill nam="Bootstrap" level="90" />
        <Skill nam="Python" level="80" />
      </Row>
      <Row>
        <Skill nam="ExpressJs" level="80" />
        <Skill nam="Selenium" level="40" />
      </Row>
    </Container>
  );
}
