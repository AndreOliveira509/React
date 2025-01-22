import React from "react";

export default class fresultado extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <>
            <p>Resultado:{this.props.r}</p>
        </>
    )
}
}