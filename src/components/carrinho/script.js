import React from "react";
import './carrinho.css'

const Carrinho = props => {
    return(
        <div className="aba-cart">
            <div id="carrinho"><img src="assets/carrinho.svg" alt="Carrinho"/></div>
            <section id="card-carrinho">
                <h3>Carrinho</h3>
                <ul className="lista-itens">

                </ul>
                <span>{props.total}</span>
            </section>
        </div>
    )
}

export default Carrinho