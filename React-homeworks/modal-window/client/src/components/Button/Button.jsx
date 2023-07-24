import React from "react";
import styles from "./Button.module.scss";

const Button = ({ text, bgColor, onClick }) => {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
      className={styles["btn"]}
    >
      {text}
    </button>
  );
};

export { Button };
