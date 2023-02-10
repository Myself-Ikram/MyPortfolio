import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Hire(props) {
    return (
        <Container className="pb-4">
            <Button variant={props.color} className="rounded-pill px-4 me-1 hire" href="#contact"> Hire Me</Button> 
            <Button href="images/Resume.pdf" download="Mohd Abdul Ikram's Resume.pdf" style={{ backgroundColor: "#ff5823" }} className="px-4 rounded-pill border border-dark resume">Get Resume</Button>
        </Container>
    )
}

export default Hire;