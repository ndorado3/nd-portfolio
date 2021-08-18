import React from "react";
import resume from "../../Assets/img/resume.pdf";
import "../../Assets/css/Resume.css";

import Card from "react-bootstrap/Card";
import { CardGroup, Button } from "react-bootstrap";

import { BsDownload } from "react-icons/bs";

export default function Resume() {
  return (
    <div>
      <h1 className="title">Skills</h1>
    <h4>
    <Button
          className="bt-resume"
          variant="secondary"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsDownload />  My Resume
        </Button>{" "}
    </h4>
        
      {/* </> */}

      {/* <h4 className="resume text-center">
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          
        >
          {" "}
         < BsDownload/> Download My Resume
        </a>
      </h4> */}

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
            <Card.Title className="nd-title text-center">
              Web Dev. Tools
            </Card.Title>
            <Card.Text>
              <ul>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Bootstrap</li>
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
