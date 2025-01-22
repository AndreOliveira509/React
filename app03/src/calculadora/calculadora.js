import React,{useState} from "react";

export default function Calculadora(){
    
    const [valorTela, setValorTela]=useState('')
    const [resultado, setResultado]=useState(0)
    const [acumulador, setAcumulador]=useState(0)
    const [operado, setOperado]=useState(false)

// componentes

    const Tela=(valor, res)=>{
        return(
            <div style={cssTela}>
                <span style={cssTelaOper}>{valor}</span>
                <span style={cssTelaRes}>{res}</span>
            </div>
        )
    }

    const Bnt=(label, onClick)=>{
        return(
            <button style={cssBtn} onClick={onClick}>{label}</button>
        )
    }

//funções
    const addDigitoTela=(d)=>{
        if((d=='+' || d=='-' || d=='*' || d=='/') && operado){
            setOperado(false)
            setValorTela(resultado+d)
            return
        }
        if(operado){
            setValorTela(d)
            setOperado(false)
            return
        }
        const valorDigitadoTela=valorTela+d
        setValorTela(valorDigitadoTela) 
    }
    const limparMemoria=()=>{
        setOperado(false)
        setValorTela('')
        setResultado(0)
        setAcumulador(0)
        return
    }

// style
    const cssTela={
        display:'flex',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems:'flex-start',
        backgroundColor:'#444',
        flexDirection:'column',
        width:260
    }
    const cssTelaOper={
        fontSize: 25,
        color:'#fff',
        height:20
    }
    const cssTelaRes={
        fontSize: 50,
        color:'#fff',
        
    }
    const cssBtn={
        fontSize: 30,
        height:75,
        width: 75,
        padding:20,
        backgroundColor:'#000',
        color:'#fff',
        borderColor:'#000',
        textAlign: 'center',
        outline:'none'
        
    }
    


    return(
        <>

        </>
    )
}