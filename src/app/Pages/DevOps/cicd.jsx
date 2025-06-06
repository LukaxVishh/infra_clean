import React from "react";
import Navbar from "../../components/NavbarLogado/NavbarLogado"; 
import Footer from "../../../site/Components/contato"; 
import './Cicd.css';

function CICD() {
    return (
        <div className="devops-page">
            <Navbar />
            <section id="cicd" className="py-5">
                <div className="container text-center">
                    <br />
                    <h1 className="cicd-title">CI/CD (Integração e Entrega Contínua)</h1>

                    <div className="cicd-content">

                        <div className="cicd-box">
                            <h3>O que é CI/CD?</h3>
                            <p>
                                CI/CD é uma metodologia DevOps que automatiza o processo de integração, teste e entrega de software. 
                                Ela permite maior agilidade, qualidade e segurança nas implementações.
                            </p>
                        </div>

                        <div className="cicd-box">
                            <h3>Integração Contínua (CI)</h3>
                            <ul>
                                <li>Integração frequente de mudanças no código.</li>
                                <li>Execução automática de testes unitários.</li>
                                <li>Identificação precoce de erros.</li>
                            </ul>
                        </div>

                        <div className="cicd-box">
                            <h3>Entrega Contínua (CD)</h3>
                            <ul>
                                <li>Automatiza a entrega do software para ambientes de produção ou homologação.</li>
                                <li>Facilita deploys rápidos e seguros.</li>
                                <li>Minimiza riscos e retrabalhos.</li>
                            </ul>
                        </div>

                        <div className="cicd-box">
                            <h3>Benefícios do CI/CD</h3>
                            <ul>
                                <li>Entrega mais rápida e frequente de funcionalidades.</li>
                                <li>Redução de falhas em produção.</li>
                                <li>Feedback contínuo sobre a qualidade do software.</li>
                                <li>Melhora na colaboração entre equipes.</li>
                            </ul>
                        </div>

                        <div className="cicd-box">
                            <h3>Ferramentas Populares</h3>
                            <ul>
                                <li>Jenkins</li>
                                <li>GitLab CI</li>
                                <li>CircleCI</li>
                                <li>Travis CI</li>
                                <li>GitHub Actions</li>
                            </ul>
                        </div>

                        <div className="cicd-box">
                            <h3>Desafios</h3>
                            <ul>
                                <li>Configuração inicial complexa.</li>
                                <li>Manutenção de pipelines.</li>
                                <li>Gestão de segurança e credenciais.</li>
                                <li>Garantia de qualidade em automações.</li>
                            </ul>
                        </div>

                        <div className="cicd-box">
                            <h3>Melhores Práticas</h3>
                            <ul>
                                <li>Automatizar o máximo possível.</li>
                                <li>Manter pipelines simples e eficientes.</li>
                                <li>Executar testes em todas as etapas.</li>
                                <li>Monitorar continuamente o desempenho.</li>
                            </ul>
                        </div>

                        <div className="cicd-box">
                            <h3>Tendências</h3>
                            <ul>
                                <li>Pipelines como Código (IaC).</li>
                                <li>Integração com segurança (DevSecOps).</li>
                                <li>Deploys canários e blue-green deployments.</li>
                                <li>Automação baseada em Inteligência Artificial.</li>
                            </ul>
                        </div>

                    </div>

                    <img
                        src="../imagens/cicdq.png"
                        alt="CI/CD"
                        className="cicd-img"
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default CICD;
