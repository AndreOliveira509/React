import React,{useState} from "react";
import Fpeso from "./fpeso";
import Faltura from "./faltura";
import Fcalcular from "./fcalcalcular";
import Fresultado from "./fresultado";
import TabelaIMC from "./tabelaIMC";

export default function Calc() {

    const [peso, setPeso]=useState(0)
    const [altura, setAltura]=useState(0)
    const [resultado, setResultado]=useState()

  return (
    <>  
        <Fpeso p={peso} sp={setPeso}/>
        <Faltura a={altura} sa={setAltura}/>
        <Fcalcular p={peso} a={altura} sr={setResultado} />
        <Fresultado r={resultado}/>
        <TabelaIMC/>
    </>
);
}   