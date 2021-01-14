import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/logo/gemeplex_logo_black.png";

const Header = () => (
  <div className={style.headerContainer}>
    <div className={style.centerAllItems}>
      <div className={style.navBar}>
        <img alt="logo" src={logo} className={style.logo} />
        <a href="">Originals</a>
        <a href="">Movies</a>
        <a href="">Videos</a>
        <a href="">Music</a>
        <a href="">Hype</a>
      </div>

      <div>
        <input type="text" placeholder="search" />
        <button class={style.themeToggle}> light / dark</button>
        <span className={style.loginButton}>Login</span>
      </div>
    </div>
  </div>
);

export default Header;
