import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ListaCarros(){
    const [carros, setCarros]=useState([]) 

    useEffect(()=>{
        axios.get('https://ab393649-3b23-418c-8d4e-355b2fca5821-00-ohg8q2gqw6gk.spock.replit.dev')
            .then(res=>{
                const dadosCarros=res.data
                setCarros(dadosCarros)
            })
    }
    )

        return(
            <div>
                {carros.map(
                    carro=> <div key={carro.id}> {carro.marca} - {carro.modelo} </div>
                )}
            </div>
        )
    }