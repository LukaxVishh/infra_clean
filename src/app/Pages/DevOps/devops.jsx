import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/NavbarLogado/NavbarLogado";
import "./DevOps.css"; 

function DevOps() {
  const navigate = useNavigate();

  const cards = [
    { title: "CI/CD", desc: "Integrações com Git", path: "/devops/cicd" },
    { title: "Automações", desc: "Automatização de processos", path: "/devops/automacoes" },
    { title: "Cloud", desc: "Serviços em nuvem", path: "/devops/cloud" },
    { title: "Infra Física", desc: "Infraestrutura física", path: "/devops/infra" }
  ];

  return (
    <>
    
   
    <Navbar />
    <div className="devops-container">
     

      <main className="devops-main">
        <div className="devops-header">
          <h1>DevOps</h1>
          <p>Conheça nossos tópicos de DevOps</p>
        </div>

        <div className="devops-grid">
          {cards.map(({ title, desc, path }) => (
            <div key={title} className="devops-card">
              <h2>{title}</h2>
              <p>{desc}</p>
              <button onClick={() => navigate(path)}>Saiba mais</button>
            </div>
          ))}
        </div>
      </main>

      <footer className="devops-footer">
        <div className="devops-social">
          <a href="#" aria-label="Facebook" className="facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter" className="twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="LinkedIn" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Instagram" className="instagram"><i className="fab fa-instagram"></i></a>
        </div>
        <p>© 2025 | Designed by Infra Clean</p>
      </footer>
    </div>
    </>
  );
}


export default DevOps;
