import React from "react";
import ContentSlider from "../common/ContentSlider/ContentSlider";
import style from "./GenreSlider.module.css";

// DATA
import genreBoardSource from "../../assets/genre-slider/genre-picture.jpg";
const genreBoardElementArray = [];
for (let i = 0; i < 6; i++)
  genreBoardElementArray.push(
    <img src={genreBoardSource} alt={`image ${i}`} />
  );

const GenreSlider = (props) => {
  return (
    <div>
      <span>GENRE</span>
      <ContentSlider
        width={100}
        height={50}
        totalSlides={8}
        visibleSlides={8}
        contents={genreBoardElementArray}
      />
      
    </div>
  );
};

export default GenreSlider;
