import React from "react";
import Container from "react-bootstrap/Container";
import Project from "./Project";
export default function Projects() {
  return (
    <Container className="r pt-2">
      <Project
        title="Chat Application"
        subtitle="HTML/CSS,Bootstrap,ExpressJs,MongoDB"
        desc="This web application makes it easy to communicate with people by sending and receiving messages."
      />
      <Project
        title="Portfolio Website"
        subtitle="ReactJs,Bootstrap"
        desc="A portfolio website is a unique way to showcase your work and let others know about yourself. It’s like an evergreen platform for your projects, case studies, and information about you."
      />
      <Project
        title="Quiz Application"
        subtitle="ReactJs/Redux,Bootstrap,ExpressJs,MongoDB"
        desc="A web application which takes quiz and analyses your programming knowledge.It stores result in database only after completion of the quiz upto that stage the data is stored in browser using redux."
      />
      <Project
        title="TravelX Website"
        subtitle="HTML/CSS,Bootstrap"
        desc="This website is mainly focuses on implementing bootstrap in order to build a responsive travelling website."
      />
    </Container>
  );
}
