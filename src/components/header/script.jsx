import React, { useState } from "react";
import './header.css'
import Perfil from "../perfil/script";

const Header = ({dataCarrinho, removerDoCarrinho}) => {

    const [header, setHeader] = useState('header');

    window.addEventListener('scroll', () => {
        if(window.scrollY !== 0){
            setHeader('headerFixed')
        }else{
            setHeader('header')
        }
    })

    const precoTotal = dataCarrinho.reduce((total, produto) => total + produto.preco, 0);


    return(
        <header className={header}>
                <img src="assets/logo-urban-store.png" alt="Logo Urban Store" id="logo-urban-store"/>
            <section className="perfil-options">
                <Perfil/>
                <div className="aba-cart">
            <div id="carrinho"><img src="assets/carrinho.svg" alt="Carrinho"/></div>
                <section id="card-carrinho">
                    <h3>Carrinho</h3>
                    <span className="span-carrinho">{`Total de produtos: ${dataCarrinho.length}`}</span>
                    <div className="lista-itens">
                    {dataCarrinho.map((itemCarrinho) => (<div className="card-produtoCarrinho"
                    key={itemCarrinho.id}>
                            <img src={itemCarrinho.imagem} alt={itemCarrinho.nome} className="imagemItemCarrinho"/>
                            <div className="infoItemCarrinho">
                                    <h3 className="nomeItemCarrinho">{itemCarrinho.nome}</h3>
                                    <span className="categoriaItemCarrinho">{itemCarrinho.categoria}</span>
                                    <span className="precoItemCarrinho">R$ {itemCarrinho.preco}</span>
                                    <span className="precoItemCarrinho">Qtd: {itemCarrinho.quantidade}</span>
                                    <span className="precoItemCarrinho">
                                        Numeração: {itemCarrinho.numeroEscolhido}</span>
                                    <button className="rmvCarrinho"><img src="assets/remover-carrinho.svg" alt="Remover Carrinho" onClick={() => removerDoCarrinho(itemCarrinho.id)}/></button>
                                </div>
                            </div>))}
                        </div>
                        <span className="span-carrinho">{`Total a pagar: R$${precoTotal.toLocaleString('pt-BR')}`}</span>
                    </section>
                </div>
            </section>
        </header>
    )
}

export default Header