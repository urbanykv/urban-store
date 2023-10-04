import React from "react";
import './itemCarrinho.css'


const ItemCarrinho = props => {
    return(
        <div className="card-produto">
            <img src={props.imagem} alt={props.nome} className="imagemItem"/>
            <div className="infoItem">
                <h3 className="nomeItem">{props.nome}</h3>
                <span className="categoriaItem">{props.categoria}</span>
                <span className="precoItem">R$ {props.preco}</span>
                <button className="rmvCarrinho"><img src="assets/remover-carrinho.svg" alt="Remover Carrinho"/></button>
            </div>
        </div>
    )
}

export default ItemCarrinho