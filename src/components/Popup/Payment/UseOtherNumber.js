import React, { useContext, useState } from "react";
import Chevron from "../../../assets/img/modals-icons/chevron.svg";
import Circle from "../../../assets/img/modals-icons/circle.svg";
import Icon from "../../../assets/img/modals-icons/payment.svg";
import SliderContext from "../../../contexts/SliderContext";
import Input from "../../Input/Input";
import styles from "./payment.module.css";

const UseOtherNumber = React.memo(function UseOtherNumber(props) {
  /* render using props */

  const [context, setContext] = useContext(SliderContext);

  const [open, setOpen] = useState(true);
  const [value, setValue] = useState(true);
  const inputHandler = val => setValue(val);
  return (
    <div className="column">
      <div className="row">
        <img src={Icon} alt="alert icon" width="100px" height="100px" />
        <h4 className={styles.confirm}>Enter the Number you wish to use</h4>
      </div>
      <div className="row">
        <div
          className={[
            "column",

            styles.payment,
            open ? styles.borderWhite : null,
          ].join(" ")}
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
            <div className={["row", styles.osama].join(" ")}>
              <Input
                placeholder="07xx xxx xxx"
                label="Phone Number"
                type="tel"
                handler={inputHandler}
              />
            </div>

            <div className={["column", styles.innerAccordion2].join(" ")}>
              <button
                className={[styles.button, styles.buttonGreen].join(" ")}
                onClick={() => setContext(context + 1)}
              >
                Confirm Payment
              </button>
              <button
                className={[styles.button, styles.transparent].join(" ")}
                onClick={() => setContext(context - 1)}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

UseOtherNumber.propTypes = {};

export default UseOtherNumber;
