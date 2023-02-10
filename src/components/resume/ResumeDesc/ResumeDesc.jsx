import React from "react";
import Col from "react-bootstrap/Col";
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import Projects from "./Projects"
import Interests from "./Interests";
import { TabPanel } from "react-tabs";
export default function ResumeDescBlock() {
    return (
        
        <Col>
            <TabPanel>
                <h1>Hi</h1>
                {/* <Education /> */}
            </TabPanel>
            <TabPanel>
                <Skills />
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
    )
}