import React, { useState } from "react";
import Tabuleiro from "./tabuleiro";

export default function Jogodavelha() {
    // Estilos
    const tabu = { display: 'flex', flexDirection: 'column' };
    const tabuLinha = { display: 'flex', flexDirection: 'row' };
    const casa = {
        width: 100,
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: 60,
        border: '1px solid #000',
    };

    // States
    const jogoInicial = [['', '', ''], ['', '', ''], ['', '', '']];
    const [jogo, setJogo] = useState(jogoInicial);
    const [simboloAtual, setSimboloAtual] = useState('X');
    const [jogando, setJogando] = useState(true);

    const BtnJogarNovamente = () => (
        !jogando && <button onClick={() => reniciar()}>Jogar Novamente</button>
    );

    // Funções
    const verificaVitoria = () => {
        let pontos = 0;
        let vitoria = false;

        // Linhas
        for (let l = 0; l < 3; l++) {
            pontos = 0;
            for (let c = 0; c < 3; c++) {
                if (jogo[l][c] === simboloAtual) pontos++;
            }
            if (pontos >= 3) vitoria = true;
        }

        // Colunas
        for (let c = 0; c < 3; c++) {
            pontos = 0;
            for (let l = 0; l < 3; l++) {
                if (jogo[l][c] === simboloAtual) pontos++;
            }
            if (pontos >= 3) vitoria = true;
        }

        // Diagonal principal
        pontos = 0;
        for (let d = 0; d < 3; d++) {
            if (jogo[d][d] === simboloAtual) pontos++;
        }
        if (pontos >= 3) vitoria = true;

        // Diagonal secundária
        pontos = 0;
        let l = 0;
        for (let c = 2; c >= 0; c--) {
            if (jogo[l][c] === simboloAtual) pontos++;
            l++;
        }
        if (pontos >= 3) vitoria = true;

        return vitoria;
    };

    const trocaJogador = () => {
        setSimboloAtual(simboloAtual === 'X' ? 'O' : 'X');
    };

    const retPos = (e) => {
        const p = e.target.getAttribute('data-pos');
        return [parseInt(p[0]), parseInt(p[1])];
    };

    const verificaEspacoVazio = (e) => {
        const [row, col] = retPos(e);
        return jogo[row][col] === '';
    };

    const joga = (e) => {
        if (jogando && verificaEspacoVazio(e)) {
            const [row, col] = retPos(e);
            const novoJogo = [...jogo];
            novoJogo[row][col] = simboloAtual;
            setJogo(novoJogo);

            if (verificaVitoria()) {
                alert(`Jogador ${simboloAtual} venceu!`);
                setJogando(false);
            } else {
                trocaJogador();
            }
        } else {
            alert('Este espaço não está disponível');
        }
    };

    const reniciar = () => {
        setJogando(true);
        setJogo(jogoInicial);
        setSimboloAtual('X');
    };

    return (
        <>
            <div>
                <p>Vez de: {simboloAtual}</p>
            </div>
            <Tabuleiro tabu={tabu} c={casa} tabul={tabuLinha} jg={joga} j={jogo}/>
            <div>{BtnJogarNovamente()}</div>
        </>
    );
}
