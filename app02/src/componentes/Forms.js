import React, { useState } from "react";

export default function Forms(){

    const [nome, setNome] = useState('')
    const [carro, setCarro] = useState('HRV')


    return(
        <>
        <label>Digite seu Nome</label>
        <input type="text" name="fnome" onChange={(e)=>setNome(e.target.value)} value={nome}></input>
        <p>Nome digitado: {nome}</p>
        <label>Selecione um carro</label>
        <select values={carro} onChange={(e)=>setCarro(e.target.value)}>
            <option value="HRV">HRV</option>
            <option value="Golf">Golf</option>
            <option value="Gol">Gol</option>
            <option value="Cruze">Cruze</option>
        </select>
        <p>Carro selecionado: {carro}</p>
        </>
    )
}