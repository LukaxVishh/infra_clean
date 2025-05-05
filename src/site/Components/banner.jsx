/* eslint-disable jsx-a11y/alt-text */
import React  from "react";
import {Link} from 'react-router-dom';

function Banner(){
    return (
        <>
            <section id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-text col-lg-6 col-md-6">
                            <h1>Integra System</h1>
                            <h6>Sistema desenvolvido pela Cooperativa Sicredi Integração PR/SC com o objetivo de unificar em um Saas todas as demandas, separando por areas, permissões e necessidades!</h6>
                            <Link to="/app/novaconta" className="btn btn-success btn-lg btn-banner">Criar conta</Link>
                            <Link tp="/app" className="btn btn-outline-light btn-lg btn-banner">Fazer Login</Link>
                        </div>
                        <div className="col-lg-6">
                            <img src="imagens/banner.png" height={505}></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner