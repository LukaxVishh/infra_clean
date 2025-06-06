import React from "react";
import Navbar from "../../components/NavbarLogado/NavbarLogado"; // ajuste o caminho conforme sua estrutura
import Footer from "../../../site/Components/contato"; // ajuste o caminho conforme necessário
import './Cloud.css'; // certifique-se de ter um arquivo CSS para estilização

function Cloud() {
    return (
        <div className="devops-page">
            <Navbar />
            <section id="cloud" className="py-5">
                <div className="container text-center">
                    <br />
                    <h1 className="cloud-title">Cloud Computing (Computação em Nuvem)</h1>

                    <div className="cloud-content">

                        <div className="cloud-box">
                            <h3>O que é Cloud Computing?</h3>
                            <p>Cloud Computing é um modelo que fornece recursos como servidores, armazenamento e software pela internet, eliminando a necessidade de infraestrutura física.</p>
                        </div>

                        <div className="cloud-box">
                            <h3>Características Principais</h3>
                            <ul>
                                <li>Elasticidade e escalabilidade.</li>
                                <li>Pagamento sob demanda.</li>
                                <li>Serviço sob medida.</li>
                                <li>Acesso remoto.</li>
                                <li>Manutenção automática.</li>
                            </ul>
                        </div>

                        <div className="cloud-box">
                            <h3>Modelos de Serviço</h3>
                            <ol>
                                <li><strong>IaaS</strong>: Infraestrutura como Serviço.</li>
                                <li><strong>PaaS</strong>: Plataforma como Serviço.</li>
                                <li><strong>SaaS</strong>: Software como Serviço.</li>
                            </ol>
                        </div>

                        <div className="cloud-box">
                            <h3>Modelos de Implantação</h3>
                            <ul>
                                <li>Nuvem Pública</li>
                                <li>Nuvem Privada</li>
                                <li>Nuvem Híbrida</li>
                                <li>Nuvem Comunitária</li>
                            </ul>
                        </div>

                        <div className="cloud-box">
                            <h3>Benefícios</h3>
                            <ul>
                                <li>Redução de custos.</li>
                                <li>Agilidade e escalabilidade.</li>
                                <li>Acesso a tecnologias avançadas.</li>
                                <li>Backup e recuperação.</li>
                                <li>Facilidade na colaboração.</li>
                            </ul>
                        </div>

                        <div className="cloud-box">
                            <h3>Desafios</h3>
                            <ul>
                                <li>Segurança de dados.</li>
                                <li>Dependência da internet.</li>
                                <li>Compliance.</li>
                                <li>Vendor Lock-in.</li>
                            </ul>
                        </div>

                        <div className="cloud-box">
                            <h3>Provedores Principais</h3>
                            <ul>
                                <li>AWS</li>
                                <li>Microsoft Azure</li>
                                <li>Google Cloud</li>
                                <li>IBM, Oracle, Alibaba</li>
                            </ul>
                        </div>

                        <div className="cloud-box">
                            <h3>Tendências</h3>
                            <ul>
                                <li>Edge Computing</li>
                                <li>Serverless</li>
                                <li>Multi-cloud</li>
                                <li>Integração com IA e Big Data</li>
                            </ul>
                        </div>

                    </div>

                    <img
                        src="../imagens/cloudq.png"
                        alt="Cloud Computing"
                        className="cloud-img"
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Cloud;
