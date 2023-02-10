import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import "./ContactMe.css";
import Heading from "../extras/Heading";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

export default function Contact() {
  return (
    <Container id="contact" className="mt-5 mb-5 ">
      <Heading title="Contact Me" content="Lets keep in touch" />
      <Container className="shadow-lg px-5 bg-dark">
        <Row className="bg-dark text-white contact-block p-1">
          <Col xs={12} lg={5} className="text-center">
            <h2>Get In Touch !</h2>
            <Container>
              <a
                href="https://www.facebook.com/shadab.qhadri"
                className="px-1 pt-5 pb-2 text-light nav-btns"
              >
                <BsFacebook />
              </a>
              <a href="/" className="px-1 pt-5 pb-2 text-light nav-btns">
                <BsInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/mohd-abdul-ikram-388410223"
                className="px-1 pt-5 pb-2 text-light nav-btns"
              >
                <BsLinkedin />
              </a>
              <a href="/" className="px-1 pt-5 pb-2 text-light nav-btns">
                <BsTwitter />
              </a>
              <a
                href="https://www.github.com/Myself-Ikram"
                className="px-1 pt-5 pb-2 text-light nav-btns"
              >
                <BsGithub />
              </a>
            </Container>
            <h6 className="mt-5">Send Your Email Here!</h6>
            <img
              className="contact-img rounded-2"
              alt="img"
              src="images/contact.jpg"
              height="220px"
              width="320px"
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <Form
              className="bg-light ps-2 pe-1 pb-3 mt-4 ms-4 rounded-3 contact-box"
              style={{ width: "400px" }}
            >
              <Form.Group
                className="pt-2 mb-3 text-dark"
                controlId="formBasicEmail"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" size="md" />
              </Form.Group>
              <Form.Group className="mb-3 text-dark" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" size="md" />
              </Form.Group>
              <Form.Group
                className="mb-4 text-dark"
                controlId="fromBasicTextArea"
              >
                <Form.Label>Message</Form.Label>
                <br />
                <Form.Control as="textarea" size="md" rows={2} />
              </Form.Group>
              <Button variant="dark" type="submit">
                Send <i className="fa-regular fa-paper-plane"></i>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
