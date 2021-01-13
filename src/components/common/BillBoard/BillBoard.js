import React from "react";
import style from "./BillBoard.module.css";

const BillBoard = (props) => (
  <div>
    <img src={props.imgSrc}/>
  </div>
);

export default BillBoard;