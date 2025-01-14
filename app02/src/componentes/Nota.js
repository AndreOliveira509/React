import React from "react";

export default function Nota(props){
    return(
        <div>
            <legend>Informe a nota: {props.num}</legend>
            <input type="Number" name={props.nome} value={props.nota} onChange={(e)=>props.setNota(e)}></input>
        </div>
    )
}