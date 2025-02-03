import React, { useState, useRef } from "react";
import styles from "./NavBar.module.css";
import "../../index.css";
import { NavLink } from "react-router-dom";

import { FaRegHeart, FaUserCheck } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaHouzz } from "react-icons/fa6";
import { VscChromeClose } from "react-icons/vsc";
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navRef = useRef(null);

  const openMenuHandeling = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenuHandeling = () => {
    setOpenMenu(false);
    console.log(openMenu);
  };

  return (
    <div className={` ${styles.header_section}`}>
      <div className={`${styles.flex} ${styles.header_container}`}>
        <div className={` ${styles.flex} ${styles.logo}`}>
          <NavLink className={`${styles.flex}`} to="/">
            <p className={styles.logo_icon}>
              <FaHouzz />
            </p>
            <h3 className={styles.logo_text}>Furnish</h3>
          </NavLink>
        </div>

        <nav className={`${styles.flex} ${styles.menu}`}>
          <ul
            ref={navRef}
            className={`${styles.flex} ${styles.menu_link} ${
              openMenu ? styles.navResposive : " "
            }`}
          >
            <li>
              <NavLink
                onClick={closeMenuHandeling}
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={closeMenuHandeling}
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/news"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenuHandeling}
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenuHandeling}
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={`${styles.flex} ${styles.nav_icons}`}>
          <div
            title="Favarets"
            className={`${styles.flex} ${styles.icon} ${styles.love}`}
          >
            <FaRegHeart />
          </div>
          <div
            title="Cart"
            className={`${styles.flex} ${styles.icon} ${styles.cart}`}
          >
            <IoCartOutline />
          </div>
          <div className={`${styles.flex} ${styles.icon} ${styles.user}`}>
            <FaUserCheck />
          </div>
        </div>

        <div
          onClick={openMenuHandeling}
          className={`${styles.flex} ${styles.menu_btns}`}
        >
          {openMenu ? <VscChromeClose /> : <IoMdMenu />}
        </div>

      </div>
    </div>
  );
};

export default NavBar;
