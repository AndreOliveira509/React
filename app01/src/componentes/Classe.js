import React,{useState} from "react";
import TheClasse from "./Classe2" 
import Carro from "./Carro";

export default function Classe(){
    const [carro,setCarro]=useState(true)

    const mostrarOcultar=()=>{
        setCarro(!carro)
    }
    return(
        <>
        <h1>componentes de classe</h1>
        <TheClasse canal="cfb cursos" curso="React"/>
        {carro ? <Carro fator={1} fatormax={30}/> : ''}
        <button onClick={()=>mostrarOcultar()}>
                    Ocultar
                </button>
        </>
    )
}