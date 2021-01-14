import React from "react";
import style from "./Footer.module.css";
import gemplexLogo from "../../assets/logo/gemeplex_logo_black.png";
import awsLogo from "../../assets/logo/PB_AWS_logo_white.png";

const Footer = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.topSection}>
        <div className={style.navBar}>
          <a href="">Subscription</a>
          <a href="">Hype</a>
          <a href="">About Us</a>
          <a href="">Faqs</a>
          <a href="">Career</a>
          <a href="">Feedback</a>
          <a href="">Support</a>
          <a href="">Contact Us</a>
        </div>

        <div className={style.platformIconContainer}>
          <span className={style.marginBelow}>Available on</span>
          <div className={style.iconRow}>
            <div className={style.availablePlatform}></div>
            <div className={style.availablePlatform}></div>
            <div className={style.availablePlatform}></div>
            <div className={style.availablePlatform}></div>
          </div>
        </div>

        <div className={style.platformIconContainer}>
          <span className={style.marginBelow}>Connect With Us</span>
          <div className={style.iconRow}>
            <div className={style.connectPlatform}></div>
            <div className={style.connectPlatform}></div>
            <div className={style.connectPlatform}></div>
            <div className={style.connectPlatform}></div>
          </div>
        </div>
      </div>
      <div className={style.bottomSection}>
        <img src={gemplexLogo} className={style.logo} />
        <span>
          Gemplex and all related channel and programming logos servies marks of
          and all related programming visuals and elements are the property of
          Gemplex media pvt.ltd.
        </span>
        <img src={awsLogo} className={style.logo} />
      </div>
    </div>
  );
};

export default Footer;
