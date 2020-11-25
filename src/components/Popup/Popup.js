import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import Close from "../../assets/img/modals-icons/close.svg";
import SliderContext from "../../contexts/SliderContext";
import Confirmation from "./Confirmation/Confirmation";
import styles from "./popup.module.css";
import Steps from "./Steps";
import UserInput from "./UserInfo/Input";
let position = 0;

function Popup(props) {
  const [toggle, setToggle] = useState(props.toggle);
  const popupRef = useRef();

  const [context, setContext] = useState(0);

  const components = [Confirmation, UserInput];

  useEffect(() => {
    props.onChange(toggle);
  }, [toggle]);
  console.log("this is the context ", context);

  return (
    <div
      id="popup"
      className={[styles.popup, toggle ? styles["show"] : null].join(" ")}
      ref={popupRef}
    >
      <SliderContext.Provider value={[context, setContext]}>
        <Steps />
      </SliderContext.Provider>
      <img
        src={Close}
        alt="close Modal"
        className={styles.close}
        onClick={() => setToggle(!toggle)}
      />
    </div>
  );
}

Popup.propTypes = { toggle: PropTypes.bool, onChange: PropTypes.any };

export default Popup;
