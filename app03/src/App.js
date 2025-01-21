import React,{useState, useEffect} from "react";
// import Pagina1 from "./componentes/pagina1";
// import Pagina2 from "./componentes/pagina2";
import PricCar from "./componentes/princCar"
import './App.css'

export default function App() {
 
  // const [pagina, setPagina]=useState(0)

  // useEffect(
  // ()=>{
  //   const url=window.location.href 
  //   const res=url.split('?')
  //   setPagina(res[1])
  // }
  // )

  // const LinksPaginas=(p)=>{
  //   if (p==1){
  //     window.open('http://localhost:3000?1' , 'self')
  //   } else if (p==2){
  //     window.open('http://localhost:3000?2' , 'self')
  //   }
  // }

  // const retornarPagina=()=>{
  //   if(pagina==1) {
  //     return <Pagina1/>
  //   } else if (pagina==2){
  //     return <Pagina2/>
  //   } else {
  //     return <div>
  //       <button onClick={()=>LinksPaginas(1)}>Página 1</button>
  //       <button onClick={()=>LinksPaginas(2)}>Página 2</button>
  //     </div>
  //   }
  // }

  return (
    <>
    {/* {retornarPagina()} */}
    {/* <button onClick=''>Página 1</button>
    <button onClick=''>Página 2</button> */}
    <PricCar/>
    </>
  );
}   