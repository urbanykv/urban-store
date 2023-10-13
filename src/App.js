import './App.css';
import Header from './components/header/script';
import Home from './components/home/script';
import React, { useState } from "react";

function App() {

  let [dataCarrinho, setDataCarrinho] = useState([]);
  
  const addNoCarrinho = (produtoAdd) => {
    setDataCarrinho([... dataCarrinho, produtoAdd]);
  };

  return (
    <div className="App">
      <Header dataCarrinho={dataCarrinho}/>
      <Home  addNoCarrinho={addNoCarrinho}/>
    </div>
  );
}

export default App;
