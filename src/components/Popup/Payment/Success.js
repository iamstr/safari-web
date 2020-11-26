import React, { useContext } from "react";
import Celebrate from "../../../assets/img/modals-icons/celebrate@2x.jpg";
import SliderContext from "../../../contexts/SliderContext";
import Confetti from "../../Confetti/Confetti";
import styles from "./payment.module.css";

const Success = React.memo(function Success(props) {
  /* render using props */

  const [context, setContext] = useContext(SliderContext);

  return (
    <div className={["column", styles.overflowHidden].join(" ")}>
      <Confetti />
      <div className={["column", styles.justifyItemCenter].join(" ")}>
        <img src={Celebrate} alt="alert icon" className={styles.celebrateImg} />
      </div>

      <div className={styles.successHeadline}>
        <h5 className={[styles.paymentMethod, styles.mpesaPrompt].join(" ")}>
          We are thrilled you are travelling with us
        </h5>

        <button
          className={[styles.button, styles.mpesaButton].join(" ")}
          onClick={() => setContext(context + 1)}
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
});

Success.propTypes = {};

export default Success;
