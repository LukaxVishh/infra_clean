import React from "react";
import Navbar from "../../components/Navbar/navbar"; // ajuste o caminho conforme sua estrutura
import Footer from "../../../site/Components/contato"; // ajuste o caminho conforme necessário
import './devops.css';

function Infra() {
    return (
        <div className="devops-page">
            <Navbar />
            <section id="infra-fisica" className="py-5">
                <div className="container text-center">
                    <h1>Infra Física</h1>
                    <p>
                        A Infraestrutura Física refere-se ao hardware e às instalações que suportam sistemas de TI, 
                        como servidores, data centers e equipamentos de rede essenciais para garantir a operação 
                        segura e eficiente de serviços e aplicações.
                    </p>
                    <img
                        src="https://via.placeholder.com/600x300" // substitua pelo caminho da sua imagem
                        alt="Infraestrutura Física"
                        className="img-fluid my-4"
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Infra;