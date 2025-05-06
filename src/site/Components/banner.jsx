/* eslint-disable jsx-a11y/alt-text */
import React  from "react";
import {Link} from 'react-router-dom';

function Banner(){
    return (
        <>
            <section id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-text col-lg-6 col-md-6">
                            <h1>Infra Clean</h1>
                            <h6>DevOps é uma cultura e um conjunto de práticas que integram o desenvolvimento de software (Dev) e as operações de TI (Ops), visando automação, colaboração e melhoria contínua. Seus principais pilares incluem Integração Contínua (CI), onde os desenvolvedores integram código frequentemente com testes automatizados; Entrega Contínua (CD), que automatiza deploys com segurança; Infraestrutura como Código (IaC), permitindo gerenciar servidores via código; Monitoramento e Logs, para detectar problemas rapidamente; e Automação, reduzindo erros manuais. Ferramentas como Git, Jenkins, Docker, Kubernetes e Terraform são amplamente utilizadas. Os benefícios do DevOps incluem deploys mais rápidos, menos falhas em produção, feedback contínuo e maior colaboração entre equipes, tornando o desenvolvimento de software mais ágil e eficiente.</h6>
                            <Link to="/app/novaconta" className="btn btn-dark btn-lg btn-banner">Criar conta</Link>
                            <Link tp="/app" className="btn btn-outline-light btn-lg btn-banner">Fazer Login</Link>
                        </div>
                        <div className="col-lg-6">
                            <img src="imagens/bann.png" height={505}></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner