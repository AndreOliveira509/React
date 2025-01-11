import React, { useState } from "react";

export default function Cor() {

  const [cor, setCor] = useState(1);

  const red={color:'#f00'}
  const verde={color:"#0f0"}
  const azul={color:"#00f"}

  const retCor=(c)=>{
    if(c==1){
        return red
    } else if(c==2){
        return verde
    } else {
        return azul
    }
  }

  const mudaCor=()=>{
    setCor(cor+1)
    if(cor > 2){
        setCor(1)
    }
  }

  setInterval(mudaCor, 1)

  return (
    <>
      <h1 style={retCor(cor)}>LeBron James</h1>
      <button onClick={()=>mudaCor()}>Muda Cor</button>
    </>
  );
}