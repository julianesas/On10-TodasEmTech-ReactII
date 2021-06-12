import React, {useState, useEffect} from 'react'

const Filtro = () =>{
    const [personagens, setPersonagem] = useState([]) //pega os personagens da api e atualiza para mostrar na tela
    const [filtroPersonagem, setFiltroPersonagem] = useState([])
    const [busca, setBusca] = useState('')

//antes disso: era um array vazio
    //pegar dados da api: https://rickandmortyapi.com/api/character
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(resposta => resposta.json())
            .then(dados => setPersonagem(dados.results))
    },[])
//console.log(personagens) //virou um array com os dados da api

    useEffect(()=>{
        setFiltroPersonagem(
            personagens.filter(personagem => {
                return personagem.name.includes(busca)
            })
        )
    },[busca, personagens])

    return(
        <>
            <input placeholder="Digite um personagem" onChange={e=>{setBusca(e.target.value)}}/>
            {filtroPersonagem.map(personagem=> (
                <div key={personagem.id}>
                    <p>{personagem.name}</p>
                    <img src={personagem.image} alt={personagem.name}/>
                </div>
                
            ))}
        </>
    )
}

export default Filtro