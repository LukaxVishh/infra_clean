import React from "react";
import Navbar from "../../components/Navbar/navbar"; // ajuste o caminho se necessário
import Footer from "../../../site/Components/contato"; // ajuste o caminho se necessário
import './devops.css';

function CICD() {
    return (
        <div className="devops-page">
            <Navbar />
            <section id="cicd" className="py-5">
                <div className="container text-center">
                    <h1>CI/CD</h1>
                    <p>
                        CI/CD (Integração Contínua e Entrega Contínua) é uma prática essencial no DevOps que permite
                        automatizar o processo de integração de código e entrega de software. Técnicas como pipelines
                        automatizados ajudam a reduzir erros e acelerar o desenvolvimento.
                    </p>
                    <img
                        src="https://via.placeholder.com/600x300" // Substitua pelo caminho da sua imagem
                        alt="CI/CD"
                        className="img-fluid my-4"
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default CICD;