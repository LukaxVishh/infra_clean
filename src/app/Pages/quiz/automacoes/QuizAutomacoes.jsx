import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarLogado from '../../../components/NavbarLogado/NavbarLogado';

const perguntas = [
  {
    pergunta: 'O que é automação em DevOps?',
    opcoes: [
      'Executar tarefas manuais com mais atenção',
      'Repetir processos de forma manual e segura',
      'Usar scripts e ferramentas para executar tarefas repetitivas automaticamente',
      'Aumentar a quantidade de reuniões para coordenar tarefas'
    ],
    resposta: 2
  },
  {
    pergunta: 'Qual das ferramentas abaixo é usada para automação de infraestrutura?',
    opcoes: ['Jenkins', 'Terraform', 'Docker', 'Git'],
    resposta: 1
  },
  {
    pergunta: 'O que o Ansible faz?',
    opcoes: [
      'Gerencia containers',
      'Executa testes unitários',
      'Automatiza provisionamento e configuração de servidores',
      'Monitora aplicações em tempo real'
    ],
    resposta: 2
  },
  {
    pergunta: 'Qual comando do Git é usado para clonar um repositório?',
    opcoes: ['git push', 'git clone', 'git init', 'git commit'],
    resposta: 1
  },
  {
    pergunta: 'Em pipelines CI/CD, o que significa o termo "build"?',
    opcoes: [
      'Fazer login no servidor',
      'Construir e empacotar a aplicação para testes ou produção',
      'Criar uma máquina virtual',
      'Fazer upload de arquivos para o GitHub'
    ],
    resposta: 1
  }
];

const QuizAutomacoes = () => {
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
      navigate('/fail', { state: { tema: 'Automações', slug: 'automacoes' } });
    }
  };

  const atual = perguntas[passo];

  return (
    <>
      <NavbarLogado />
      <div className="container mt-5 pt-5">
        <h2 className="mb-4">Quiz: Automações em DevOps</h2>
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

export default QuizAutomacoes;
