import { ButtonContainer } from "./styles";
import { buttonSlideProps } from "./types";

export const ButtonSlide: React.FC<buttonSlideProps> = ({image, direction, funcaoClick}) => {
  return(
    <ButtonContainer onClick={funcaoClick} direction={direction}>
      <img src={image} alt={`Button Slide ${direction}`}/>
    </ButtonContainer>
  );
}