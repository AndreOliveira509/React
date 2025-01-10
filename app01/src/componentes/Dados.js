import React from "react";

export default function Dados(props) {
  let n1=10
  let n2=5

  const textoDestaque={
    color:'#000fff',
    fontSize:'3em',
  }

  return (
        <section>
            <p style={textoDestaque}>Instagram:{props.Instagram()}</p>
            <p>Github:{props.Github}</p>
            <p>Time:{props.Time}</p>
            <p>{"A soma entre " + n1 + " com " + n2 + " é igual " + props.somar(n1,n2)}</p>
        </section>
  );
} 