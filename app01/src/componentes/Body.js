import React from "react";
import Dados from "./Dados";
import Relogio from "./Relogio";
import State from "./State";

export default function Body() { // Alterado de Corpo para Body
    const Insta=()=>{
      return 'Andrexzy';
    }
    const Git = 'Andre509';
    
    const somar=(v1,v2)=>{
      return v1+v2;
    }
    
    return (
      <section className="caixa">
        <h2> André Luis </h2>
        <Relogio/>
        <p className='texto'>Melhor jogador de basquete do <a href="https://www.instagram.com/_.andrexzy/" target="_blank">mundo</a></p>
        <Dados 
        Instagram={Insta}
        Github={Git} 
        Time='Timão'
        somar={somar}
         />
        <State/>
      </section>
    );
  }
  