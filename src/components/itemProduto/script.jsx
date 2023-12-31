import React from "react";
import './itemProduto.css'

const ItemProduto = (props) => {

    return(
        <div className="card-produto">
            <img src={props.imagem} alt={props.nome} className="imagemItem"/>
            <div className="infoItem">
                <h3 className="nomeItem">{props.nome}</h3>
                <span className="categoriaItem">{props.categoria}</span>
                <span className="precoItem">R$ {props.preco}</span>
                <button className="adcCarrinho" onClick={props.onClick}><img src="assets/adicionar-carrinho.svg" alt="Adicionar Carrinho"/></button>
            </div>
        </div>
    )
}


export default ItemProduto