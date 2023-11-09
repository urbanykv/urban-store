import './App.css';
import Footer from './components/footer/script';
import Header from './components/header/script';
import Home from './components/home/script';
import React, { useState, useEffect } from "react";


function App() {

  let [bloqueioClick, setBloqueioClick] = useState(true)

  let [dataCarrinho, setDataCarrinho] = useState([]);

  let [notificacaoAdd, setNotificacaoAdd] = useState("notificacao-add")

  const addNoCarrinho = (produtoAdd) => {
    const produtoExistente = dataCarrinho.find((produto) => produto.id === produtoAdd.id);

    if(produtoExistente){
      const novoCarrinho = dataCarrinho.map((produto) => {
        if(produto.id === produtoAdd.id && bloqueioClick){
          return { ...produto, quantidade: produto.quantidade + 1 , preco: produto.precoInicial + produto.preco };
        }
        return produto;
      });
      setDataCarrinho(novoCarrinho);
      setBloqueioClick(false);
    }else{
      setBloqueioClick(false);
      setDataCarrinho([...dataCarrinho, { ...produtoAdd, quantidade: 1}]);
    }
    console.log(bloqueioClick);
    setNotificacaoAdd("notificacao-add-ativo")
  };

  useEffect(() => {
    const timerNotify = setTimeout(() => {
      if(notificacaoAdd === "notificacao-add-ativo"){
        setBloqueioClick(true);
        setNotificacaoAdd("notificacao-add");
      }
    }, 1200);
    
    return () => {
      clearTimeout(timerNotify);
    };
  }, [notificacaoAdd]);

  const removerDoCarrinho = (produtoId) => {
    const produtoExistente = dataCarrinho.find((produto) => produto.id === produtoId);

    if(produtoExistente){
      if(produtoExistente.quantidade > 1){
        const novoCarrinho = dataCarrinho.map((produto) => {
          if (produto.id === produtoId) {
            return { ...produto, quantidade: produto.quantidade - 1, preco: produto.preco - produto.precoInicial};
          }
          return produto;
        });
        setDataCarrinho(novoCarrinho);
      }else{
        const novoCarrinho = dataCarrinho.filter((produto) => produto.id !== produtoId);
        setDataCarrinho(novoCarrinho);
      }
    }
  };

  return (
    <div className="App">
      <Header dataCarrinho={dataCarrinho} removerDoCarrinho={removerDoCarrinho}/>
      <Home notifyAdd={notificacaoAdd} addNoCarrinho={addNoCarrinho}/>
      <Footer/>
    </div>
  );
}

export default App;
