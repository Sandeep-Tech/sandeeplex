import React from "react";
import style from "./BillBoard.module.css";

const BillBoard = (props) => (
  <div className={style.mainContainer}>
    <img src={props.imgSrc} class={style.image} />
  </div>
);

export default BillBoard;
