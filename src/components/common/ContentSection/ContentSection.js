import React from "react";
import style from "./ContentSection.module.css";
import ContentSlider from "../ContentSlider/ContentSlider";

const ContentSection = (props) => (
  <div className={style.mainContainer}>
    <span className={style.heading}>{props.heading}</span>

    <div>
      {props.subheadings.map((subheading, index) => (
        <div key={index} className={style.subheading}>
          <span>{subheading}</span>
          <ContentSlider
            contents={props.images}
            height={50}
            width={100}
            totalSlides={6}
            visibleSlides={4}
          />
        </div>
      ))}
    </div>
  </div>
);

export default ContentSection;
