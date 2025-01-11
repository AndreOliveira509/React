import React from "react";

import je from './img/je.jpg'
import jade from './img/jade.jpg'

export default function Led(props) {


  return (
    <>
      <img style={{width:'50px'}} src={props.ligado? jade:je}/>
      <button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado? 'je':'jade'}</button>
    </>
  );
} 