import React from "react";
import resume from "../../Assets/img/resume.pdf";
import "../../Assets/css/Resume.css";

import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";

export default function Resume() {
  return (
    <div>
      <h1 className="title">Skills</h1>
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className=" text-center
            resume"
      >
        {" "}
        Download My Resume<i></i>
      </a>
      <CardGroup className="nd-cards">
        <Card>
          <Card.Body>
            <Card.Title className="nd-title text-center">Languages</Card.Title>
            <Card.Text>
              <ul>
                <li>Javscript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="nd-title text-center">Web Dev. Tools</Card.Title>
            <Card.Text>
              <ul>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>React</li>
                <li>MongoDB</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="nd-title text-center">
              Graphic Design
            </Card.Title>
            <Card.Text>
              <ul>
                <li>Photoshop</li>
                <li>InDesign</li>
                <li>Ilustrator</li>
                <li>XD</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
