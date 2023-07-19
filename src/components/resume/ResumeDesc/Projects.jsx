import React from "react";
import Container from "react-bootstrap/Container";
import Project from "./Project";
export default function Projects() {
  return (
    <Container className="r pt-2">
      <Project
        title="Quiz Application"
        subtitle="ReactJs/Redux,Bootstrap,ExpressJs,MongoDB"
        desc="Built MERN stack quiz app with Redux for state management, delivering an interactive and seamless quiz-taking experience."
      />
      <Project
        title="Chat Application"
        subtitle="HTML/CSS,Bootstrap,ExpressJs,MongoDB"
        desc="Created chat app with HTML/CSS/Bootstrap frontend, Express.js/MongoDB backend, enabling real-time communication and efficient data storage."
      />
      <Project
        title="Portfolio Website"
        subtitle="ReactJs,Bootstrap"
        desc="Built portfolio website using React.js, showcasing skills, projects, and achievements with modern UI/UX and responsive design"
      />
    </Container>
  );
}
