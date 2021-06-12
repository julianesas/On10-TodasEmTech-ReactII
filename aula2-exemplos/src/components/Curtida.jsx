import React, {useState} from 'react'

const Curtida = () => {
    const [valorAtual, setValor ] = useState(0)

    function somaCurtidas() {
        setValor(valorAtual+1)
    }
    return (
        <>
            <p>{valorAtual}</p>
            <button onClick={somaCurtidas}> ❤️ </button>
        </>
    )
}

export default Curtida