/* eslint-disable jsx-a11y/alt-text */
import React  from "react";
import {Link} from 'react-router-dom';

function Historia(){
    return (
        <>
            <section id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-text py-2">
                            <h1>Infra Clean</h1>
                            <h6>DevOps surgiu no fim dos anos 2000 como resposta aos conflitos entre equipes de desenvolvimento e operações. Ganhou força com a apresentação "10 Deploys a Day" em 2009, mostrando como a automação e colaboração podiam melhorar a entrega de software. Inspirado em práticas ágeis e lean, DevOps evoluiu com foco em integração contínua, entrega rápida e confiável, uso de infraestrutura como código e cultura de colaboração entre times.</h6>
                        </div>
                        {/* <div className="col-lg-6">
                            <img src="imagens/historia.png" height={350}></img>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Historia