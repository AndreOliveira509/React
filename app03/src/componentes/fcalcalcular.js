import React from "react";

export default class fpeso extends React.Component{
    constructor(props){
        super(props)
        this.cimc=this.calc.bind(this)
    }
    calc=()=>{
        this.props.sr(this.props.p/(this.props.a*this.props.a))
    }
    render(){
    return(
        <div>
            <button onClick={this.cimc}>Calcular</button>
        </div>
    )
}
}  