import { useState } from "react";
import { SlidesContainer } from "./styles";
import { SlidesProps } from "./type";
import { Slide } from "../components/slide/slide";

export const Slides: React.FC<SlidesProps> = ({slides}) => {

  const [slideIndex, setSlideIndex] = useState(0);

  const proxSlide = () => {
    const nextIndex = (slideIndex + 1) % slides.length;
    setSlideIndex(nextIndex);
    if(slides[nextIndex] === undefined){
      setSlideIndex(0);
    }
  };

  return(
    <SlidesContainer onClick={proxSlide}>
      <Slide image={slides[slideIndex]}/>
    </SlidesContainer>
  );
};