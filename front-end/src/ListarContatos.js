import './ListarContatos.css';
import React, { useState,useEffect } from 'react';
import ImgListar from './images/icon-listar.png';
import ImgCadastrar from './images/icon-cadastrar.png';
import ImgMenu from './images/icon-menu.png';
import { Link } from 'react-router-dom';

export const ListarContatos = () => {
  const [data, setData] = useState([])
  const getProdutos = async () => {
    fetch("http://localhost/contatos/index.php")
    .then((response) => response.json())
    .then((responseJson) => (
      console.log(responseJson),
      setData(responseJson.records)
    ))
  }
  useEffect(() => {
    getProdutos()
  },[])
  const atributos = ['ID', 'Nome', 'Sobrenome', 'E-mail', 'Data de Nascimento', 'Telefone', 'Celular'].map(atributo =>
    <th>{atributo}</th>)
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
              <td>{contato.id}</td>
              <td>{contato.nome}</td>
              <td>{contato.sobrenome}</td>
              <td>{contato.email}</td>
              <td>{contato.data_de_nascimento}</td>
              <td>{contato.telefone}</td>
              <td>{contato.celular}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

