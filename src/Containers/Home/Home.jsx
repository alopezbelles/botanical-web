import React, { useEffect, useState } from "react";
import data from "../../Assets/dataPlants.json";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

// STYLES AND ASSETS
import "./Home.css";
import Video1 from "../../Assets/video-1.mp4";
import Logo from "../../Assets/logo.png";

import CardPlant from "../../Components/Card/Card";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Container fluid className="homeDesign">
      <Row className="rowVideoDesign">
        <Col fluid className="col1Design">
          <video className="video" autoPlay muted loop>
            <source src={Video1} type="video/mp4" />
          </video>
          <div
            className={`centeredText ${
              isVisible ? "fade-in visible" : "fade-in"
            }`}
          >
            <img className="logoHome" src={Logo} alt="Logo" />
          </div>
        </Col>
      </Row>
      <Row className="descriptionPharagraph">
        <h1 className={`fade-in ${isVisible ? "visible" : ""}`}>
          We help you identify your plants.
        </h1>
        <p className="description">
          GreenHub is an application inspired by the format of a{" "}
          <b>children's card game</b>, specifically developed to meet the needs
          of plant enthusiasts. With its appealing design and intuitive
          interface, GreenHub allows you to{" "}
          <b>visually identify the plants you want to explore</b> and provides
          detailed information about each one.{" "}
        </p>
        <p className="description">
          Immerse yourself in this exciting experience and discover a world full
          of botanical knowledge as you explore the wide variety of plants
          available on GreenHub. Learn, enjoy, and delve into the fascinating
          universe of plants with GreenHub! 🌿
        </p>
      </Row>
      <div id="cardId" className="cardContainer">
        {data.map((plant) => (
          <CardPlant
            key={plant.id}
            id={plant.id}
            path_image={plant.path_image}
            name={plant.name}
            description={plant.description}
            description2={plant.description2}
          />
        ))}
      </div>
    </Container>
  );
}

export default Home;
