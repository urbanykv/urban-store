import { useEffect, useState } from "react";
import { MainStoreContainer } from "./style"
import { IProdutos } from "./type";
import CardProduct from "../cardProduct/cardProduct";

const MainStore = () => {

  const [ dadosApi, setDadosApi ] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(dados => {
              console.log(dados);
              setDadosApi(dados)
            })
  }, [])

  return(
    <MainStoreContainer>
      {
        dadosApi.length && dadosApi.map((produto: IProdutos) => (
          <CardProduct 
            id={produto.id} 
            title={produto.title}
            description={produto.description}
            price={produto.price}
            image={produto.image}
            rating={produto.rating}
          />
        ))
      }
    </MainStoreContainer>
  );
  
};

export default MainStore;