import React  from "react";


function Automacoes(){
    return (
        <>
            <section id="automacoes">
                <div className="container">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="100">
                                <img src="imagens/desconto.png" className="d-block w-100" alt="desconto de recebiveis"></img>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="imagens/cheque.png" className="d-block w-100" alt="cartão e cheque especial"></img>
                            </div>
                            <div className="carousel-item">
                                <img src="imagens/recuperacao.png" className="d-block w-100" alt="recuperacao de credito"></img>
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