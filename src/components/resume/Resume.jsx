import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../extras/Heading";
import { Tabs, TabPanel, TabList, Tab } from "react-tabs";
import Work from "./ResumeDesc/Work";
import Education from "./ResumeDesc/Education";
import Skills from "./ResumeDesc/Skills";
import Projects from "./ResumeDesc/Projects";
import Interests from "./ResumeDesc/Interests";
import CollegeProjects from "./ResumeDesc/CollegeProjects";
import {
  FaUserGraduate,
  FaHistory,
  FaLaptopCode,
  FaChartBar,
  FaFire,
} from "react-icons/fa";
import "./Resume.css";

export default function Resume() {
  return (
    <Container id="resume" className="mt-5">
      <Heading title="Resume" content="My formal Bio Details" />
      <Tabs>
        <Row className="shadow-lg bod">
          <Col xs={12} lg={4} className="resume-title-block">
            <TabList>
              <Row className="mt-3 pb-5 w-100">
                <Col
                  xs={1}
                  className="bg-dark pt-3 pb-4 pe-4 text-end border border-success me-0"
                >
                  <p className="text-light text-center">
                    <FaUserGraduate />
                  </p>
                  <p className="text-light text-center">
                    <FaHistory />
                  </p>
                  <p className="text-light text-center">
                    <FaLaptopCode />
                  </p>
                  <p className="text-light text-center">
                    <FaChartBar />
                  </p>
                  <p className="text-light text-center">
                    <FaFire />
                  </p>
                </Col>
                <Col className=" ps-3">
                  <Tab className="resume-titles">Education</Tab>
                  <Tab className="resume-titles">Programming Skills</Tab>
                  <Tab className="resume-titles">College Projects</Tab>
                  <Tab className="resume-titles">Projects</Tab>
                  <Tab className="resume-titles">Work History</Tab>
                  <Tab className="resume-titles">Interests</Tab>
                </Col>
              </Row>
            </TabList>
          </Col>

          <Col style={{ height: "350px" }} className="ms-0">
            <TabPanel>
              <Education />
            </TabPanel>
            <TabPanel>
              <Skills />
            </TabPanel>
            <TabPanel>
              <CollegeProjects />
            </TabPanel>
            <TabPanel>
              <Projects />
            </TabPanel>
            <TabPanel>
              <Work />
            </TabPanel>
            <TabPanel>
              <Interests />
            </TabPanel>
          </Col>
        </Row>
      </Tabs>
    </Container>
  );
}
