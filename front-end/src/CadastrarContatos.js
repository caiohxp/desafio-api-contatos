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

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });
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
        )).catch(() => {
            setStatus({
                type: 'erro',
                mensagem: 'Contato não cadastrado com sucesso'
            })
        })
    }


    const entradas = [['Nome','nome','text'],['Sobrenome','sobrenome','text'], ['E-mail','email','email']].map(i => 
        <input className='field' type={i[2]} name={i[1]} placeholder={i[0]} onChange={valorInput}/>)
    const entradas2 = [['Data de Nascimento','data_de_nascimento','date','Nascimento:'],['(DDD)XXXX-XXXX','telefone','tel','Telefone:'],['(DDD)9XXXX-XXXX','celular','tel','Celular:']].map(i => 
        <div className='divfield'>
            <h4>{i[3]}</h4>
            <input className='field' type={i[2]} name={i[1]} placeholder={i[0]} onChange={valorInput}/>
        </div>)
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
                {entradas}
                {entradas2}
                <input className='btn btnCadastrar' type="submit" name="submit" value="Adicionar Contato"/>
                <input type="reset" className='btn btnCadastrar' value="Limpar"/>
            </form>
        </section>
    )
}