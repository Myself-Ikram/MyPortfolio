import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  Container  from "react-bootstrap/Container";
import  Tooltip  from "../extras/Tooltip";

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "#333333"}}   variant="dark">
            <Container  id="home" >
                <Navbar.Brand href="#home" className="display-6">My Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="text-light w-100 d-flex justify-content-center">
                        <Nav.Link className="nav-btns" active style={{color : "#ff5823"}}> Home</Nav.Link>
                        <Nav.Link className="nav-btns text-light" href="#about"> About Me</Nav.Link>
                        <Nav.Link className="nav-btns text-light" href="#resume"> Resume</Nav.Link>
                        <Nav.Link className="nav-btns text-light" style={{marginTop : "3px"}} href="#testimonial" disabled><Tooltip/></Nav.Link>
                        <Nav.Link className="nav-btns text-light" href="#contact"> Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}