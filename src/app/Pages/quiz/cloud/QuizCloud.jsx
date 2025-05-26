import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarLogado from '../../../components/NavbarLogado/NavbarLogado';

const perguntas = [
  {
    pergunta: 'O que é computação em nuvem (Cloud Computing)?',
    opcoes: [
      'Executar tarefas com inteligência artificial',
      'Rodar aplicações apenas localmente',
      'Entrega de serviços de computação pela internet',
      'Desenvolvimento de software em tempo real'
    ],
    resposta: 2
  },
  {
    pergunta: 'Qual destas é uma plataforma de cloud computing?',
    opcoes: ['AWS', 'GitHub', 'Linux', 'Oracle SQL'],
    resposta: 0
  },
  {
    pergunta: 'O que é IaaS?',
    opcoes: [
      'Internet as a Service',
      'Infrastructure as a Service',
      'Interface and Access System',
      'Integration as a Solution'
    ],
    resposta: 1
  },
  {
    pergunta: 'Qual serviço é ideal para hospedar um site estático?',
    opcoes: ['Amazon S3', 'EC2', 'RDS', 'CloudTrail'],
    resposta: 0
  },
  {
    pergunta: 'Qual é um benefício principal da computação em nuvem?',
    opcoes: [
      'Custos fixos de servidores',
      'Maior complexidade de escalabilidade',
      'Escalabilidade e pagamento conforme o uso',
      'Desempenho inferior a servidores locais'
    ],
    resposta: 2
  }
];

const QuizCloud = () => {
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
      navigate('/fail', { state: { tema: 'Cloud', slug: 'cloud' } });
    }
  };

  const atual = perguntas[passo];

  return (
    <>
      <NavbarLogado />
      <div className="container mt-5 pt-5">
        <h2 className="mb-4">Quiz: Cloud Computing</h2>
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

export default QuizCloud;
