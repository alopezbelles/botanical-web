import React from "react";
import dataPlants from "../../Assets/dataPlants.json";


// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

// STYLES AND ASSETS
import "./Home.css";
import Video1 from "../../Assets/video-1.mp4";
import Logo from "../../Assets/logo.png";

import CardPlant from "../../Components/Card/Card";

function Home() {
  return (
    <Container fluid className="homeDesign">
      <Row className="rowVideoDesign">
        <Col fluid className="col1Design">
          <video className="video" autoPlay muted loop>
            <source src={Video1} type="video/mp4" />
          </video>
          <div className="centeredText">
            <img className="logoHome" src={Logo}></img>
          </div>
        </Col>
      </Row>
      <Col>
      {dataPlants.map((plant) => (
        <CardPlant
          key={plant.id}
          id={plant.id}
          path_image={plant.path_image}
          name={plant.name}
          description={plant.description}
        />
      ))}
      </Col>
    </Container>
  );
}

export default Home;
