import { IProdutos } from "../mainStore/type";
import { InfoContainer, ProdutoContainer } from "./style";

const CardProduct = ({ id, title, description, price, image, rating }: IProdutos) => {
  return(
    <ProdutoContainer key={id}>
      <img src={image} alt={title} />
      <InfoContainer>
        
      </InfoContainer>
    </ProdutoContainer>
  );
};

export default CardProduct;