import React from "react";

export default class Carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo='Golf'
        this.state={
            ligado:false,
            velAtual:0,
        }
        this.ld=this.ligarDesligar.bind(this)
    }

    ligarDesligar(){
        // this.state.ligado=true X
        this.setState({ligado:!this.state.ligado}) // com o bind funciona igual a de baixo
        // this.setState(
        //     (state)=>(
        //         {ligado:!state.ligado}
        //     )
        // )
    }
    acelerar(){
        this.setState( 
            ()=>(
                {velAtual:this.state.velAtual + this.props.fator}
            )
        )
    }
    pisarfundo(){
        this.setState( 
            ()=>(
                {velAtual:this.state.velAtual + this.props.fatormax}
            )
        )
    }
    freiar(){
        this.setState( 
            ()=>(
                {velAtual:this.state.velAtual - this.props.fator}
            )
        )
    }
    freiodemao(){
    this.setState( 
        ()=>(
            {velAtual:this.state.velAtual - this.props.fatormax}
        )
    )
    }

    componentDidMount(){
        console.log('o carro foi criado')
    }
    componentDidUpdate(){
        console.log('o site foi atualizado')
    }
    componentWillUnmount(){
        console.log('o site foi removido')
    }
    render(){
        return(
            <>
                <h1>Meu Carro</h1>
                <p>Modelo:{this.modelo}</p>
                <p>Ligado: {this.state.ligado ? 'Ligado' : 'Desligado'}</p>
                <p>Velocidade Atual: {this.state.velAtual}</p>
                <button onClick={this.ld}>{this.state.ligado ? 'Desligar' : 'Ligar'}</button>
                <button onClick={()=>this.acelerar()}>Acelerar</button>
                <button onClick={()=>this.pisarfundo()}>Afundar o pe no acelerador</button><br/>
                <button onClick={()=>this.freiar()}>Freiar</button>
                <button onClick={()=>this.freiodemao()}>freio de mao</button>

            </>
        )
    }
}