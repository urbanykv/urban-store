import React, { useState } from "react";
import './header.css'
import Perfil from "../perfil/script";

const Header = ({dataCarrinho}) => {

    const [header, setHeader] = useState('header');

    window.addEventListener('scroll', () => {
        if(window.scrollY !== 0){
            setHeader('headerFixed')
        }else{
            setHeader('header')
        }
    })

    return(
        <header className={header}>
                <img src="assets/logo-urban-store.png" alt="Logo Urban Store" id="logo-urban-store"/>
            <section className="perfil-options">
                <Perfil/>
                <div className="aba-cart">
            <div id="carrinho"><img src="assets/carrinho.svg" alt="Carrinho"/></div>
                <section id="card-carrinho">
                    <h3>Carrinho</h3>
                    <span>{`Total de produtos: ${dataCarrinho.length}`}</span>
                    <div className="lista-itens">
                    {dataCarrinho.map((itemCarrinho) => (<div className="card-produtoCarrinho">
                            <img src={itemCarrinho.imagem} alt={itemCarrinho.nome} className="imagemItemCarrinho"/>
                            <div className="infoItemCarrinho">
                                    <h3 className="nomeItemCarrinho">{itemCarrinho.nome}</h3>
                                    <span className="categoriaItemCarrinho">{itemCarrinho.categoria}</span>
                                    <span className="precoItemCarrinho">R$ {itemCarrinho.preco}</span>
                                    <button className="rmvCarrinho"><img src="assets/remover-carrinho.svg" alt="Adicionar Carrinho"/></button>
                                </div>
                            </div>))}
                        </div>

                    </section>
                </div>
            </section>
        </header>
    )
}

export default Header