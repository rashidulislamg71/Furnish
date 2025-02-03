import React from "react";
import styles from "./DesignCategory.module.css";

import living_room from "../../assets/Images/living_room_img.jpg";
import dining_room from "../../assets/Images/Dining_room_img.jpeg";
import bed_room from "../../assets/Images/Bed_room_img.jpeg";

const DesignCategory = () => {
  return (
    <div className={`${styles.design_categorys_container}`}>

        <div className={`${styles.design_category_title}`}>
            <h2>Design Catalog Categroy</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, iure?</p>
        </div>

        <div className={styles.flex}>
        <div className={`${styles.flex} ${styles.design_category_images}`}>
          <div className={`${styles.flex} ${styles.design_img}`}>
            <img src={living_room} alt="Living Room" />
            <h4>Living Room</h4>
          </div>
          <div className={`${styles.flex} ${styles.design_img}`}>
            <img src={dining_room} alt="Dining Room" />
            <h4>Dining Room</h4>
          </div>
          <div className={`${styles.flex} ${styles.design_img}`}>
            <img src={bed_room} alt="Bed Room" />
            <h4>Bed Room</h4>
          </div>
        </div>
        </div>
        
      </div>
    
  );
};

export default DesignCategory;
