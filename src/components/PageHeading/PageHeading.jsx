import styles from "./PageHeading.module.scss";

const PageHeading = ({ children }) => {
  return <h1 className={styles.heading}>{children}</h1>;
};

export default PageHeading;
