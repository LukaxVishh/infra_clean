import React from "react";

function Cards(props){
    return (
        <>
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Nacionalidade: {props.nacionalidade}</p>
            <p>Profissao: {props.profissao}</p>
            <br></br>
        </>
    )
}

export default Cards