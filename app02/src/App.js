import React,{useState} from "react";
import './App.css'
import Led from "./componentes/led";
import Cump from "./componentes/cumprimento";
import Cor from "./componentes/Cor";

export default function App() {

  const [ligado, setLigado]=useState(false)

  const cancelar =(obj)=>{
    return obj.preventDefault()

  }

  return (
    <>
      <Led ligado={ligado} setLigado={setLigado}/>
      <a href="instagram.com/cr7" target="_blank" onClick={(e)=>cancelar(e)}>aaaaaa</a>
      <Cump/>
      <Cor/>
      
    </>
  );
}   