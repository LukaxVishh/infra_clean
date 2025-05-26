import React from "react";
import Navbar from "../../components/NavbarLogado/NavbarLogado"; // ajuste o caminho conforme sua estrutura
import Footer from "../../../site/Components/contato"; // ajuste o caminho conforme necessário
import './devops.css';

function Cloud() {
    return (
        <div className="devops-page">
            <Navbar />
            <section id="cloud" className="py-5">
                <div className="container text-center">
                    <h1>Cloud</h1>
                    <p>
                        A Cloud envolve a utilização de servidores remotos para armazenar, gerenciar e processar dados, oferecendo 
                        escalabilidade, flexibilidade e eficiência. Tecnologias de cloud computing como AWS, Azure e Google Cloud 
                        transformaram a maneira de desenvolver e entregar aplicações.
                    </p>
                    <img
                        src="https://via.placeholder.com/600x300" // substitua pelo caminho da sua imagem
                        alt="Cloud Computing"
                        className="img-fluid my-4"
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Cloud;