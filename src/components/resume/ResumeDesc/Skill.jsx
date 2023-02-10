import React from "react";
import Col from "react-bootstrap/col"
import ProgressBar from "react-bootstrap/ProgressBar";
export default function Skill(props){
    return(
        <Col className="pt-1">
            <p style={{color : "#ff5823"}}><i>o </i>{props.nam}</p>
            <ProgressBar variant="dark"  now={props.level} className="ms-2" animated />
        </Col>
    )
}