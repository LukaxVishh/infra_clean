import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
     
        navigate("/app/devops");
    };

    return (
        <div className="login-container">
            <form className="form-box" onSubmit={handleSubmit}>
                <img src="/imagens/logoo.png" alt="Logo Infra Clean" className="logo" />
                <h1>Entrar</h1>
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail" required />
                </div>
                <div className="form-group">
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" placeholder="Digite sua senha" required />
                </div>
                <div className="form-group checkbox-group">
                    <label>
                        <input type="checkbox" /> Lembre-se
                    </label>
                </div>
                <button type="submit">Entrar</button>
                <div className="links">
                    <Link to="/app/resetsenha">Esqueci a senha</Link>
                    <span> | </span>
                    <Link to="/app/novaconta">Criar conta</Link>
                </div>
                <p className="footer">&copy; Infra Clean</p>
            </form>
        </div>
    );
}

export default Login