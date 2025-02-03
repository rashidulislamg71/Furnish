import React from "react";
import styles from "./OurProducts.module.css";

import table from "../../assets/Images/Products_img/table.jpeg";
import chair from "../../assets/Images/Products_img/Chair.jpeg";
import sofa_set from "../../assets/Images/Products_img/Luxury_sofa_set.png";
import reception from "../../assets/Images/Products_img/Reception_1.jpg";

const OurProducts = () => {
  return (
    <div className={`${styles.our_products_container}`}>
      <div className={`${styles.our_products_inner_content}`}>
        <div className={styles.products_title}>
          <h2>Our Products</h2>
        </div>
        <div className={`${styles.flex} ${styles.our_products}`}>
          <div className={`${styles.single_product}`}>
            <div className={styles.product_img}>
              <img src={table} alt="Tables" />
            </div>
            <div className={`${styles.product_detils}`}>
              <h4>Table</h4>
              <small>Stylish Smart Products.</small>
              <div className={ styles.price}>
                <p>13,000.00</p>
                BDT
              </div>
            </div>
          </div>
          <div className={`${styles.single_product}`}>
            <div className={styles.product_img}>
              <img src={sofa_set} alt="Tables" />
            </div>
            <div className={`${styles.product_detils}`}>
              <h4>Sofa Set</h4>
              <small>Stylish Smart Products.</small>
              <div className={ styles.price}>
                <p>13,000.00</p>
                BDT
              </div>
            </div>
          </div>
          <div className={`${styles.single_product}`}>
            <div className={styles.product_img}>
              <img src={chair} alt="Tables" />
            </div>
            <div className={`${styles.product_detils}`}>
              <h4>Chair</h4>
              <small>Stylish Smart Products.</small>
              <div className={ styles.price}>
                <p>13,000.00</p>
                BDT
              </div>
            </div>
          </div>
          <div className={`${styles.single_product}`}>
            <div className={styles.product_img}>
              <img src={reception} alt="Tables" />
            </div>
            <div className={`${styles.product_detils}`}>
              <h4>Reception</h4>
              <small>Stylish Smart Products.</small>
              <div className={ styles.price}>
                <p>13,000.00</p>
                BDT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
