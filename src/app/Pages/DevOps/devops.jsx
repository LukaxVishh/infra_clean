import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar"; // ajuste o caminho conforme sua estrutura
import Footer from "../../../site/Components/contato"; // ajuste o caminho conforme necessário
import "./devops.css";

function DevOps() {
    const navigate = useNavigate();

    return (
        <div className="devops-page">
            <Navbar />
            <section id="devops">
                <div className="container">
                    <div className="row text-center mb-4">
                        <div className="titulo w-100">
                            <h1>DevOps</h1>
                            <p>Conheça nossos tópicos de DevOps</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {/* CI/CD */}
                        <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex">
                            <div className="card flex-fill">
                                <div className="card-header text-center"><h1>CI/CD</h1></div>
                                <p className="card-text text-center">Integrações com Git</p>
                                <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                                    <button
                                        className="btn btn-lg btn-outline-dark mt-auto"
                                        onClick={() => navigate("/devops/cicd")}
                                    >
                                        Saiba mais
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Automações */}
                        <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex">
                            <div className="card flex-fill">
                                <div className="card-header text-center"><h1>Automações</h1></div>
                                    <p className="card-text text-center">Automatização de processos</p>
                                <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                                    <button
                                        className="btn btn-lg btn-outline-dark mt-auto"
                                        onClick={() => navigate("/devops/automacoes")}
                                    >
                                        Saiba mais
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Cloud */}
                        <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex">
                            <div className="card flex-fill">
                                <div className="card-header text-center"><h1>Cloud</h1></div>
                                    <p className="card-text text-center">Serviços em nuvem</p>
                                <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                                    <button
                                        className="btn btn-lg btn-outline-dark mt-auto"
                                        onClick={() => navigate("/devops/cloud")}
                                    >
                                        Saiba mais
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Infra Física */}
                        <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex">
                            <div className="card flex-fill">
                                <div className="card-header text-center"><h1>Infra Física</h1></div>
                                    <p className="card-text text-center">Infraestrutura física</p>
                                <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                                    <button
                                        className="btn btn-lg btn-outline-dark mt-auto"
                                        onClick={() => navigate("/devops/infra")}
                                    >
                                        Saiba mais
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default DevOps;