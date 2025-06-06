import React from "react";
import Navbar from "../../components/NavbarLogado/NavbarLogado";
import Footer from "../../../site/Components/contato";
import './Automacoes.css';

function Automacoes() {
    return (
        <div className="devops-page">
            <Navbar />
            <section id="automacoes" className="py-5" style={{ paddingTop: "120px" }}>
                <div className="container text-center">
                    <br />
                    <h1 className="automacoes-title">Automações em DevOps</h1>

                    <div className="automacoes-content">

                        <div className="automacoes-box">
                            <h3>O que é Automação?</h3>
                            <p>
                                Automação em DevOps é a prática de usar ferramentas e scripts para executar tarefas rotineiras 
                                automaticamente, reduzindo falhas humanas e acelerando processos.
                            </p>
                        </div>

                        <div className="automacoes-box">
                            <h3>Benefícios</h3>
                            <ul>
                                <li>Aumento da eficiência operacional.</li>
                                <li>Redução de erros humanos.</li>
                                <li>Velocidade no provisionamento de ambientes.</li>
                                <li>Padronização de processos.</li>
                            </ul>
                        </div>

                        <div className="automacoes-box">
                            <h3>Principais Ferramentas</h3>
                            <ul>
                                <li><strong>Ansible:</strong> Automação de configuração e deploy.</li>
                                <li><strong>Jenkins:</strong> Automação de pipelines de CI/CD.</li>
                                <li><strong>Terraform:</strong> Infraestrutura como código (IaC).</li>
                                <li><strong>Scripts personalizados:</strong> Shell, Python, PowerShell.</li>
                            </ul>
                        </div>

                        <div className="automacoes-box">
                            <h3>Áreas Comuns de Automação</h3>
                            <ul>
                                <li>Provisionamento de servidores e infraestrutura.</li>
                                <li>Deploy contínuo de aplicações.</li>
                                <li>Monitoramento e geração de alertas.</li>
                                <li>Backup e recuperação de dados.</li>
                            </ul>
                        </div>

                        <div className="automacoes-box">
                            <h3>Desafios</h3>
                            <ul>
                                <li>Manutenção de scripts complexos.</li>
                                <li>Gerenciamento de permissões e segurança.</li>
                                <li>Garantia de confiabilidade nas automações.</li>
                            </ul>
                        </div>

                        <div className="automacoes-box">
                            <h3>Melhores Práticas</h3>
                            <ul>
                                <li>Documentar todos os processos automatizados.</li>
                                <li>Executar testes antes de implantar automações.</li>
                                <li>Usar versionamento para scripts e playbooks.</li>
                                <li>Priorizar segurança e controle de acesso.</li>
                            </ul>
                        </div>

                    </div>

                    <img
                        src="../imagens/automa.png"
                        alt="Automações"
                        className="automacoes-img"
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Automacoes;
