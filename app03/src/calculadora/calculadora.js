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
const addDigitoTela = (d) => {
    // Evitar operadores consecutivos
    if ((d === '+' || d === '-' || d === '*' || d === '/') && 
        (valorTela.slice(-1) === '+' || valorTela.slice(-1) === '-' || 
         valorTela.slice(-1) === '*' || valorTela.slice(-1) === '/')) {
        return; // Ignorar se o último caractere for um operador
    }

    // Evitar múltiplos pontos consecutivos ou números inválidos com ponto
    if (d === '.' && (valorTela.slice(-1) === '.' || valorTela.split(/[+\-*/]/).pop().includes('.'))) {
        return; // Ignorar se já houver um ponto na parte atual do número
    }

    // Reseta o valor da tela se foi feita uma operação
    if (operado) {
        setValorTela(d);
        setOperado(false);
        return;
    }

    const valorDigitadoTela = valorTela + d;
    setValorTela(valorDigitadoTela);
};
    const limparMemoria=()=>{
        setOperado(false)
        setValorTela('')
        setResultado(0)
        setAcumulador(0)
        return
    }
    const Operacao=(oper)=>{
        if(oper=='bs'){
            let vtela=valorTela
            vtela=vtela.substring(0,(vtela.length-1))
            setValorTela(vtela)
            setOperado(false)
            return
        }
        try{
            const r=eval(valorTela) // calculo-
            setAcumulador(r)
            setResultado(r)
            setOperado(true)
        }catch{
            setResultado('Erro')
        }

    }

// style
    const cssConteiner={
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'column',
        width:300,
        border:'1px solid #000'
    }
    const cssBotoes={
        flexDirection:'row',
        flexWrap:'wrap'
    }
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
            <div style={cssConteiner}>
                <h3>Calculadora Matematica Simple</h3>
                {Tela(valorTela, resultado)}
                <div style={cssBotoes}>
                    {Bnt('AC', limparMemoria)}
                    {Bnt('(', ()=>addDigitoTela('('))}
                    {Bnt(')', ()=>addDigitoTela(')'))}
                    {Bnt('/', ()=>addDigitoTela('/'))}
                    {Bnt('7', ()=>addDigitoTela('7'))}
                    {Bnt('8', ()=>addDigitoTela('8'))}
                    {Bnt('9', ()=>addDigitoTela('9'))}
                    {Bnt('*', ()=>addDigitoTela('*'))}
                    {Bnt('4', ()=>addDigitoTela('4'))}
                    {Bnt('5', ()=>addDigitoTela('5'))}
                    {Bnt('6', ()=>addDigitoTela('6'))}
                    {Bnt('-', ()=>addDigitoTela('-'))}
                    {Bnt('1', ()=>addDigitoTela('1'))}
                    {Bnt('2', ()=>addDigitoTela('2'))}
                    {Bnt('3', ()=>addDigitoTela('3'))}
                    {Bnt('+', ()=>addDigitoTela('+'))}
                    {Bnt('0', ()=>addDigitoTela('0'))}
                    {Bnt('.', ()=>addDigitoTela('.'))}
                    {Bnt('<-', ()=>Operacao('bs'))}
                    {Bnt('=', ()=>Operacao('='))}

                </div>
            </div>
        </>
    )
}