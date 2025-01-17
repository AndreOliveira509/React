import React,{useState} from "react";
import Globais from "./Globais";
import Info from "./info";

export default function VarGlobais(){
    
    const [resumo, setResumo]=useState(Globais.resumo)

    const gravarResumo=()=>{
        Globais.resumo=resumo;
    }
    const verResumo=()=>{
        alert(Globais.resumo)
    }

    return(
        <>
            <Info/>
            <hr/>
            <p>{'Canal: ' + Globais.canal}</p>
            <p>{'Curso: ' + Globais.curso}</p>
            <p>{'Ano: ' + Globais.ano}</p>
            <hr/>
            <input type="text" size='100' value={resumo} onChange={(e)=>setResumo(e.target.value)}/>
            <button onClick={()=>gravarResumo()}>Gravar Resumo</button>
            <button onClick={()=>verResumo()}>Ver Resumo</button>
        </>
    )
}