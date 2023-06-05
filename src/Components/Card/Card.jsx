import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

// STYLES AND ASSETS
import "./Card.css";
import clickSound from "../../Assets/card-flip.mp3";
import CustomButton from "../Button/Button";

function CardPlant({ id, path_image, name, description, description2 }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFlip = () => {
    if (!modalOpen) {
      setIsFlipped(!isFlipped);
      playClickSound();
    }
  };

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.3;
    audio.play();
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="card-inner">
        <div className="card-front">
          <img className="plantImage" src={path_image} alt={name} />
        </div>
        <div className="card-back">
          <h2>{name}</h2>
          <p>{description}</p>
          <Button className="buttonDesign" text="+More Info" onClick={openModal}>+ More Info</Button>
        </div>
      </div>
      <Modal  show={modalOpen} onHide={closeModal} centered>
        <Modal.Body className="modalDesign">
          <h1>{name}</h1>
          <img src={path_image} alt={name} />
          <p>{description}</p>
          <p>{description2}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="buttonDesign" variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CardPlant;


