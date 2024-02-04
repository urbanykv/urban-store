import { IProdutos } from "../mainStore/type";
import { ProdutoContainer } from "./style";

const CardProduct = ({ id, title, description, price, image, rating }: IProdutos) => {
  return(
    <ProdutoContainer key={id}>
      <img src={image} alt={title} />
      <>
      
      </>
    </ProdutoContainer>
  );
};

export default CardProduct;