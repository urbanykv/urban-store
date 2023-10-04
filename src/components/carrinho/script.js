import React, { useState } from "react";
import './carrinho.css'


export const carrinhoArray = [];



const Carrinho = props => {

    const [adcCarrinho, setAdcCarrinho] = useState(carrinhoArray);


    
    return(
        <div className="aba-cart">
            <div id="carrinho"><img src="assets/carrinho.svg" alt="Carrinho"/></div>
            <section id="card-carrinho">
                <h3>Carrinho</h3>
                <div className="lista-itens">
                {adcCarrinho.map(itemCarrinho => (<div className="card-produto">
                    <img src={itemCarrinho.imagem} alt={itemCarrinho.nome} className="imagemItem"/>
                    <div className="infoItem">
                            <h3 className="nomeItem">{itemCarrinho.nome}</h3>
                            <span className="categoriaItem">{itemCarrinho.categoria}</span>
                            <span className="precoItem">R$ {itemCarrinho.preco}</span>
                            <button className="adcCarrinho"><img src="assets/adicionar-carrinho.svg" alt="Adicionar Carrinho"/></button>
                        </div>
                    </div>))}
                </div>
                <span>{props.total}</span>
            </section>
        </div>
    )
}

export default Carrinho