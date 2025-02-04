import React from "react";
import styles from "./OurProducts.module.css";

import table from "../../assets/Images/Products_img/table.jpeg";
import chair from "../../assets/Images/Products_img/Chair.jpeg";
import sofa_set from "../../assets/Images/Products_img/Luxury_sofa_set.png";
import reception from "../../assets/Images/Products_img/Reception_1.jpg";


import { FaOpencart } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

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
                <p>13,000.00 BDT</p>
                
              </div>
            </div>

            {/* product hover content  */}
            <div className={`${styles.flex} ${styles.product_hover_container}`}>
              <div className={`${styles.flex} ${styles.cart}`}>
                <button> <p><FaOpencart /></p> Add to cart</button>
              </div>
              <div className={`${styles.flex} ${styles.options}`}>
                <button className={styles.share}> <p><IoShareSocial /></p> Share</button>
                <button className={styles.add_favourite}><p><FaRegHeart /></p> Favourite</button>
              </div>
            </div>
          </div>
          <div className={`${styles.single_product}`}>
            <div className={styles.product_img}>
              <img src={sofa_set} alt="Sofa Set" />
            </div>
            <div className={`${styles.product_detils}`}>
              <h4>Sofa Set</h4>
              <small>Stylish Smart Products.</small>
              <div className={ styles.price}>
                <p>13,000.00 BDT</p>
                
              </div>
            </div>

            {/* product hover content  */}
            <div className={`${styles.flex} ${styles.product_hover_container}`}>
              <div className={`${styles.flex} ${styles.cart}`}>
                <button> <p><FaOpencart /></p> Add to cart</button>
              </div>
              <div className={`${styles.flex} ${styles.options}`}>
                <button className={styles.share}> <p><IoShareSocial /></p> Share</button>
                <button className={styles.add_favourite}><p><FaRegHeart /></p> Favourite</button>
              </div>
            </div>
          </div>
          <div className={`${styles.single_product}`}>
            <div className={styles.product_img}>
              <img src={chair} alt="Chair" />
            </div>
            <div className={`${styles.product_detils}`}>
              <h4>Chair</h4>
              <small>Stylish Smart Products.</small>
              <div className={ styles.price}>
                <p>13,000.00 BDT</p>
                
              </div>
            </div>

            {/* product hover content  */}
            <div className={`${styles.flex} ${styles.product_hover_container}`}>
              <div className={`${styles.flex} ${styles.cart}`}>
                <button> <p><FaOpencart /></p> Add to cart</button>
              </div>
              <div className={`${styles.flex} ${styles.options}`}>
                <button className={styles.share}> <p><IoShareSocial /></p> Share</button>
                <button className={styles.add_favourite}><p><FaRegHeart /></p> Favourite</button>
              </div>
            </div>
          </div>
          <div className={`${styles.single_product}`}>
            <div className={styles.product_img}>
              <img src={reception} alt="Reception" />
            </div>
            <div className={`${styles.product_detils}`}>
              <h4>Reception</h4>
              <small>Stylish Smart Products.</small>
              <div className={ styles.price}>
                <p>13,000.00 BDT</p>
                
              </div>
            </div>

            {/* product hover content  */}
            <div className={`${styles.flex} ${styles.product_hover_container}`}>
              <div className={`${styles.flex} ${styles.cart}`}>
                <button> <p><FaOpencart /></p> Add to cart</button>
              </div>
              <div className={`${styles.flex} ${styles.options}`}>
                <button className={styles.share}> <p><IoShareSocial /></p> Share</button>
                <button className={styles.add_favourite}><p><FaRegHeart /></p> Favourite</button>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
