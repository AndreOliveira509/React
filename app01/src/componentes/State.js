import React,{useState} from "react";
import App from "../App.css";
import Numero from "./Numero";

export default function State(){
    
    const [num,setNum]=useState(10)

    return(
        <>
            <p>Valor do State num em 'App': {num}</p>
            <Numero num={num} setNum={setNum}/>
        </>
    )


}