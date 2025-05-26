import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarLogado from '../../../components/NavbarLogado/NavbarLogado';

const perguntas = [
  {
    pergunta: 'O que significa CI em CI/CD?',
    opcoes: [
      'Continuous Improvement',
      'Continuous Integration',
      'Control Integration',
      'Central Implementation'
    ],
    resposta: 1
  },
  {
    pergunta: 'Qual ferramenta é comumente usada para pipelines de CI/CD?',
    opcoes: ['Figma', 'Jira', 'Jenkins', 'Photoshop'],
    resposta: 2
  },
  {
    pergunta: 'O que o CD representa em CI/CD?',
    opcoes: [
      'Continuous Deployment ou Continuous Delivery',
      'Centralized Data',
      'Continuous Design',
      'Client Debug'
    ],
    resposta: 0
  },
  {
    pergunta: 'O que é "pipeline" em CI/CD?',
    opcoes: [
      'Sistema de gerenciamento de projetos',
      'Sequência automatizada de etapas de integração e entrega',
      'Banco de dados distribuído',
      'Editor de código'
    ],
    resposta: 1
  },
  {
    pergunta: 'Qual a principal vantagem de CI/CD?',
    opcoes: [
      'Evitar reuniões',
      'Reduzir o número de commits',
      'Automatizar testes, builds e deploys',
      'Manter o código em um servidor local'
    ],
    resposta: 2
  }
];

const QuizCiCd = () => {
  const [passo, setPasso] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const navigate = useNavigate();

  const selecionarOpcao = (indice) => {
    setRespostas([...respostas, indice]);

    if (passo + 1 < perguntas.length) {
      setPasso(passo + 1);
    } else {
      avaliarResultado([...respostas, indice]);
    }
  };

  const avaliarResultado = (respostasUsuario) => {
    let acertos = 0;
    respostasUsuario.forEach((resposta, i) => {
      if (resposta === perguntas[i].resposta) {
        acertos++;
      }
    });

    if (acertos >= 3) {
      navigate('/congratulations');
    } else {
      navigate('/fail', { state: { tema: 'CI/CD', slug: 'cicd' } });
    }
  };

  const atual = perguntas[passo];

  return (
    <>
      <NavbarLogado />
      <div className="container mt-5 pt-5">
        <h2 className="mb-4">Quiz: CI/CD</h2>
        <div className="card p-4">
          <h4>{atual.pergunta}</h4>
          <ul className="list-group mt-3">
            {atual.opcoes.map((opcao, i) => (
              <li
                key={i}
                className="list-group-item list-group-item-action"
                style={{ cursor: 'pointer' }}
                onClick={() => selecionarOpcao(i)}
              >
                {opcao}
              </li>
            ))}
          </ul>
          <p className="mt-3">Pergunta {passo + 1} de {perguntas.length}</p>
        </div>
      </div>
    </>
  );
};

export default QuizCiCd;
