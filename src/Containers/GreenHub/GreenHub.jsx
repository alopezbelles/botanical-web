import React from "react";
import data from "../../Assets/dataPlants.json";


// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

// STYLES AND ASSETS
import "./GreenHub.css";
import Video2 from "../../Assets/video-2.mp4";
import Logo from "../../Assets/logo.png";


function GreenHub() {
    return (
      <Container fluid className="homeDesign">
        <Row className="rowVideoDesign">
          <Col fluid className="col1Design">
            <video className="video" autoPlay muted loop>
              <source src={Video2} type="video/mp4" />
            </video>
            <div className="centeredLogo">
              {/* <img className="logoGreenHub" src={Logo} alt="Logo" /> */}
              <h1>HOLA</h1>
            </div>
          </Col>
          
        </Row>
        
        
      </Container>
    );
  }

export default GreenHub;
