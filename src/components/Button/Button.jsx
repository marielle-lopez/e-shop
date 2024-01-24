import styles from "./Button.module.scss";

const Button = ({ text, variant, size, handleClick, fnParams = null }) => {
  let btnVariant = variant === "primary" ? styles.primary : styles.secondary;
  let btnSize;

  if (variant === "primary") {
    btnVariant = styles.primary;
  }

  if (variant === "secondary") {
    btnVariant = styles.secondary;
  }

  if (variant === "inactive") {
    btnVariant = styles.inactive;
  }

  if (size === "small") {
    btnSize = styles.small;
  }

  if (size === "medium") {
    btnSize = styles.medium;
  }

  if (size === "large") {
    btnSize = styles.large;
  }

  const stylesArr = [styles.btn, btnVariant, btnSize];

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleClick(fnParams);
      }}
      className={stylesArr.join(" ")}
    >
      {text}
    </button>
  );
};

export default Button;
