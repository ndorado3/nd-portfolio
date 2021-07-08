import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import familyPic from "../../Assets/img/family.jpg";
import aquila from "../../Assets/img/aquila.jpeg";

export default function About() {
  return (
    <Jumbotron className="bg-light jumbotron-fluid p-10 nd-card">
      <Container fluid={true}>
        <Row className="justify-content-center py-8">
            <h1>about me</h1>
            <p>
              I am from Bogotá, Colombia, and I currently live in Bristol, TN.
              <br />
              I am enthusiast full stack web developer and UX designer with a
              <br />
              background in Industrial Design. My interest in web development
              and
              <br />
              UX design grows form my fascination with human judgment,
              <br />
              decision-making process and problem solving.
            </p>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Image src={aquila} thumbnail />
          </Col>
          <Col xs={12} md={6}>
            <Image src={familyPic} thumbnail />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
