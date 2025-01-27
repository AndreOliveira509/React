import React from "react";

export default class Tela extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <div style={this.props.cssTela}>
        <span style={this.props.cssTelaOper}>{this.props.valor}</span>
        <span style={this.props.cssTelaRes}>{this.props.res}</span>
        </div>
    )
    }
}