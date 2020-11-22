import PropTypes from "prop-types";
import React, { useState } from "react";
import styles from "./_.module.css";
function Seats({ img, name }) {
  const [selected, setSelected] = useState(false);

  return (
    <div className={styles.seat}>
      <h6 className={styles.seatName}>{name || null}</h6>
      <img
        src={img ? img : require("../../assets/img/available-seat.svg")}
        alt={name}
        data-seat={true}
        className={[
          styles.seatImg,
          img.includes("available") ? styles.pointer : null,
        ].join(" ")}
      />
    </div>
  );
}

Seats.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

export default Seats;
