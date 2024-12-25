import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ReactJS_PC from "../../Assets/Projects/ReactJS_PC.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px",marginBottom:'10%' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReactJS_PC}
              isBlog={false}
              title="My ReactJs ShowCase"
              description="Check out my ReactJS showcase, where I've implemented various features and components. This project demonstrates my skills and experience with ReactJS development. Feel free to explore the code on GitHub and try out the live demo."
              ghLink="https://github.com/AnshSheladiya/react_all_in_one"
              demoLink="https://ansh-react-all-in-one.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
