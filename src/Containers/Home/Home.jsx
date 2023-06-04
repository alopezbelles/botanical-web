import React from "react";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

// STYLES AND ASSETS
import "./Home.css";
import Video1 from "../../Assets/video-1.mp4"

function Home() {
  return (
    <Container fluid className="homeDesign">
      <Col className="col1Design">
        <Row className="rowVideoDesign">
          <video className="video" autoPlay muted loop>
            <source src={Video1} type="video/mp4" />
          </video>
        </Row>
      </Col>
    </Container>
  );
}

export default Home;

