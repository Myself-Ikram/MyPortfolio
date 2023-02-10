import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NavBar from "./Navbar";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import Hire from "../extras/HireResume";
import "./home.css";
function Home() {
  return (
    <>
      <NavBar />
      <Container fluid className="pt-4" style={{ backgroundColor: "#333333" }}>
        <Row>
          <Col className="text-center text-light" lg={8} xs={12}>
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
            <h6 className="pt-2">
              Hello, I'M Mohd Abdul{" "}
              <span style={{ color: "#ff5823" }}>Ikram</span>
            </h6>
            <h3 className="display-6">Web Developer!</h3>
            <p>
              Knack of building applications with front and back end operations
            </p>
            <Hire color="outline-light" />
          </Col>
          <Col className="text-center">
            <Image
              height="300px"
              width="300px"
              src="images/home.png"
              className="roun"
              roundedCircle
            />
          </Col>
        </Row>
        <Row className="section pattern mt-3">
          <div className="geeks"></div>
        </Row>
      </Container>
    </>
  );
}

export default Home;
{
  /* <Typical
        steps={['React Developer !', 2500, 'Full Stack Developer !', 2500, 'MERN Stack Developer !', 2500]}
        loop={Infinity}
        wrapper="p"       /> */
}
