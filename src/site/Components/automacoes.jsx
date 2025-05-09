import React  from "react";


function Automacoes(){
    return (
        <>
            <section id="automacoes">
                <div className="container">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="100">
                                <img src="imagens/cicd.png" className="d-block w-100" alt="CI/CD"></img>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="imagens/infra.png" className="d-block w-100" alt="infra"></img>
                            </div>
                            <div className="carousel-item">
                                <img src="imagens/cloud.png" className="d-block w-100" alt="Cloud"></img>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Automacoes