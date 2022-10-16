import './MenuContatos.css';
import React from 'react';
import ImgListar from './images/icon-listar.png';
import ImgCadastrar from './images/icon-cadastrar.png';
import ImgMenu from './images/icon-menu.png';
import { Link } from 'react-router-dom';

export const MenuContatos = () => {
    const img = 'images/icon-listar.png'
    return (
        <section class="container containerMenu">
            <div className='title'>
                <div></div>
                <h1>Contatos</h1>
                <div></div>
            </div>
            <div class="title">
                <img className='iconTitle' src={ImgMenu}/>
                <h3>Home</h3>
            </div>
            <div class="btns">
                <Link to={"/listar"}><button className='btn btnMenu'><img src={ImgListar} className='iconMenu'/><p>Listar</p></button></Link>
                <Link to={"/cadastrar"}><button className='btn btnMenu'><img src={ImgCadastrar} className='iconMenu'/><p>Cadastrar</p></button></Link>
            </div>
        </section>
    )
}