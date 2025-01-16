import React,{useEffect, useState} from "react";

export default function Effect(){
    
    const [contagem, setContagem]=useState(0)

    useEffect(
        ()=>{
            console.log("pagina carregada")
            document.title='Contagem:'+contagem
        }
        )

    return(
        <>
        <p>Contagem:{contagem}</p>
        <button onClick={()=>setContagem(contagem+1)}>Contar</button>
        </>
    )
}