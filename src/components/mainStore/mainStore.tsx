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
    fetch('https://urban-store-backend.onrender.com/produtos')
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
            nome={produto.nome}
            descricao={produto.descricao}
            preco={produto.preco}
            imagem={produto.imagem}
            rating={produto.rating}
          />
        ))
      }
    </MainStoreContainer>
  );
  
};

export default MainStore;