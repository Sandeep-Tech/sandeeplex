import React from "react";

import img1 from "../../assets/promoted-content/1.jpg";
import img2 from "../../assets/promoted-content/2.jpg";
import img3 from "../../assets/promoted-content/3.jpg";
import img4 from "../../assets/promoted-content/4.jpg";
import img5 from "../../assets/promoted-content/5.jpg";
import img6 from "../../assets/promoted-content/6.jpg";

// carousel component stuff
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

// style for this component
// import style from "./PromotedContent.module.css";

const images = [img1, img2, img3, img4, img5, img6];

const PromotedContent = () => (
  <div>
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={25}
      totalSlides={6}
    >
      <Slider>
        {images.map((image, index) => {
          return (
            <Slide index={index}>
              <Image alt={`image ${index + 1}`} src={image} />
            </Slide>
          );
        })}
      </Slider>

      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  </div>
);

export default PromotedContent;
