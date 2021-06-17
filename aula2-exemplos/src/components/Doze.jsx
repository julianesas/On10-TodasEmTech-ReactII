import React, {useState, useEffect}from 'react'
import Axios from 'axios'

const Doze = () => {
    const [repos, setRepos] = useState([])
    const [busca, setBusca] = useState('')
    const [filtroRepos, setFiltroRepos] = useState([])

    //https://api.github.com/users/simaraconceicao/repos

    useEffect(()=> {
        const pegaDados = async () =>{
            const resposta = await Axios.get('https://api.github.com/users/simaraconceicao/repos')
            const dados = await resposta.data
            setRepos(dados)
        }    
        pegaDados()

    },[])

    useEffect(()=>{
        setFiltroRepos(
            repos.filter(repo => {
                return repo.name.includes(busca)
            })
        )
    },[busca,repos])

    console.log(repos)
    return(
        <>  
            <input onChange={e => {setBusca(e.target.value)}} placeholder="Digite um repo" />
            {filtroRepos.map(repo => (
                <a key={repo.id} href={repo.html_url}>{repo.name}</a>
            ))}
        </>
    )
}

export default Doze