import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import style from "./container.module.css";
const Container = props => {
  const { children, status, classes } = props;
  const popupRef = useRef();
  let position = 0;
  useEffect(() => {
    position = popupRef.current.getBoundingClientRect().top;
    window.scrollTo(0, position);
    return () => {
      window.scrollTo(window.scrollX, window.screenY);
    };
  }, [popupRef]);
  return (
    <div
      className={[
        style[status] || "slide",
        style.container,
        classes === null ? " " : classes.join(" "),
      ].join(" ")}
      ref={popupRef}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  status: PropTypes.oneOf(["slide", "hide"]),
  classes: PropTypes.array || null,
};

export default Container;
