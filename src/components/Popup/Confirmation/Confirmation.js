import React, { useContext } from "react";
import Icon from "../../../assets/img/modals-icons/alert.svg";
import SeatContext from "../../../contexts/SeatContext";
import SliderContext from "../../../contexts/SliderContext";
import styles from "./confirmation.module.css";

const Confirmation = React.memo(function Confirmation(props) {
  /* render using props */

  const seat = useContext(SeatContext);
  const [context, setContext] = useContext(SliderContext);
  return (
    <div className="column">
      <div className="row">
        <img src={Icon} alt="alert icon" />
        <h4 className={styles.confirm}>
          You have selected seat <span>{seat.alt}</span>. Do you wish to?
        </h4>
      </div>
      <div className={["row", styles.justifyContentAround].join(" ")}>
        <button className={[styles.button, styles.transparent].join(" ")}>
          Cancel
        </button>
        <button
          className={[styles.button].join(" ")}
          onClick={() => setContext(1)}
        >
          Confirm
        </button>
      </div>
    </div>
  );
});

Confirmation.propTypes = {};

export default Confirmation;
