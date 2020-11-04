import PropTypes from "prop-types";
import React from "react";
import styles from "./card.module.css";
export default function Card(props) {
  return (
    <div className={styles.card}>
      <h5 className={styles.cardHeader}>{props.header}</h5>
      <p className="cardPara">{props.para}</p>
      <img
        src={props.img}
        alt="this is the card image"
        className={styles.cardImg}
      />
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.any,
  header: PropTypes.string,
  para: PropTypes.string
};
