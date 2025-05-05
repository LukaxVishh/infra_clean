import React  from "react";
import Menu from "./Components/menu"
import Banner from "./Components/banner"
import Features from "./Components/features"
import Automacoes from "./Components/automacoes"
import Solicitacoes from "./Components/solicitacoes"
import Contato from "./Components/contato"

function Site(){
    return (
        <>
            <Menu/>
            <Banner/>
            <Features/>
            <Automacoes/>
            <Solicitacoes/>
            <Contato/>
        </>
    )
}

export default Site