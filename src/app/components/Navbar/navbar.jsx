import React  from "react";
import './navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-md bg-light navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href>
                        <img className="img-logo" src="imagens/logo.png" alt="logo"></img>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/app" className="nav-link" aria-current="page" href="#banner">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar