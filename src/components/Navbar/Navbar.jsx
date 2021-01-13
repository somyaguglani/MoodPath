import React, { useState } from "react";
import { GiDirectionSigns } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import css from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [clicked, changeClicked] = useState(false);

  const handleClick = () => {
    changeClicked((prevClicked) => !prevClicked);
  };

  const closeMobileMenu = () => {
    changeClicked((prevClicked) => false);
  };

  return (
    <>
      <nav className={css.Navbar}>
        <div className={css.NavbarContainer}>
          <Link to="/" className={css.NavbarLogo} onClick={closeMobileMenu}>
            MOODPATH
            <GiDirectionSigns className={css.MoodpathIcon} />
          </Link>

          <div className={css.MenuIcon} onClick={handleClick}>
            {clicked ? (
              <FiX className={css.MenuIcons} />
            ) : (
              <FiMenu className={css.MenuIcons} />
            )}
          </div>

          <ul className={clicked ? css.NavMenuActive : css.NavMenu}>
            <li className={css.NavItem}>
              <Link
                to="/faq"
                className={css.NavLinks}
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>
            <li className={css.NavItem}>
              <Link
                to="/reviews"
                className={css.NavLinks}
                onClick={closeMobileMenu}
              >
                Reviews
              </Link>
            </li>
            <li className={css.NavItem}>
              <Link
                to="/contact-us"
                className={css.NavLinks}
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className={css.NavItem}>
              <Link
                to="/login"
                className={css.NavLinks}
                onClick={closeMobileMenu}
              >
                <button className={css.MenuButton}>Login</button>
              </Link>
            </li>

            <li className={css.NavItem}>
              <Link
                to="/signup"
                className={css.NavLinks}
                onClick={closeMobileMenu}
              >
                <button className={css.MenuButton}>Sign-Up</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
