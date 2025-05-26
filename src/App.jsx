import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Páginas */
import Login from './app/pages/Login/login';
import Site from './site/Site';
import NovaConta from "./app/pages/NovaConta/novaconta";
import ResetSenha from "./app/pages/EsqueciSenha/resetsenha";
import Home from "./app/pages/Home/home";
import Devops from "./app/pages/DevOps/devops";
import CICD from "./app/pages/DevOps/cicd";
import Automacoes from "./app/pages/DevOps/automacoes";
import Cloud from "./app/pages/DevOps/cloud";
import InfraFisica from "./app/pages/DevOps/infra";
import QuizAutomacoes from './app/pages/quiz/automacoes/QuizAutomacoes';
import Congratulations from './app/pages/quiz/Congratulations';
import Fail from './app/pages/quiz/Fail';
import QuizCiCd from './app/pages/quiz/cicd/QuizCiCd';
import QuizCloud from './app/pages/quiz/cloud/QuizCloud';
import QuizInfra from './app/pages/quiz/infra/QuizInfra';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Site />} />
                <Route exact path='/app' element={<Login />} />
                <Route exact path='/app/novaconta' element={<NovaConta />} />
                <Route exact path='/app/resetsenha' element={<ResetSenha />} />
                <Route exact path='/app/home' element={<Home />} />
                <Route exact path='/app/devops' element={<Devops />} />
                <Route path="/devops/cicd" element={<CICD />} />
                <Route path="/devops/automacoes" element={<Automacoes />} />
                <Route path="/devops/cloud" element={<Cloud />} />
                <Route path="/devops/infra" element={<InfraFisica />} />
                <Route path="/quiz/automacoes" element={<QuizAutomacoes />} />
                <Route path="/congratulations" element={<Congratulations />} />
                <Route path="/fail" element={<Fail />} />
                <Route path="/quiz/cicd" element={<QuizCiCd />} />
                <Route path="/quiz/cloud" element={<QuizCloud />} />
                <Route path="/quiz/infra" element={<QuizInfra />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;