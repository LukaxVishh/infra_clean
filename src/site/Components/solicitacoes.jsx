import React  from "react";


function Solicitacoes(){
    return (
        <>
            <section id="solicitacoes">
                <div className="container">
                    <div className="row text-center">
                        <div className="titulo">
                            <h1>Solicitações</h1>
                            <p>Para solicitações de melhorias ou implementações</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header"><h1>Cloud</h1></div>
                                <div className="card-body">
                                    <h4>Melhoria ou Implantação</h4>
                                    <p>Area solicitante</p>
                                    <p>Descrição</p>
                                    <button className="btn btn-lg btn-outline-dark">Solicitar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header"><h1>Infra Fisica</h1></div>
                                <div className="card-body">
                                    <h4>Melhoria ou Implantação</h4>
                                    <p>Area solicitante</p>
                                    <p>Descrição</p>
                                    <button className="btn btn-lg btn-outline-dark">Solicitar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header"><h1>CI/CD</h1></div>
                                <div className="card-body">
                                    <h4>Melhoria ou Implantação</h4>
                                    <p>Area solicitante</p>
                                    <p>Descrição</p>
                                    <button className="btn btn-lg btn-outline-dark">Solicitar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Solicitacoes