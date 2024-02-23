import { useContext, useEffect, useState } from "react";
import { MainStoreContainer } from "./style"
import { IProdutos } from "./type";
import CardProduct from "../cardProduct/cardProduct";
import { LoadingContext } from "../../contexts/loadingContext/loadingContext";


const MainStore = () => {

  const { setToggleLoading } = useContext(LoadingContext);

  const [ dadosApi, setDadosApi ] = useState([]);


  useEffect(() => {
    setToggleLoading(true);
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(dados => {
      console.log(dados);
      setDadosApi(dados);
      setToggleLoading(false);
    })
  },[setToggleLoading]);
  
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