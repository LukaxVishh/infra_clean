import React  from "react";
import {Link} from 'react-router-dom';
import './resetsenha.css';

function Login() {
    return (
        <div id="reset-senha">
            <div className="align-itens-center text-center form-container">
                <form className="form-signin">
                    <img className="mb-4" src="/imagens/logoo.png" alt=""  />
                    <h1 className="h3 mb-3 fw-normal text-edit">Recuperar Conta</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="e-mail" />
                        <label htmlFor="floatingInput">E-mail:</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-outline" type="submit">Enviar</button>
                    <div className="login-links mt-5">
                            <Link to="/app/novaconta" className="mx-3 text-edit">Criar conta</Link>
                    </div>  
                    <p className="mt-5 mb-3 text-edit">&copy; Infra Clean</p>
                </form>
            </div>
        </div>
    );
}

export default Login