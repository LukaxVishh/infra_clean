import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './novaconta.css';

function NovaConta() {
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();

    
        navigate('/app');
    };

    return (
        <div className="nova-conta-container">
            <form className="form-box" onSubmit={handleSubmit}>
                <img src="/imagens/logoo.png" alt="Logo Infra Clean" className="logo" />
                <h1>Criar Conta</h1>
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail" required />
                </div>
                <div className="form-group">
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" placeholder="Digite sua senha" required />
                </div>
                <button type="submit">Criar conta</button>
                <div className="links">
                    <Link to="/login">Já tenho uma conta</Link>
                </div>
                <p className="footer">&copy; Infra Clean</p>
            </form>
        </div>
    );
}

export default NovaConta;
