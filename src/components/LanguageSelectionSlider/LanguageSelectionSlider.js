import React from "react";
import ContentSlider from "../common/ContentSlider/ContentSlider";
import style from "./LanguageSelectionSlider.module.css";

const LanguageSelectionSlider = (props) => {
  const languageElements = props.languages.map((language, index) => (
    <img className={style.image} src={language} alt={`lang ${index}`} />
  ));

  return (
    <div className={style.mainContainer}>
      <span className={style.heading}>LANGUAGES</span>
      <ContentSlider
        width={2}
        height={2}
        totalSlides={props.totalSlides}
        visibleSlides={props.visibleSlides}
        contents={languageElements}
      />
    </div>
  );
};

export default LanguageSelectionSlider;
