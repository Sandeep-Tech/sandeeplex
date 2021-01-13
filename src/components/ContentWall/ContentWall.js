import React from "react";
import style from "./ContentWall.module.css";

// images
import img1 from "../../assets/content-wall/1.jpg";
import img2 from "../../assets/content-wall/2.jpg";
import img3 from "../../assets/content-wall/3.jpg";
import img4 from "../../assets/content-wall/4.jpg";
import img5 from "../../assets/content-wall/5.jpg";
import img6 from "../../assets/content-wall/6.jpg";
import img7 from "../../assets/content-wall/7.jpg";
import img8 from "../../assets/content-wall/8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const ContentWall = () => (
  <div className={style.container}>
    {images.map((image, index) => {
      return (
        <div key={index} className={style.tile}>
          <img alt={`image ${index + 1}`} src={image} className={style.image}/>

          <div className={style.details}>
            <span>name </span>
            <span>description </span>
          </div>
        </div>
      );
    })}
  </div>
);

export default ContentWall;
