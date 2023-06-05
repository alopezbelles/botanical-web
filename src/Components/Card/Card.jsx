import React, { useState } from "react";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

// STYLES AND ASSETS
import "./Card.css";
import clickSound from "../../Assets/card-flip.mp3";

function CardPlant({ id, path_image, name, description }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
      playClickSound();
    };

    const playClickSound = () => {
        const audio = new Audio(clickSound);
        audio.volume = 0.3;
        audio.play();
      };

  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
    >
      <div className="card-inner">
        <div className="card-front">
          <img className="plantImage" src={path_image} alt={name}  />
        </div>
        <div className="card-back">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardPlant;
