import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const linkStyles = ({ isActive }) => {
    return isActive
      ? `${styles.nav__link} ${styles.nav__link__active}`
      : `${styles.nav__link}`;
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.text_items}>
        <NavLink className={linkStyles} to="/">
          Home
        </NavLink>
        <NavLink className={linkStyles} to="/products">
          Products
        </NavLink>
      </div>
      <div className={styles.icon_items}>
        <NavLink className={linkStyles} to="/favourites">
          <img
            className={styles.icon}
            src="../src/assets/favourite.png"
            alt="Favourites icon"
          />
        </NavLink>
        <NavLink className={linkStyles} to="/cart">
          <img
            className={styles.icon}
            src="../src/assets/cart.png"
            alt="Cart icon"
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
