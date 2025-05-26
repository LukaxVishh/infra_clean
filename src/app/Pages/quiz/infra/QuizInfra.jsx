import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarLogado from '../../../components/NavbarLogado/NavbarLogado';

const perguntas = [
  {
    pergunta: 'O que é infraestrutura de TI?',
    opcoes: [
      'Uma linguagem de programação',
      'Conjunto de componentes físicos e virtuais que suportam sistemas de TI',
      'Sistema de marketing digital',
      'Departamento de vendas de tecnologia'
    ],
    resposta: 1
  },
  {
    pergunta: 'Qual destes é considerado um componente de infraestrutura?',
    opcoes: ['Framework', 'Servidor', 'API REST', 'Software de design'],
    resposta: 1
  },
  {
    pergunta: 'O que é redundância em infraestrutura?',
    opcoes: [
      'Repetição de senhas',
      'Cópia de arquivos em várias pastas',
      'Estratégia para garantir disponibilidade em caso de falha',
      'Processo de desligamento automático do servidor'
    ],
    resposta: 2
  },
  {
    pergunta: 'O que é monitoramento de infraestrutura?',
    opcoes: [
      'Ato de observar manualmente os servidores',
      'Uso de ferramentas para rastrear saúde e desempenho dos sistemas',
      'Criação de dashboards estáticos',
      'Desenho de topologias de rede'
    ],
    resposta: 1
  },
  {
    pergunta: 'Qual protocolo é comumente usado para gerenciar remotamente servidores?',
    opcoes: ['HTTP', 'FTP', 'SSH', 'SMTP'],
    resposta: 2
  }
];

const QuizInfra = () => {
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
      navigate('/fail', { state: { tema: 'Infraestrutura', slug: 'infra' } });
    }
  };

  const atual = perguntas[passo];

  return (
    <>
      <NavbarLogado />
      <div className="container mt-5 pt-5">
        <h2 className="mb-4">Quiz: Infraestrutura de TI</h2>
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

export default QuizInfra;
