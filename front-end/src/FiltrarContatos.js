import { useState } from 'react';


export const FiltrarContatos = () => {

    const [contato, setContato] = useState({
        filtrar: ''
    })

    const valorInput = e => setContato({ ...contato, [e.target.name]: e.target.value})
    const cadContato = async e => {
        e.preventDefault();
        
        await fetch("http://localhost/contatos/filtrar.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({contato})
        })
        .then((response) => response.json())
        .then((responseJson) => (
            console.log(responseJson.records)
        ))
    }
    return (
        <section className='container containerFiltrar'>
            <div className='title'>
                <h1>Contatos</h1>
            </div>
            <div className='title'>
                <h3>Filtrar</h3>
            </div>
            <form className='form' onSubmit={cadContato}>
                <input className='field' type="text" name="filtrar" placeholder="Filtrar" onChange={valorInput}/>
                <input className='btn btnFiltrar' type="submit" name="submit" value="Adicionar Contato"/>
                <input type="reset" className='btn btnFiltrar' value="Limpar"/>
            </form>
        </section>
    )
}