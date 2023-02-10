import React from "react";
import Container from "react-bootstrap/esm/Container";
import Project from "./Project";
export default function Interests() {
    return (
        <Container id="interests" className="r pt-5">
            <Project title="Teaching" desc="Apart from bring a tech enthusiast and a code writer , I also love to teach people what I know simply because I believe in sharing." />
            <Project title="Music" desc="Listening to soothing music is something I can never compromise with skimming through Spotify's pop songs charts is at times the best stress reliever that I can get hands on. " />
            <Project title="Competitive Gaming" desc="I like to challenge a lot while competing in games,pushing the rank and having interactive gaming sessions excites me the most" />
        </Container>
    )
} 
