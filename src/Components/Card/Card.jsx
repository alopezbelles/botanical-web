import React, { useState } from 'react';

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

// STYLES AND ASSETS
import "./Card.css";

function CardPlant({ id, path_image, name, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="card-front">
        <img src={path_image} alt={name} />
      </div>
      <div className="card-back">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardPlant;
