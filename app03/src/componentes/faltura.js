import React,{useState} from "react";

export default function Fcalcular(props){
    return(
        <div>
            <label>
                Altura
                <input type="text" value={props.a} onChange={(e)=>{props.sa(e.target.value)}}/>
            </label>
        </div>
    )
}