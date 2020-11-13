import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import styles from "./_.module.css";
function Seats({ img, name }) {
  const [selected, setSelected] = useState(false);
  const imgRef = useRef();

  const [open, setOpen] = useState(false);
  useEffect(() => {
    // console.log(imgRef.current.attributes, "look here");
    // if (imgRef.current.getAttribute("data-class") === true) {
    //   console.log(open, " open is here");
    //   setOpen(imgRef.current.getAttribute("data-class"));
    // }
    console.log(open);
    if (open) {
      imgRef.current.setAttribute("data-class", open);
    }
    return () => {
      imgRef.current.setAttribute("data-class", !open);
    };
  }, [open]);
  const _handle = () => {
    if (img.includes("available") && name !== "available") {
      setOpen(!open);
      // imgRef.current.setAttribute("data-class", !open);
      console.log("this is open", imgRef.current.getAttribute("data-class"));
    }
  };
  return (
    <div className={styles.seat}>
      <h6 className={styles.seatName}>{name || null}</h6>
      <img
        src={open ? require("../../assets/img/selected-seat.svg") : img}
        alt={name}
        data-seat={true}
        className={[
          styles.seatImg,
          img.includes("available") ? styles.pointer : null,
        ].join(" ")}
        ref={imgRef}
        onClick={() => _handle()}
      />
    </div>
  );
}

Seats.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

export default Seats;
