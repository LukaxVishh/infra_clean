import React  from "react";

function Menu(){
    return (

        <nav className="navbar fixed-top navbar-expand-md bg-light navbar-light">
            <div className="container">
                <a className="navbar-brand" href>
                    <img className="img-logo" src="imagens/sicredii.png" alt="logo"></img>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#banner">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#feature">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#automacoes">Automações</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#solicitacoes">Solicitações</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#contato">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Menu