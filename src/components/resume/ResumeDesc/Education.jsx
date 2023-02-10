import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResumeDesc from "./ResumeContent";

export default function Education(){
    return(
        <Row className="r overflow-hidden">
                <Col id="education" >
                    <ResumeDesc title=" Jaya Prakash Narayan College Of Engineering" course="BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE" year="2019-2023"/>
                    <ResumeDesc title=" Prathibha Junior College" course="SECONDARY EDUCATION" year="2017-2019" />
                    <ResumeDesc title=" Chaitanya High School" course="PRIMARY EDUCATION"  year="-2017" />
                </Col>
            </Row>
    )
}