import React, { useEffect, useState } from "react";
import data from "../../Assets/dataPlants.json";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

// STYLES AND ASSETS
import "./GreenHub.css";
import Video2 from "../../Assets/video-2.mp4";
import Background from "../../Assets/background-plants.png";

function GreenHub() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Container fluid className="homeDesign">
      <Row className="rowVideoDesign">
        <Col fluid className="col1Design">
          <video className="video" autoPlay muted loop>
            <source src={Video2} type="video/mp4" />
          </video>
          <div className="centeredLogo">
            {/* <img className="logoGreenHub" src={Logo} alt="Logo" /> */}
            <h1 className={`fade-in ${isVisible ? "visible" : ""}`}>
              "Nature always wears the colors of the spirit." - Ralph Waldo
              Emerson
            </h1>
          </div>
        </Col>
      </Row>
      <Row className="rowAboutDesign">
        <h1>Get to know us a little better:</h1>
      </Row>
      <Row>
        <Col className="row2GreenHub">
          <p
            className={` pharagraphRow2 fade-in ${isVisible ? "visible" : ""}`}
          >
            At GreenHub, we specialize in identifying the most suitable plants
            for both indoor and outdoor use in interior design projects.
            Additionally, we provide information about their characteristics,
            care, and maintenance. <br /> Whether you're looking for a plant to
            enhance your indoor space or need to select the most appropriate
            species for an outdoor landscaping design, GreenHub is here to
            assist you. Trust our expertise in botany and design to find the
            perfect plants that meet your aesthetic and functional needs.
          </p>
          <img className="backgroundImage" src={Background} alt="background" />
        </Col>
      </Row>
    </Container>
  );
}

export default GreenHub;
