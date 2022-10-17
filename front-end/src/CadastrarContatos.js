import { useState } from 'react';
import './CadastrarContatos.css';
import ImgListar from './images/icon-listar.png';
import ImgCadastrar from './images/icon-cadastrar.png';
import ImgMenu from './images/icon-menu.png';
import { Link } from 'react-router-dom';


export const CadastrarContatos = () => {

    const [contato, setContato] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        data_de_nascimento: '',
        telefone: '',
        celular: ''
    })

    const valorInput = e => setContato({ ...contato, [e.target.name]: e.target.value})
    const cadContato = async e => {
        e.preventDefault();
        
        await fetch("http://localhost/contatos/cadastrar.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({contato})
        })
        .then((response) => response.json())
        .then((responseJson) => (
            console.log(responseJson)
        ))
    }
    return (
        <section className='container containerCadastrar'>
            <div className='title'>
                <Link to={'/'}><img className='iconTitle' src={ImgMenu}/></Link>
                <h1>Contatos</h1>
                <Link to={'/listar'}><img className='iconTitle' src={ImgListar}/></Link>
            </div>
            <div className='title'>
                <img src={ImgCadastrar} className='iconTitle'/>
                <h3>Cadastrar</h3>
            </div>
            <form className='form' onSubmit={cadContato}>
                <input className='field' type="text" name="nome" placeholder="Nome" onChange={valorInput}/>
                <input className='field' type="text" name="sobrenome" placeholder="Sobrenome" onChange={valorInput}/>
                <input className='field' type="text" name="email" placeholder="E-mail" onChange={valorInput}/>
                <div className='divfield'>
                    <h4>Data de Nascimento:</h4>
                    <input className='field' type="date" name="data_de_nascimento" placeholder="Data de Nascimento" onChange={valorInput}/>
                </div>
                <div className='divfield'>
                    <h4>Telefone:</h4>
                    <input className='field' type="text" name="telefone" placeholder="Telefone" onChange={valorInput}/>
                </div>
                <div className='divfield'>
                    <h4>Celular:</h4>
                    <input className='field' type="text" name="celular" placeholder="Celular" onChange={valorInput}/>
                </div>
                <input className='btn btnCadastrar' type="submit" name="submit" value="Adicionar Contato"/>
                <input type="reset" className='btn btnCadastrar' value="Limpar"/>
            </form>
        </section>
    )
}