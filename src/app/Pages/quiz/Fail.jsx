import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarLogado from '../../components/NavbarLogado/NavbarLogado';

const Fail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tema = location.state?.tema || 'DevOps';
  const slug = location.state?.slug || 'devops';

  const tentarNovamente = () => {
    navigate(`/quiz/${slug}`);
  };

  return (
    <>
      <NavbarLogado />
      <div className="container mt-5 pt-5 text-center">
        <h2>😞 Meus sentimentos!</h2>
        <p>Você acertou menos de 3 perguntas.</p>
        <p className="mb-4">
          Recomendamos revisar os conceitos de <strong>{tema} em DevOps</strong> antes de tentar novamente.
        </p>
        <button className="btn btn-primary" onClick={tentarNovamente}>
          Tentar Novamente
        </button>
      </div>
    </>
  );
};

export default Fail;
