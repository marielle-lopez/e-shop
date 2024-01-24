import styles from "./PaddingWrapper.module.scss";

const PaddingWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default PaddingWrapper;
