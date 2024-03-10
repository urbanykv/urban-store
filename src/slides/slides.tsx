import { useEffect, useState } from "react";
import { SlidesContainer } from "./styles";
import { SlidesProps } from "./type";
import { Slide } from "../components/slide/slide";
import arrowSlideLeft from "../assets/icons/arrow-slide-left.png";
import arrowSlideRight from "../assets/icons/arrow-slide-right.png";
import { ButtonSlide } from "../buttonSlide/buttonSlide";

export const Slides: React.FC<SlidesProps> = ({slides}) => {

  const [slideIndex, setSlideIndex] = useState(0);
  const nextIndex = (slideIndex + 1) % slides.length;
  const backIndex = (slideIndex - 1) % slides.length;

  const anteriorSlide = () => {
    setSlideIndex(backIndex);
    if(slides[backIndex] === undefined){
      setSlideIndex(0);
    }
  };

  const proxSlide = () => {
    setSlideIndex(nextIndex);
    console.log("proxSlide() funcionou");
    if(slides[nextIndex] === undefined){
      setSlideIndex(0);
    }
  };

  useEffect(() => {
    const intervaloDeAlteracao = setInterval(() => {
      setSlideIndex(nextIndex);
      if(slides[nextIndex] === undefined || slideIndex < 0){
        setSlideIndex(0);
      }

      clearInterval(intervaloDeAlteracao)
    }, 2500);
  }, [nextIndex, slideIndex, slides]);

  return(
    <SlidesContainer>
      <ButtonSlide direction="left" image={arrowSlideLeft} funcaoClick={anteriorSlide}/>
      <ButtonSlide direction="right" image={arrowSlideRight} funcaoClick={proxSlide}/>
      <Slide image={slides[slideIndex]}/>
    </SlidesContainer>
  );
};