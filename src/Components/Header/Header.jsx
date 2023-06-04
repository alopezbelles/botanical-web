import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// STYLES AND AESSETS
import './Header.css';
// import logo from "../../Assets/ALO.png"

function Header(){
    const [expanded, setExpanded] = useState(false);
    return(
        <Navbar
      className="navbarDesign"
      variant="light"
      expand="md"
      expanded={expanded}
    >
      <Container>
        {/* <Navbar.Brand href="/">
          <Image src={logo} className="logoNavbar"></Image>
        </Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center">
            <Nav.Link href="/">Portfolio</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
            {/* <Nav.Link href="/experience">Experience</Nav.Link> */}
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header;

