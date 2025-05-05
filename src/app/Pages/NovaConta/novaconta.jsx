import React  from "react";
import {Link} from 'react-router-dom';
import './novaconta.css';

function NovaConta() {
    return (
        <div id="criar-conta">
            <div className="align-itens-center text-center form-container">
                <form className="form-signin">
                    <img className="mb-4" src="/imagens/sicredii.png" alt=""  />
                    <h1 className="h3 mb-3 fw-normal text-edit">Criar Conta</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="e-mail" />
                        <label htmlFor="floatingInput">E-mail:</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Senha</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-outline" type="submit">Criar conta</button>
                    <div className="login-links mt-5">
                        <Link to="/app" className="mx-3 text-edit">Ja tenho uma conta</Link>
                    </div>
                    <p className="mt-5 mb-3 text-edit">&copy; Sicredi Integração PR/SC</p>
                </form>
            </div>
        </div>
    );
}

export default NovaConta