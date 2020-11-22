import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import Close from "../../assets/img/modals-icons/close.svg";
import SliderContext from "../../contexts/SliderContext";
import Confirmation from "./Confirmation/Confirmation";
import Container from "./Container";
import styles from "./popup.module.css";
import UserInput from "./UserInfo/Input";
let position = 0;

function Popup(props) {
  const [toggle, setToggle] = useState(props.toggle);
  const popupRef = useRef();

  const [context, setContext] = useState(0);

  const components = [Confirmation, UserInput];
  const RenderComponents = () => {
    components.map((Component, index) => {
      if (index === context) {
        console.log(context, index);
        return (
          <Container key={"a" + index} status="slide">
            {Component}{" "}
          </Container>
        );
      } else {
        return (
          <Container key={"a" + index} status="hide">
            {Component}{" "}
          </Container>
        );
      }
    });
  };
  useEffect(() => {
    props.onChange(toggle);
    position = popupRef.current.getBoundingClientRect().top;
    window.scrollTo(0, position);
    return () => {
      window.scrollTo(window.scrollX, window.screenY);
    };
  }, [toggle]);
  console.log("this is the context ", context);
  return (
    <div
      id="popup"
      className={[styles.popup, toggle ? styles["show"] : null].join(" ")}
      ref={popupRef}
    >
      <SliderContext.Provider value={[context, setContext]}>
        {RenderComponents()}
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
