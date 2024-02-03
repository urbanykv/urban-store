
import Header from "../../components/header/header";
import MainStore from "../../components/mainStore/mainStore";
import SignForm from "../../components/sign/sign";
import { StoreContainer } from "./style";

const Store = () => {
  return(
    <StoreContainer>
      <Header />
      <SignForm />
      <MainStore />
    </StoreContainer>
  );
} 

export default Store;