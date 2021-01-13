import React from "react";
import style from "./Header.module.css";

const Header = () => (
  <div className={style.header}>
    {/*logo*/}
    <span>Sandeeplex</span>

    {/*content type list*/}
    <div>
      <a>Originals</a>
      <a>Movies</a>
      <a>Videos</a>
      <a>Music</a>
      <a>Hype</a>
    </div>

    {/*theme selector*/}
    <div> light or dark</div>

    {/*login-button(a span tag really)*/}
    <span>Login</span>
  </div>
);

export default Header;
