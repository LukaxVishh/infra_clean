import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../../site/Components/contato";
import './devops.css';

function Automacoes() {
    return (
        <div className="devops-page">
            <Navbar />
            <section id="automacoes" className="py-5" style={{ paddingTop: "120px" }}>
                <div className="container text-center">
                    <h1>Automações</h1>
                    <p>
                        A automação é uma prática que permite eliminar tarefas repetitivas e manuais, aumentando a
                        eficiência e reduzindo erros. Ferramentas como Ansible, Jenkins e scripts personalizados são
                        amplamente utilizadas.
                    </p>
                    <img
                        src="https://via.placeholder.com/600x300"
                        alt="Automações"
                        className="img-fluid my-4"
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Automacoes;