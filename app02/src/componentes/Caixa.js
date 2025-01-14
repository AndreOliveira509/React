import React from "react";

export default function Caixa(props){
    return(
    <>
        <h1>CFB Curso</h1>
        <p>{props.site}</p>
        {props.children}
    </>
    )
}