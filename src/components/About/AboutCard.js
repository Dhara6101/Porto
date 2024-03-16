import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">DHARA SINGH</span>
            from <span className="purple"> Jammu and kashmir, India.</span>
            <br />
            I am currently looking for job as devops engineer
            <br />
            I have completed B.E in Govt college of engineering chandrapur
            <br />
            <br />
            
"A DevOps engineer: bridging development and operations, automating, optimizing, and accelerating the software delivery lifecycl
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">DHARA</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
