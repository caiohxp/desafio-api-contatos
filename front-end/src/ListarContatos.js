import './ListarContatos.css';
import React, { useState,useEffect } from 'react';
import ImgListar from './images/icon-listar.png';
import ImgCadastrar from './images/icon-cadastrar.png';
import ImgMenu from './images/icon-menu.png';
import { Link } from 'react-router-dom';

export const ListarContatos = () => {
  const [data, setData] = useState([])
  const getContatos = async () => {
    fetch("http://localhost/contatos/index.php")
    .then((response) => response.json())
    .then((responseJson) => (
      setData(responseJson.records)
    ))
  }
  const apagar = async (idContato) => {
    
    await fetch("http://localhost/contatos/apagar.php?id="+idContato)
    .then((response) => response.json())
    .then((responseJson) => (
      console.log(responseJson)
    ))
  }
  useEffect(() => {
    getContatos()
  },[])
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
      setData(responseJson.records)
    ))
}
  const atributos = ['ID', 'Nome', 'Sobrenome', 'E-mail', 'Data de Nascimento', 'Telefone', 'Celular','Ações'].map(atributo =>
    <th className='coluna'>{atributo}</th>)
  return (
    <section className='container containerListar'>
      <div className='title'>
        <Link to={'/'}><img className='iconTitle' src={ImgMenu}/></Link>
        <h1>Contatos</h1>
        <Link to={'/cadastrar'}><img className='iconTitle' src={ImgCadastrar}/></Link>
      </div>
      <div className='title'>
        <img src={ImgListar} className='iconTitle'/>
        <h3>Listar</h3>
        <form onSubmit={cadContato}>
          <input type="text" name='filtrar' onChange={valorInput}/>
          <input type="submit" name='submit' value={"Filtrar"}/>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            {atributos}
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map(contato => (
            <tr key={contato.id}>
              <td class="colunaInfo">{contato.id}</td>
              <td class="colunaInfo">{contato.nome}</td>
              <td class="colunaInfo">{contato.sobrenome}</td>
              <td class="colunaInfo">{contato.email}</td>
              <td class="colunaInfo">{contato.data_de_nascimento}</td>
              <td class="colunaInfo">{contato.telefone}</td>
              <td class="colunaInfo">{contato.celular}</td>
              <td class="colunaInfo"><button className='btn btnApagar' onClick={() => apagar(contato.id)}>Apagar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

