import React from "react";
import Dados from "./Dados";

export default function Body() { // Alterado de Corpo para Body
    const Insta = 'Andrexzy';
    const Git = 'Andre509';
  
    return (
      <section>
        <h2> André Luis </h2>
        <p>Melhor jogador de basquete do mundo</p>
        <Dados Instagram={Insta} Github={Git} Time='Timão' />
      </section>
    );
  }
  