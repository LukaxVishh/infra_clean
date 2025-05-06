import React  from "react";


function Features(){
    return (
        <>
            <section id="feature">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 feature-box">
                            <i className="icon fa-solid fa-people-roof fa-5x"></i>
                            <h3>Cloud</h3>
                            <p>Computação em nuvem permite acessar, armazenar e processar dados via internet, com escalabilidade, flexibilidade e redução de custos operacionais.</p>
                        </div>
                        <div className="col-lg-4 feature-box">
                            <i className="icon fa-solid fa-gear fa-5x"></i>
                            <h3>CI/CD</h3>
                            <p>CI/CD é uma prática DevOps que automatiza a integração de código (CI) e a entrega contínua (CD), agilizando deploys com qualidade e menos erros.</p>
                        </div>
                        <div className="col-lg-4 feature-box">
                            <i className="icon fa-solid fa-lightbulb fa-5x"></i>
                            <h3>Automação</h3>
                            <p>Automação é o uso de ferramentas e scripts para executar tarefas repetitivas de forma automática, aumentando a eficiência, padronização e reduzindo erros.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features