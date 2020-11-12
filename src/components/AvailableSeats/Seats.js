import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import SnackBar from "../SnackBar/SnackBar";
import styles from "./_.module.css";
function Seats({ img, name }) {
  const [selected, setSelected] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log(selected);
    if (img.includes("available") && selected) {
      setOpen(true);
    }
  }, [selected]);
  const _handle = function () {
    if (img.includes("available") && name !== "available") {
      setSelected(!selected);
      console.log(selected);
    }
  };
  return (
    <div className={styles.seat}>
      <h6 className={styles.seatName}>{name || null}</h6>
      <img
        src={selected ? require("../../assets/img/selected-seat.svg") : img}
        alt={name}
        className={[
          styles.seatImg,
          img.includes("available") ? styles.pointer : null,
        ].join(" ")}
        onClick={() => {
          _handle();
        }}
      />
      {open && <SnackBar message={`you have selected ${name}`} isOpen={open} />}
    </div>
  );
}

Seats.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

export default Seats;
