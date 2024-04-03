import React, { useState } from 'react';
import './estilo.css';

function PaginaInicial(){

    const [numeroAleatorio, setNumeroAleatorio] = useState(0);

    function gerarNumero(){
        const novoNumero = Math.floor(Math.random() * (100-1) + 1);
        setNumeroAleatorio(novoNumero);
    }

    return(
        <div className='container'>
            <h1>Numero Aleatorio</h1>
            <h2>{numeroAleatorio}</h2>
            <div className="areaBotao">
                <label>Click no botão abaixo para gerar um numero aleatorio!</label>
                <button onClick={gerarNumero}>Gerar Numero</button>
            </div>
        </div>
    );
}

export default PaginaInicial;