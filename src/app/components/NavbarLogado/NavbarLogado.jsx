import React from "react";
import '../Navbar/navbar.css';
import { useNavigate } from 'react-router-dom';

function NavbarLogado() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="navbar fixed-top navbar-expand-md bg-light navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img className="img-logo" src="../imagens/logoo.png" alt="logo" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLogadoContent" aria-controls="navbarLogadoContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarLogadoContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/app/devops">Home</a>
                        </li>

                        {/* Dropdown de Quiz */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="quizDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Quiz
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="quizDropdown">
                                <li><a className="dropdown-item" href="/quiz/automacoes">Automações</a></li>
                                <li><a className="dropdown-item" href="/quiz/cicd">CI/CD</a></li>
                                <li><a className="dropdown-item" href="/quiz/cloud">Cloud</a></li>
                                <li><a className="dropdown-item" href="/quiz/infra">Infra</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" role="button" onClick={handleLogout} style={{ cursor: "pointer" }}>
                                Sair
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarLogado;
