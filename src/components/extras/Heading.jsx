import React from "react";
import Container from "react-bootstrap/Container";
export default function Heading(props) {
    return (
        <Container className="text-center pt-5" id={props.id}>
            <h3 >{props.title}</h3>
            <p className="fw-light pt-0" >{props.content}</p>
            <div className="d-flex justify-content-center mb-2" >
                <span>--------</span>
                <span className="py-1" style={{ width: "60px", backgroundColor: "#ff5823" }}></span>
                <span>--------</span>
            </div>
        </Container>
    )
}