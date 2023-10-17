import './App.css';
import Header from './components/header/script';
import Home from './components/home/script';
import React, { useState } from "react";

function App() {

  let [dataCarrinho, setDataCarrinho] = useState([]);
  
  const addNoCarrinho = (produtoAdd) => {
    setDataCarrinho([... dataCarrinho, produtoAdd])
  };

  const removerDoCarrinho = (produtoId) => {
    const novoCarrinho = dataCarrinho.filter((produto) => produto.id !== produtoId);
    setDataCarrinho(novoCarrinho);
  };

  

  return (
    <div className="App">
      <Header dataCarrinho={dataCarrinho} removerDoCarrinho={removerDoCarrinho}/>
      <Home  addNoCarrinho={addNoCarrinho}/>
    </div>
  );
}

export default App;
