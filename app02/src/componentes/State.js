import React, { useState } from "react";

export default function State(){

    const [form, setForm] = useState({"nome":"","curso":"","ano":""})
    const handleFormChange=(e)=>{
        if(e.target.getAttribute('name') =='fnome'){
            setForm({"nome":e.target.value,"curso":form.curso,"ano":form.ano})
        } else  if(e.target.getAttribute('name') =='fcurso'){
            setForm({"nome":form.nome,"curso":e.target.value,"ano":form.ano})
        } else {
                setForm({"nome":form.nome,"curso":form.curso,"ano":e.target.value})
        }
    }

    return(
        <>
        <label>Digite seu Nome</label>
        <input type="text" name="fnome" onChange={(e)=>handleFormChange(e)} value={form.nome}></input>
        <label>Digite seu Curso</label>
        <input type="text" name="fcurso" onChange={(e)=>handleFormChange(e)} value={form.curso}></input>
        <label>Digite seu Ano</label>
        <input type="text" name="fano" onChange={(e)=>handleFormChange(e)} value={form.ano}></input>
        
        <p>Nome digitado: {form.nome}</p>
        <p>Curso digitado: {form.curso}</p>
        <p>Ano digitado: {form.ano}</p>
        </>
    )
}