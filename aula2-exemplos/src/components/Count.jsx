//criar um contador em react
//3 elementos html 
    //2 botões 
    //Título 
//Quando a pessoa usuaria integir clicando no mais , eu quero que some 1, ao valor que está na tela
//Quando a pessoa usuaria integir clicando no menos, eu quero que diminua 1, ao valor que está na tela

//Usar hook useState
    //importar useState
    //Declarar por desestruturacao o estado atual e a função atualizadora
    //ligar o gancho no html

import React, {useState} from 'react'

const Count = () => {
    const [contagem, setContagem] = useState(0)

    function diminuiUm(){
        setContagem(contagem-1)
    }

    function somaUm(){
        setContagem(contagem+1)
    }

    return (
        <>
           <button onClick={diminuiUm} >diminuir: - </button>
           <h1>{contagem}</h1>
           <button onClick={somaUm}>somar: + </button>
        </>
    )
}

export default Count