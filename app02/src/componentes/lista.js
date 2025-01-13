import React from "react";

export default function lista(){
    const carros=[
    {categoria: "Esporte", preco: "110000.00", modelo: "Golf GTI"},
    {categoria: "Esporte", preco: "120000.00", modelo: "Camaro"},
    {categoria: "SUV", preco: "85000.00", modelo: "HRV"},
    {categoria: "SUV", preco: "83000.00", modelo: "T-Cross"},
    {categoria: "Utilitario", preco: "120000.00", modelo: "Hilux"},
    {categoria: "Utilitario", preco: "90000.00", modelo: "Ranger"}
];
    const listaCarros=carros.map(
       (c,i)=>
        <li key={i}>{i} - {c.categoria} - {c.modelo} - {c.preco}</li> 
    )

    return(

        <>
        {listaCarros}
        </>
    )
}