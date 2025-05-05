import React  from "react";


function Features(){
    return (
        <>
            <section id="feature">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 feature-box">
                            <i className="icon fa-solid fa-people-roof fa-5x"></i>
                            <h3>Centralização</h3>
                            <p>Objetivo de centralizar em uma plataforma as ferramentas mais utilizadas no dia a dia!</p>
                        </div>
                        <div className="col-lg-4 feature-box">
                            <i className="icon fa-solid fa-gear fa-5x"></i>
                            <h3>Gerenciamento</h3>
                            <p>Facilitar o gerenciamento de demandas atribuidas as areas através da plataforma centralizada!</p>
                        </div>
                        <div className="col-lg-4 feature-box">
                            <i className="icon fa-solid fa-lightbulb fa-5x"></i>
                            <h3>Inovação</h3>
                            <p>Acelerar o desenvolvimento da area de Processos e qualidade expandindo a inovação e tecnologia!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features