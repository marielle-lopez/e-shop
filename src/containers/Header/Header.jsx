import NavBar from "../../components/NavBar/NavBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        S
        <img
          className={styles.logo__icon}
          src="src\assets\vinyl.png"
          alt="Vinyl icon"
        />
        und
      </h1>
      <NavBar />
    </header>
  );
};

export default Header;
