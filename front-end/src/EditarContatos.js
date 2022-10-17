import { useState,useEffect } from 'react';
import './CadastrarContatos.css';
import ImgListar from './images/icon-listar.png';
import ImgCadastrar from './images/icon-cadastrar.png';
import ImgMenu from './images/icon-menu.png';
import { Link } from 'react-router-dom';

export const EditarContatos = (props) => {
    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [data_de_nascimento, setDataNasc] = useState('');
    const [telefone, setTelefone] = useState('');
    const [celular, setCelular] = useState('');

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    })

    const editProduto = async e => {
        e.preventDefault();

        await fetch("http://localhost/contatos/editar.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, nome, sobrenome, email, data_de_nascimento, telefone, celular })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.erro) {
                    setStatus({
                        type: 'error',
                        mensagem: responseJson.mensagem
                    });
                } else {
                    setStatus({
                        type: 'success',
                        mensagem: responseJson.mensagem
                    });
                }
            }).catch(() => {
                setStatus({
                    type: 'error',
                    mensagem: "Produto não editado com sucesso, tente mais tarde!"
                });
            });
    }

    useEffect(() => {
        const getContato = async () => {
            await fetch("http://localhost/contatos/visualizar.php?id=" + id)
                .then((response) => response.json())
                .then((responseJson) => {
                    setNome(responseJson.produto.nome);
                    setSobrenome(responseJson.produto.sobrenome);
                    setEmail(responseJson.produto.email);
                    setDataNasc(responseJson.produto.data_de_nascimento);
                    setTelefone(responseJson.produto.telefone);
                    setCelular(responseJson.produto.celular);
                });
        }
        getContato();
    }, [id]);
    return(
        <section className='container containerCadastrar'>
            <div className='title'>
                <Link to={'/'}><img className='iconTitle' src={ImgMenu}/></Link>
                <h1>Contatos</h1>
                <Link to={'/listar'}><img className='iconTitle' src={ImgListar}/></Link>
            </div>
            <div className='title'>
                <img src={ImgCadastrar} className='iconTitle'/>
                <h3>Editar</h3>
            </div>
            <form className='form' onSubmit={editProduto}>
                <input className='field' type="text" name="nome" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/>
                <input className='field' type="text" name="sobrenome" placeholder="Sobrenome" value={sobrenome} onChange={e => setSobrenome(e.target.value)}/>
                <input className='field' type="text" name="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <div className='divfield'>
                    <h4>Data de Nascimento:</h4>
                    <input className='field' type="date" name="data_de_nascimento" placeholder="Data de Nascimento" value={data_de_nascimento} onChange={e => setDataNasc(e.target.value)}/>
                </div>
                <div className='divfield'>
                    <h4>Telefone:</h4>
                    <input className='field' type="text" name="telefone" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                </div>
                <div className='divfield'>
                    <h4>Celular:</h4>
                    <input className='field' type="text" name="celular" placeholder="Celular" value={celular} onChange={e => setCelular(e.target.value)}/>
                </div>
                <input className='btn btnCadastrar' type="submit" name="submit" value="Editar Contato"/>
                <input type="reset" className='btn btnCadastrar' value="Limpar"/>
            </form>
        </section>
    )
}