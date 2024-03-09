import { IProdutos } from "../mainStore/type";
import { InfoContainer, ProdutoContainer, PrecoContainer } from "./style";

const CardProduct = ({ id, nome, preco, imagem, rating }: IProdutos) => {
  return(
    <ProdutoContainer key={id}>
      <img src={imagem} alt={nome} />
      <InfoContainer>
        <span id="nomeInfo">{nome.length > 22 ? nome.slice(0, 22) + "..." : nome}</span>
        <PrecoContainer>{preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</PrecoContainer>
        <div>
          <span>{rating}</span>
          <img src="" alt=""/>
        </div>
      </InfoContainer>
    </ProdutoContainer>
  );
};

export default CardProduct;