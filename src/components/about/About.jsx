import React from "react";
import { Container, Row ,Col } from "react-bootstrap";
import Heading from "../extras/Heading";
import Hire from "../extras/HireResume";
import "./about.css";
export default function About(){
    return(
        <>
            <Container id="about" className="fade-in-up" >
            <Heading title="About Me" content="Why Choose Me?" />
            <Row className="shadow-lg bod" >
                <Col className="px-0 shadow-lg text-end" lg={4} sm={12}>
                <img height="400px" width="100%" src="images/graduation.jpg" alt="img" />
                </Col>
                <Col className="shadow-lg">
                <Container>
                    <p style={{fontSize : "14px",paddingTop:"15px"}} >Full Stack Web Developer with knowledge in HTML, CSS, Javascript & React as Front end and NodeJs, ExpressJs & MongoDB as Back end along with a knack of building applications with utmost efficiency. Strong professional with B.Tech willing to be an asset for an organisation.</p>
                    </Container>
                    <Container className="pb-4 ps-4" >
                    <h5 className="pb-2">Here are a Few Highlights</h5>
                    <p className="about-highlight-point"><span style={{color : "#ff5823"}}>O</span> Full Stack web develpoment</p>
                    <p className="about-highlight-point"><span style={{color : "#ff5823"}}>O</span> Interactive front End as per the design</p>
                    <p className="about-highlight-point"><span style={{color : "#ff5823"}}>O</span> ReactJs & NodeJs</p>
                    <p className="about-highlight-point"><span style={{color : "#ff5823"}}>O</span> Managing database i.e MongoDB</p>
                    </Container>
                    <Hire color="outline-dark" />
                </Col>
            </Row>
        </Container>
        </>
    )
}