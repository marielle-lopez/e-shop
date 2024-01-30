import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";
import SubscribeForm from "../SubscribeForm/SubscribeForm";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.row_wrapper}>
        <div className={styles.icons_wrapper}>
          <img className={styles.icon} src="/spotify.png" alt="Spotify icon" />
          <img
            className={styles.icon}
            src="/instagram.png"
            alt="Instagram icon"
          />
          <img className={styles.icon__alt} src="/x.png" alt="X icon" />
          <img
            className={styles.icon}
            src="/facebook.png"
            alt="Facebook icon"
          />
          <img
            className={styles.icon__alt}
            src="/tiktok.png"
            alt="Tiktok icon"
          />
        </div>

        <SubscribeForm />
      </div>

      <div className={styles.row_wrapper}>
        <div className={styles.navlinks__wrapper}>
          <NavLink className={styles.navlinks__link} to="/returns">
            Returns
          </NavLink>
          <NavLink className={styles.navlinks__link} to="/privacy-policy">
            Privacy Policy
          </NavLink>
          <NavLink className={styles.navlinks__link} to="/terms-of-service">
            Terms of Service
          </NavLink>
        </div>

        <p className={styles.copyright_text}>© 2024 Sound</p>
      </div>
    </footer>
  );
};

export default Footer;
