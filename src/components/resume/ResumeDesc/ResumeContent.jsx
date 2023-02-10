import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Badge ,Row,Col } from "react-bootstrap";
export default function Desc(props) {
    return (
        <Container className="py-3">
            <Row>
                <Col>
                    <h6 style={{ color: "#ff5823" }}><i>o</i>
                        {props.title}
                    </h6>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;{props.course}</p>
                </Col>
                <Col xs={3}>
                    <Badge style={{ color: "#ff5823" }} className="bg-dark resume-badge">{props.year}</Badge><br />
                </Col>
            </Row>
        </Container>
    )
}
// <Col id="education" >
//                     <ResumeDesc title="Jaya Prakash Narayan College Of Engineering" course="BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE"/>
//                     <ResumeDesc title="Prathibha Junior College" course="SECONDARY EDUCATION" />
//                     <ResumeDesc title="Chaitanya High School" course="PRIMARY EDUCATION"  />
//                 </Col>
//                 <Col xs={3}>
//                     <Badge style={{ color: "#ff5823" }} className="bg-dark resume-badge">2019 - 2023</Badge><br />
//                     <Badge style={{ color: "#ff5823" }} className="bg-dark resume-badge">2017 - 2019</Badge><br />
//                     <Badge style={{ color: "#ff5823" }} className="bg-dark resume-badge"> - 2017</Badge>
//                 </Col>