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
      <NavLink className={linkStyles} to="/">
        Home
      </NavLink>
      <NavLink className={linkStyles} to="/products">
        Products
      </NavLink>
    </nav>
  );
};

export default NavBar;
