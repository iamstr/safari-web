import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from "./snackbar.module.css";
function SnackBar({ message, isOpen }) {
  const [close, setClose] = useState(true);
  return (
    <div
      className={[
        styles.snackbar,
        isOpen && close ? styles.show : styles.closed,
      ].join(" ")}
    >
      <p className={styles.message}>{message}</p>{" "}
      <p className={styles.close} onClick={() => setClose(false)}>
        {" "}
        &#10006;
      </p>
    </div>
  );
}

SnackBar.propTypes = {
  message: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default SnackBar;
