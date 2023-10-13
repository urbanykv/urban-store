import React, { useState } from "react";
import './home.css'
import ItemProduto from "../itemProduto/script";
import { produtos } from "../../database";

const Home = ({addNoCarrinho}) => {

  

    const [itensTenis, setItensTenis] = useState(produtos);

    const [textoBusca, setTextoBusca] = useState("");

    const todosTenis = () => {
        setItensTenis(produtos)
    }

    const filtrarMarca = marca => {
        setItensTenis(produtos.filter( produto => 
            produto.marca === marca
        ))
        setTextoBusca("")
    }

    const filtrarCategoria = categoria => {
        setItensTenis(produtos.filter( produto => 
            produto.categoria === categoria
        ))
        setTextoBusca("")
    }

    const buscarItem = text => {
        setTextoBusca(text)
        if(text === ""){
          setItensTenis(produtos)
        }else if(text !== ""){
          setItensTenis(produtos.filter( produto => 
            produto.nome.toLowerCase().includes(text.toLowerCase())
            ))
        }
    }


    return(
        <main className="home">
            <div className="banner">
                {/*Aqui teremos apenas o Banner.*/}
            </div>
            <div className="card">
                <h2>A maior empresa de Resell do pais.</h2>
                <a href="#produtos">Acesse nosso catálogo abaixo</a>
            </div>
            <section className="all-products" id="produtos">
                <h2>Produtos</h2>
                <section className="sessao-produtos">
                    <section className="filtros">
                            <button className="filter-ap" onClick={todosTenis}>Remover filtros</button>
                            <div 
                            class="listagem-filtros">
                                <div className="titulos-filtros"><hr/><p>Modelos</p><hr/></div>
                                <div className="botoes-filtros">
                                    <button className="filter-nike" onClick={() => filtrarMarca('Nike')}>Nike</button>
                                    <button className="filter-adds" onClick={() => filtrarMarca('Adidas')}>Adidas</button>
                                    <button className="filter-nb" onClick={() => filtrarMarca('New Balance')}>New Balance</button>
                                </div>
                            </div>
                            <div 
                            className="listagem-filtros">
                                <div className="titulos-filtros"><hr/><p>Categorias</p><hr/></div>
                                <div className="botoes-filtros">
                                    <button className="filter-nike" onClick={() => filtrarCategoria('Casual')}>Casual</button>
                                    <button className="filter-adds" onClick={() => filtrarCategoria('Basquete')}>Basquete</button>
                                    <button className="filter-nb" onClick={() => filtrarCategoria('Skateboarding')}>Skateboarding</button>
                                </div>
                            </div>
                            <div className="busca">
                                <input type="text" name="busca" id="busca" placeholder="Digite o nome do produto aqui." value={textoBusca} onChange={(event) => buscarItem(event.target.value)}/>
                            </div>
                        </section>
                    <div className="listagem-produtos">
                        {
                            itensTenis.map(produto => (
                                <ItemProduto
                                key={produto.id}
                                imagem={produto.imagem}
                                nome={produto.nome}
                                categoria={produto.categoria}
                                preco={produto.preco}
                                onClick={() => addNoCarrinho(produto)}
                                />
                            ))
                        }
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Home