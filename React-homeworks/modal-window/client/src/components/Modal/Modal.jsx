import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ isOpen, onClick, text = "Modal" }) => {
  return isOpen ? (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        <span className={styles["close-btn"]}>
          <p>{text}</p>
        </span>
        <button onClick={onClick}>Close</button>
      </div>
    </div>
  ) : null;
};

export { Modal };
