import React from "react";
import "../../Assets/css/Contact.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Content from "../contact/Content";
import Axios from "axios";

import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";

import { BsEnvelope } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";

import linkInicon from "../../Assets/img/linkedIn-icon.png";
import gitHubicon from "../../Assets/img/logo-github.png";
import facebookicon from "../../Assets/img/facebook.png";


class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
      disabled: true,
    });

    Axios.post("http://localhost:3000/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <div className="contact-container">
        <div>
          <h1 class="display-20 text-center title">get in touch!</h1>
          <p class="intro text-center py-4">
            Do you speak English? It's ok if you don't,
            <br />
            porque yo también hablo Español
          </p>
        </div>

        <Content className="contact-container">
          <Row>
            <Col sm={12} md={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label htmlFor="full-name">Full Name</Form.Label>
                  <Form.Control
                    id="full-name"
                    name="name"
                    type="text"
                    placeholder="Nombre Completo"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    id="email"
                    name="email"
                    placeholder="Correo Electronico"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <Form.Control
                    id="message"
                    name="message"
                    as="textarea"
                    rows="3"
                    placeholder="Mensaje"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button
                  className="btn text-center"
                  variant="primary"
                  type="submit"
                  disabled={this.state.disabled}
                >
                  Send
                </Button>

                {this.state.emailSent === true && (
                  <p className="d-inline success-msg">Email Sent</p>
                )}
                {this.state.emailSent === false && (
                  <p className="d-inline err-msg">Email Not Sent</p>
                )}
              </Form>
            </Col>
            <Col sm={12} md={6}>
              <p>
                {" "}
                <BsEnvelope /> ndorado@uncc.edu
              </p>
              <p>
                {" "}
                <BsPhone /> (426) 742-6138
              </p>
              <a
              className="li-ic"
              href="https://www.linkedin.com/in/nadia-dorado/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkInicon} alt="linkIn" width="45" height="45" />
              <i className="white-text mr-4"> </i>
            </a>
            {/* <!--GitHub--> */}
            <a
              className="ins-ic"
              href="https://github.com/ndorado3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHubicon} alt="gitHub" width="35" height="35" />
              <i className=" white-text mr-4"> </i>
            </a>
            <a
              className="ins-ic"
              href="https://www.facebook.com/ndorado3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookicon} alt="facebook" width="45" height="45" />
              <i className="white-text"> </i>
            </a>
            </Col>
          </Row>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
