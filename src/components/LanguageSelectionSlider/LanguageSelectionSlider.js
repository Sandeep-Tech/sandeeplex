import React from "react";
import ContentSlider from "../common/ContentSlider/ContentSlider";
import style from "./LanguageSelectionSlider.module.css";

const LanguageSelectionSlider = (props) => {
  const languageElements = props.languages.map((language, index) => (
    <img src={language} alt={`lang ${index}`} />
  ));

  return (
    <div>
      <span>LANGUAGES</span>
      <ContentSlider
        width={100}
        height={40}
        totalSlides={props.languages.length}
        visibleSlides={props.languages.length}
        contents={languageElements}
      />
    </div>
  );
};

export default LanguageSelectionSlider;
