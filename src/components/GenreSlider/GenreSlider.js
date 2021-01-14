import React from "react";
import ContentSlider from "../common/ContentSlider/ContentSlider";
import style from "./GenreSlider.module.css";

// DATA
import genreBoardSource from "../../assets/genre-slider/genre-picture.jpg";
const genreBoardElementArray = [];
for (let i = 0; i < 6; i++)
  genreBoardElementArray.push(
    <img
      className={style.genreBoard}
      src={genreBoardSource}
      alt={`image ${i}`}
    />
  );

const GenreSlider = () => {
  return (
    <div className={style.mainContainer}>
      <span className={style.heading}>GENRE</span>
      <ContentSlider
        width={50}
        height={20}
        totalSlides={6}
        visibleSlides={3}
        contents={genreBoardElementArray}
      />
    </div>
  );
};

export default GenreSlider;
