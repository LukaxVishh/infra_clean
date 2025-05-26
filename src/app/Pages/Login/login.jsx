import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar validação futuramente
        navigate("/app/devops"); // ajuste para o caminho da sua página
    };

    return (
        <div id="login">
            <div className="align-itens-center text-center form-container">
                <form className="form-signin" onSubmit={handleSubmit}>
                    <img className="mb-4" src="imagens/logoo.png" alt=""  />
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="e-mail" />
                        <label htmlFor="floatingInput">E-mail:</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Senha</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" /> Lembre-se
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-outline" type="submit">Entrar</button>
                    <div className="login-links mt-5">
                        <a href="/app/resetsenha" className="mx-3 text-edit">Esqueci a senha</a>
                        <Link to="/app/novaconta" className="mx-3 text-edit">Criar conta</Link>
                    </div>
                    <p className="mt-5 mb-3 text-edit">&copy; Infra Clean</p>
                </form>
            </div>
        </div>
    );
}

export default Login