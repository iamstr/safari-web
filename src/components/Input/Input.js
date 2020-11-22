import PropTypes from "prop-types";
import React, { useState } from "react";
import style from "./input.module.css";
const Input = React.memo(({ handler, type, label, placeholder }) => {
  const [value, setValue] = useState();

  return (
    <div className={style.formControl}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        value={value}
        id={label}
        onChange={e => {
          handler(e.target.value);
          setValue(e.target.value);
        }}
        required
        placeholder={placeholder}
        className={style.input}
      />
    </div>
  );
});

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  handler: PropTypes.any,
};

export default Input;
