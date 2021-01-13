import React from "react";
import style from "./ContentSlider.module.css";

// carousel component stuff
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const ContentSlider = (props) => (
  <div className={style.mainContainer}>
    <CarouselProvider
      naturalSlideWidth={props.width}
      naturalSlideHeight={props.height}
      totalSlides={props.totalSlides}
      visibleSlides={props.visibleSlides}
    >
      <Slider>
        {props.contents.map((content, index) => {
          return (
            <Slide className={style.contentTile}>
              {
                content
              }
            </Slide>
          );
        })}
      </Slider>

      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  </div>
);

export default ContentSlider;
