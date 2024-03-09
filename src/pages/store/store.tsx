import Header from "../../components/header/header";
import MainStore from "../../components/mainStore/mainStore";
import SignForm from "../../components/sign/sign";
import { Slides } from "../../slides/slides";
import { StoreContainer } from "./style";
import slide01 from "../../assets/img/slide_01.jpg"
import slide02 from "../../assets/img/slide_02.jpg"
import slide03 from "../../assets/img/slide_03.jpg"

const slides = [
  slide01,
  slide02,
  slide03
]

const Store = () => {
  return(
    <StoreContainer>
      <Header />
      <Slides slides={slides}/>
      <SignForm />
      <MainStore />
    </StoreContainer>
  );
} 

export default Store;