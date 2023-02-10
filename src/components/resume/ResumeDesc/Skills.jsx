import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Skill from "./Skill";
export default function Skills(){
    return(
        <Container className="r" id="skills">
            <Row>
                <Skill nam="HTML/CSS" level="90" />
                <Skill nam="NodeJs" level="60" />
            </Row>
            <Row>
                <Skill nam="Javascript" level="80" />
                <Skill nam="MongoDB" level="60" />
            </Row>
            <Row>
                <Skill nam="ReactJs" level="70" />
                <Skill nam="Mongoose" level="70" />
            </Row>
            <Row>
                <Skill nam="Bootstrap" level="90" />
                <Skill nam="Python" level="80" />
            </Row>
            <Row>
                <Skill nam="ExpressJs" level="80" />
                <Col></Col>
            </Row>
        </Container>

    )
}