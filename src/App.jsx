import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

/* Paginas */
import Login from './app/Pages/Login/login'
import Site from './site/Site'
import NovaConta from "./app/Pages/NovaConta/novaconta"
import ResetSenha from "./app/Pages/EsqueciSenha/resetsenha"
import Home from "./app/Pages/Home/home"

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' Component={Site}/>
                <Route exact path='/app' Component={Login}/>
                <Route exact path='/app/novaconta' Component={NovaConta}/>
                <Route exact path='/app/resetsenha' Component={ResetSenha}/>
                <Route exact path='/app/home' Component={Home}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;