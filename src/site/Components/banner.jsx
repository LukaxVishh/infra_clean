/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from 'react-router-dom';
import './Banner.css'; 

function Banner() {
    return (
        <section  className="banner-section">

            <div className="banner-container">
                <div className="banner-row">
                    <div className="banner-text">
                        <h1 className="text-white">Infra Clean</h1>
                        <h6>
                            DevOps é uma cultura e um conjunto de práticas que integram o desenvolvimento de software (Dev) e as operações de TI (Ops), visando automação, colaboração e melhoria contínua. Seus principais pilares incluem Integração Contínua (CI), onde os desenvolvedores integram código frequentemente com testes automatizados; Entrega Contínua (CD), que automatiza deploys com segurança; Infraestrutura como Código (IaC), permitindo gerenciar servidores via código; Monitoramento e Logs, para detectar problemas rapidamente; e Automação, reduzindo erros manuais. Ferramentas como Git, Jenkins, Docker, Kubernetes e Terraform são amplamente utilizadas. Os benefícios do DevOps incluem deploys mais rápidos, menos falhas em produção, feedback contínuo e maior colaboração entre equipes, tornando o desenvolvimento de software mais ágil e eficiente.
                        </h6>
                        <div className="banner-buttons">
                            <Link to="/app/novaconta" className="btn-light">Criar conta</Link>
                            <Link to="/app" className="btn-light">Fazer Login</Link>
                        </div>
                    </div>
                    <div className="banner-image">
                        <img src="imagens/bann.png" height={505} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
