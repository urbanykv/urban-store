import { SlideContainer, SlideImage } from "./styles";
import { SlideProps } from "./type";

export const Slide: React.FC<SlideProps> = ({image}: SlideProps) => {
  return(
    <SlideContainer>
      <SlideImage src={image} alt="Img Slide"/>
    </SlideContainer>
  );
};