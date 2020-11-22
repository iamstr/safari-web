import React, { useContext, useState } from "react";
import Icon from "../../../assets/img/buttons-icon/save.svg";
import SliderContext from "../../../contexts/SliderContext";
import Input from "../../Input/Input";
import style from "./user.module.css";
function UserInput(props) {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [ID, setID] = useState();
  const [context, setContext] = useContext(SliderContext);
  const nameHandler = e => {
    setName(e);
  };
  const emailHandler = e => {
    setEmail(e);
  };
  const phoneHandler = e => {
    setPhone(e);
  };
  const IDHandler = e => {
    setID(e);
  };
  return (
    <form className="column">
      <Input
        type="text"
        handler={nameHandler}
        label="Full Names"
        placeholder="John Doe"
      />
      <Input
        type="email"
        handler={emailHandler}
        label="Email Address"
        placeholder="jane@gmail.com"
      />
      <Input
        type="text"
        handler={phoneHandler}
        label="Phone Number"
        placeholder="07xxxxxxxx"
      />
      <Input
        type="text"
        handler={IDHandler}
        label="ID Number"
        placeholder="12345687"
      />

      <div className={style.formControl}>
        <button
          type="submit"
          className={style.button}
          onClick={() => {
            setContext(2);
          }}
        >
          <span className={style.text}>Proceed to Payment</span>
          <img src={Icon} alt="" className={style.formImg} />
        </button>
      </div>
    </form>
  );
}

UserInput.propTypes = {};

export default UserInput;
