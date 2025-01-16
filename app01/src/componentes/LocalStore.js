import React,{useState} from "react";

export default function LocalStorege(){

    const [nome,setNome]=useState()

    const armazenar=(chave, valor)=>{
        localStorage.setItem(chave, valor)
    }
    const consultar=(chave)=>{
        const valor = localStorage.getItem(chave);
        if (!valor) {
          alert("Nenhum nome encontrado ou o nome foi removido.");
        } else {
          alert(`Nome armazenado: ${valor}`);
        }
    }
    const apagar=(chave)=>{
        localStorage.removeItem(chave)
    }
    
    return(
        <>
        <label>Digite um nome:</label>
        <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
        <button onClick={()=>armazenar('ls_nome', nome)}>Gravar Nome</button>
        <button onClick={()=>consultar('ls_nome', nome)}>consultar Nome</button>
        <button onClick={()=>apagar('ls_nome', nome)}>Apagar Nome</button>
        </>
    )
}