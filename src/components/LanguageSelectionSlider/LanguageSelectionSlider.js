import React from "react";
import ContentSlider from "../common/ContentSlider/ContentSlider";
import style from "./LanguageSelectionSlider.module.css";

const LanguageSelectionSlider = () => (
  <div>
    <span>LANGUAGES</span>
    <ContentSlider width={100} height={10} totalSlides={7} visibleSlides={7} />
  </div>
);

export default LanguageSelectionSlider;
