import React from "react";

export default class BaseClasse extends React.Component{
    constructor(props){
        //props
        super(props)
        //UseState
        this.state={
            canal:'Cfb Cursos',
            curso:'React',
            ativo:true,
            nome:this.props.nomeAluno
        }
        this.status=this.props.status
        //bindagem
        let ad=ativarDesativar.bind(this)
        //instruções do construtor
    }
    // minipular o state
    ativarDesativar(){
        this.setState(
            state=>({
                // ativo=!state.ativo
            })
        )
    }

    componentDidMount(){
        console.log('o carro foi criado')
    }
    componentDidUpdate(){
        console.log('o carro foi Atualizado')
    }
    componentWillUnmount(){
        console.log('o carro foi removido')
    }
    render(){
        return(
            <>
                <h1>Component de Classe</h1>
                <button onClick={this.ad}>ativar/Desativar</button>
            </>
        )
    }
}