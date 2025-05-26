import React from 'react';
import NavbarLogado from '../../components/NavbarLogado/NavbarLogado';

const Congratulations = () => {
  const handleDownload = () => {
    alert('Certificado baixado com sucesso!');
  };

  return (
    <>
      <NavbarLogado />
      <div className="container mt-5 pt-5 text-center">
        <h2>🎉 Parabéns!</h2>
        <p>Você acertou 3 ou mais perguntas e passou no quiz!</p>
        <button className="btn btn-success mt-3" onClick={handleDownload}>
          Baixar Certificado
        </button>
      </div>
    </>
  );
};

export default Congratulations;
