import React, { useContext, useState } from "react";
import Chevron from "../../../assets/img/modals-icons/chevron.svg";
import Circle from "../../../assets/img/modals-icons/circle.svg";
import Icon from "../../../assets/img/modals-icons/payment.svg";
import SliderContext from "../../../contexts/SliderContext";
import styles from "./payment.module.css";

const Payment = React.memo(function Payment(props) {
  /* render using props */

  const [context, setContext] = useContext(SliderContext);

  const [open, setOpen] = useState(false);
  return (
    <div className="column">
      <div className="row">
        <img src={Icon} alt="alert icon" width="100px" height="100px" />
        <h4 className={styles.confirm}>Choose Payment Method</h4>
      </div>
      <div className="row">
        <div
          className={[
            "column",

            styles.payment,
            open ? styles.borderWhite : null,
          ].join(" ")}
          onClick={() => setOpen(!open)}
        >
          <div
            className={["row", styles.justifyContentAround].join(" ")}
            onClick={() => setOpen(!open)}
          >
            <img
              src={Circle}
              alt="payment icon"
              className={open ? styles.change : null}
            />
            <h5 className={styles.paymentMethod}>M-PESA</h5>
            <img
              src={Chevron}
              alt="alert icon"
              className={open ? styles.flip : null}
            />
          </div>

          <div
            className={["row", open ? styles.accordion : styles.hidden].join(
              " ",
            )}
          >
            <div className={["column", styles.innerAccordion].join(" ")}>
              <button
                className={[styles.button, styles.buttonGreen].join(" ")}
                onClick={() => setContext(context + 1)}
              >
                Use M-PESA Express
              </button>
              <button
                className={[styles.button, styles.transparent].join(" ")}
                onClick={() => setContext(context - 1)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Payment.propTypes = {};

export default Payment;
