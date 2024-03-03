
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [shadowPosition, setShadowPosition] = useState({ x: 0, y: 0 }); // Variable de estado para controlar la posición de la sombra

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const updateShadowPosition = () => {
    // Agrega un retardo a la posición de la sombra para que persiga al cursor con retardo
    setTimeout(() => {
      setShadowPosition({ x: position.x, y: position.y });
    }, 50); // Ajusta el valor del retardo según tus preferencias
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  useEffect(() => {
    updateShadowPosition();
  }, [position]);

  return (
    <React.Fragment>
      <div
        className="custom-cursor"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className="custom-cursor-shadow"
        style={{ left: `${shadowPosition.x}px`, top: `${shadowPosition.y}px` }}
      />
    </React.Fragment>
  );
};

export default CustomCursor;

