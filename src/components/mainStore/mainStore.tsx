import { useEffect, useState } from "react";
import { MainStoreContainer, ProdutoContainer } from "./style"

const MainStore = () => {

  const [ dadosApi, setDadosApi ] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(dados => {
              console.log(dados[0].title);
              setDadosApi(dados)
            })
  }, [])

  console.log(dadosApi.length);

  return(
    <MainStoreContainer>
      {
        dadosApi.length && dadosApi.map((produto) => (
          <ProdutoContainer>
          </ProdutoContainer> 
        ))
      }
    </MainStoreContainer>
  );
  
};

export default MainStore;