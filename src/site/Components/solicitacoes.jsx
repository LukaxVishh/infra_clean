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
                                <div className="card-header"><h1>Integra System</h1></div>
                                <div className="card-body">
                                    <h4>Melhoria ou Implantação</h4>
                                    <p>Area solicitante</p>
                                    <p>Descrição</p>
                                    <button className="btn btn-lg btn-outline-success">Solicitar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header"><h1>Fluid</h1></div>
                                <div className="card-body">
                                    <h4>Melhoria ou Implantação</h4>
                                    <p>Area solicitante</p>
                                    <p>Descrição</p>
                                    <button className="btn btn-lg btn-outline-success">Solicitar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header"><h1>HGV</h1></div>
                                <div className="card-body">
                                    <h4>Melhoria ou Implantação</h4>
                                    <p>Area solicitante</p>
                                    <p>Descrição</p>
                                    <button className="btn btn-lg btn-outline-success">Solicitar</button>
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