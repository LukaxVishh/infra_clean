import React from "react";
import "./Features.css"; 

function Features() {
    return (
        <section id="feature" className="features-section">
            <div className="features-container">
                <div className="features-row">
                    <div className="feature-box">
                        <i className="icon fa-solid fa-people-roof"></i>
                        <h3>Cloud</h3>
                        <p>
                            Computação em nuvem permite acessar, armazenar e processar dados via internet, com escalabilidade, flexibilidade e redução de custos operacionais.
                        </p>
                    </div>
                    <div className="feature-box">
                        <i className="icon fa-solid fa-gear"></i>
                        <h3>CI/CD</h3>
                        <p>
                            CI/CD é uma prática DevOps que automatiza a integração de código (CI) e a entrega contínua (CD), agilizando deploys com qualidade e menos erros.
                        </p>
                    </div>
                    <div className="feature-box">
                        <i className="icon fa-solid fa-lightbulb"></i>
                        <h3>Automação</h3>
                        <p>
                            Automação é o uso de ferramentas e scripts para executar tarefas repetitivas de forma automática, aumentando a eficiência, padronização e reduzindo erros.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
