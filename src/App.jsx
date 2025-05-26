import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Páginas */
import Login from './app/Pages/Login/login';
import Site from './site/Site';
import NovaConta from "./app/Pages/NovaConta/novaconta";
import ResetSenha from "./app/Pages/EsqueciSenha/resetsenha";
import Home from "./app/Pages/Home/home";
import Devops from "./app/Pages/DevOps/devops";
import CICD from "./app/Pages/DevOps/cicd";
import Automacoes from "./app/Pages/DevOps/automacoes";
import Cloud from "./app/Pages/DevOps/cloud";
import InfraFisica from "./app/Pages/DevOps/infra";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Site/>}/>
                <Route exact path='/app' element={<Login/>}/>
                <Route exact path='/app/novaconta' element={<NovaConta/>}/>
                <Route exact path='/app/resetsenha' element={<ResetSenha/>}/>
                <Route exact path='/app/home' element={<Home/>}/>
                <Route exact path='/app/devops' element={<Devops/>}/>
                <Route path="/devops/cicd" element={<CICD />} />
                <Route path="/devops/automacoes" element={<Automacoes />} />
                <Route path="/devops/cloud" element={<Cloud />} />
                <Route path="/devops/infra" element={<InfraFisica />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;