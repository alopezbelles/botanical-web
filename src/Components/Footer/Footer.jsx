import React from "react";
import { useNavigate } from "react-router-dom";


// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// STYLES AND AESSETS
import './Footer.css';

function Footer(){
    return(
        <Container fluid className="containerFooter">
      <Col>
        <p>
          All rights reserved © 2023 Alejandro López. The content of this website
          is protected by copyright and other intellectual property laws. alopezbelles@gmail.com
        </p>
      </Col>
      
    </Container>
    )
}

export default Footer;