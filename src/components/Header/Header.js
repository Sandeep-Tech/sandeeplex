import React from "react";
import style from "./Header.module.css";

const Header = () => (
  <div className={style.header}>
    {/*logo*/}
    <span>Sandeeplex</span>

    {/*content type list*/}
    <div>
      <a href="">Originals</a>
      <a href="">Movies</a>
      <a href="">Videos</a>
      <a href="">Music</a>
      <a href="">Hype</a>
      <input type="text" />
    </div>

    {/*theme selector*/}
    <div> light or dark</div>

    {/*login-button(a span tag really)*/}
    <span>Login</span>
  </div>
);

export default Header;
