import React, { useContext, useEffect, useState } from "react";
import Check from "../../../assets/img/modals-icons/cherry-done-1.svg";
import SliderContext from "../../../contexts/SliderContext";
import styles from "./payment.module.css";

const CheckMpesaPrompt = React.memo(function CheckMpesaPrompt(props) {
  /* render using props */

  const [context, setContext] = useContext(SliderContext);

  const [open, setOpen] = useState(true);
  const [timer, setTimer] = useState(60);
  const [value, setValue] = useState(true);
  const inputHandler = val => setValue(val);
  useEffect(() => {
    let myInterval = () => {};

    if (context === 5) {
      myInterval = setInterval(() => {
        console.log(timer, " hey");
        if (timer <= 0) {
          clearInterval(myInterval);
        } else {
          setTimer(timer - 1);
        }
      }, 1000);
    }
    return () => {
      clearInterval(myInterval);
    };
  }, [timer, context]);
  return (
    <div className="column">
      {/* <div className="row">
        <img src={Icon} alt="alert icon" width="100px" height="100px" />
        <h4 className={styles.confirm}>Enter the Number you wish to use</h4>
      </div> */}
      <div className="row">
        <div className={["row", styles.osama].join(" ")}>
          <img src={Check} alt="alert icon" className={null} />
          <div className="column">
            <h5
              className={[styles.paymentMethod, styles.mpesaPrompt].join(" ")}
            >
              Check Your Phone
            </h5>
            <h5
              className={[
                styles.paymentMethod,
                styles.mpesaPrompt,
                styles.tagline,
              ].join(" ")}
            >
              You have recieved an m-pesa prompt
            </h5>
            <div className={["column", styles.innerAccordion2].join(" ")}>
              <button
                className={[styles.button, styles.mpesaButton].join(" ")}
                disabled={timer != 0 ? true : false}
                onClick={() => setContext(context + 1)}
              >
                {timer != 0
                  ? "Resend code in 00:" + (timer < 10 ? `0${timer}` : timer)
                  : "Send me code again"}
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

CheckMpesaPrompt.propTypes = {};

export default CheckMpesaPrompt;
