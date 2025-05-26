import React from "react";
import Navbar from "../../components/NavbarLogado/NavbarLogado"; 
import Footer from "../../../site/Components/contato"; 
import './infra.css'; // ou continue com devops.css

function Infra() {
    return (
        <div className="devops-page">
            <Navbar />
            <section id="infra-fisica" className="py-5" style={{ paddingTop: "120px" }}>
                <div className="container text-center">
                    <br />
                    <h1 className="infra-title">Infraestrutura Física</h1>

                    <div className="infra-content">

                        <div className="infra-box">
                            <h3>O que é Infraestrutura Física?</h3>
                            <p>
                                A infraestrutura física corresponde ao conjunto de equipamentos e instalações que fornecem 
                                suporte às operações de tecnologia da informação, incluindo servidores, roteadores, switches 
                                e data centers.
                            </p>
                        </div>

                        <div className="infra-box">
                            <h3>Principais Componentes</h3>
                            <ul>
                                <li><strong>Servidores:</strong> máquinas que processam e armazenam dados.</li>
                                <li><strong>Data Centers:</strong> locais especializados para abrigar equipamentos de TI.</li>
                                <li><strong>Equipamentos de Rede:</strong> roteadores, switches, firewalls.</li>
                                <li><strong>Sistemas de Energia:</strong> nobreaks e geradores para garantir disponibilidade.</li>
                            </ul>
                        </div>

                        <div className="infra-box">
                            <h3>Importância</h3>
                            <ul>
                                <li>Garantia da disponibilidade e continuidade dos serviços.</li>
                                <li>Suporte ao processamento de grandes volumes de dados.</li>
                                <li>Base para implementação de segurança física e lógica.</li>
                            </ul>
                        </div>

                        <div className="infra-box">
                            <h3>Desafios</h3>
                            <ul>
                                <li>Manutenção e atualização constante dos equipamentos.</li>
                                <li>Gerenciamento do consumo de energia.</li>
                                <li>Garantia de segurança física e proteção contra desastres.</li>
                            </ul>
                        </div>

                        <div className="infra-box">
                            <h3>Boas Práticas</h3>
                            <ul>
                                <li>Monitoramento contínuo da infraestrutura.</li>
                                <li>Planejamento de capacidade para evitar sobrecargas.</li>
                                <li>Implementação de redundância e backups.</li>
                                <li>Automatização de processos sempre que possível.</li>
                            </ul>
                        </div>

                    </div>

                    <img
                        src="../imagens/infraq.png" 
                        alt="Infraestrutura Física"
                        className="infra-img"
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Infra;
