import React, { useState } from "react";
import "./Contact.css";

import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, hacer una llamada a una API o ejecutar alguna lógica de negocio
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
  };
  return (
    <Container className="container-contact">
      <h1 className="contact-title">Contact with us:</h1>
      <form className="contact-form">
        <div>
          <label className="contact-label" htmlFor="email">
            Email:
          </label>
          <input
            className="contact-input"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label className="contact-label" htmlFor="subject">
            Subject:
          </label>
          <input
            className="contact-input"
            type="text"
            id="subject"
            name="subject"
          />
        </div>
        <div>
          <label className="contact-label" htmlFor="message">
            Message:
          </label>
          <textarea
            className="contact-textarea"
            id="message"
            name="message"
          ></textarea>
        </div>
        <button className="contact-button" type="submit">
          Submit
        </button>
      </form>
    </Container>
  );
}

export default Contact;
