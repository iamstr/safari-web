import PropTypes from "prop-types";
import React from "react";
import styles from "./card.module.css";
export default function Card(props) {
  return (
    <div
      className={styles.card}
      style={{
        marginLeft: props.properties.marginLeft
          ? props.properties.marginLeft
          : ""
      }}
    >
      <h5 className={styles.cardHeader}>{props.header}</h5>
      <p className={styles.cardPara}>{props.para}</p>
      <img
        src={props.img}
        alt={props.para}
        className={styles.cardImg}
        style={props.properties}
      />
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.any,
  header: PropTypes.string,
  para: PropTypes.string,
  properties: PropTypes.object
};
