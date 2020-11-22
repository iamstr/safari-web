import PropTypes from "prop-types";
import { default as React } from "react";
import style from "./container.module.css";
const Container = props => {
  const { children, status } = props;
  return <div className={style[status] || "slide"}>{children}</div>;
};

Container.propTypes = {
  status: PropTypes.oneOf(["slide", "hide"]),
};

export default Container;
