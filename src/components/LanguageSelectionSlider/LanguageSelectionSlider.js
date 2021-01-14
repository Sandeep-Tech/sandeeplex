import React from "react";
import ContentSlider from "../common/ContentSlider/ContentSlider";
import style from "./LanguageSelectionSlider.module.css";

const LanguageSelectionSlider = (props) => {
  props.languages.map((language, index) => (
    <img src={language} alt={`lang ${index}`} />
  ));

  return (
    <div>
      <span>LANGUAGES</span>
      <ContentSlider
        width={100}
        height={10}
        totalSlides={props.languages.length}
        visibleSlides={props.languages.length}
        contents={props.languages}
      />
    </div>
  );
};

export default LanguageSelectionSlider;
