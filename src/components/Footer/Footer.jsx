import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";
import SubscribeForm from "../SubcribeForm/SubscribeForm";

const Footer = () => {
  return (
    <footer>
      <div className={styles.icons_wrapper}>
        <img
          className={styles.icon}
          src="src/assets/spotify.png"
          alt="Spotify icon"
        />
        <img
          className={styles.icon}
          src="src/assets/instagram.png"
          alt="Instagram icon"
        />
        <img className={styles.icon} src="src/assets/x.png" alt="X icon" />
        <img
          className={styles.icon}
          src="src/assets/facebook.png"
          alt="Facebook icon"
        />
        <img
          className={styles.icon}
          src="src/assets/tiktok.png"
          alt="Tiktok icon"
        />
      </div>

      <SubscribeForm />

      <div>
        <NavLink to="/returns">Returns</NavLink>
        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        <NavLink to="/terms-of-service">Terms of Service</NavLink>
      </div>

      <p>© 2024 Sound</p>
    </footer>
  );
};

export default Footer;
