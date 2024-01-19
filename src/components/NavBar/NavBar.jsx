import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.nav__link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.nav__link} to="/products">
        Products
      </NavLink>
    </nav>
  );
};

export default NavBar;
