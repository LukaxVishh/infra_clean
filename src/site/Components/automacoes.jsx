import React, { useState, useEffect } from "react";
import "./Automacao.css"

const imagens = [
  { src: "imagens/cicd.png", alt: "CI/CD" },
  { src: "imagens/infra.png", alt: "Infra" },
  { src: "imagens/cloud.png", alt: "Cloud" },
];

function Automacoes() {
  const [index, setIndex] = useState(0);

  // Troca automática de imagem
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
  };

  return (
    <section id="automacoes" className="automacoes-section">
      <div className="carousel-container">
        <img
          src={imagens[index].src}
          alt={imagens[index].alt}
          className="carousel-image"
        />
      </div>
    </section>
  );
}

export default Automacoes;
