import React from "react";
import styles from "./Hero.module.css";

import hero_img from "../../assets/Images/hero_img.jpeg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={`${styles.hero_img}`}>
        {/* <img src={hero_img} alt="Hero Image" /> */}
      </div>

      <div className={`${styles.hero_text_container}`}>
        <div className={`${styles.flex} ${styles.hero_text_box}`}>
            <small>New Arrival</small>
            <h1>Discover Our New Collaction</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, aliquid accusantium.</p>
            <button>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
