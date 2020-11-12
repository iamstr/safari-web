import PropTypes from "prop-types";
import React from "react";
import styles from "./_.module.css";
function CardInfo({ para, header }) {
  return (
    <div className={styles.column}>
      <p className={styles.cardPara}>{para}</p>
      <h6 className={styles.columnHeader}>{header}</h6>
    </div>
  );
}

CardInfo.propTypes = {
  para: PropTypes.string,
  header: PropTypes.string,
};

export default CardInfo;
