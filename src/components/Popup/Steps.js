import React, { useContext } from "react";
import SliderContext from "../../contexts/SliderContext";
import Confirmation from "./Confirmation/Confirmation";
import Container from "./Container";
import CheckMpesaPrompt from "./Payment/CheckMpesaPrompt";
import ConfirmMpesa from "./Payment/Confirm";
import Payment from "./Payment/Payment";
import Success from "./Payment/Success";
import UseOtherNumber from "./Payment/UseOtherNumber";
import UserInput from "./UserInfo/Input";

function Steps(props) {
  const [context, setContext] = useContext(SliderContext);
  const components = [
    Confirmation,
    UserInput,
    Payment,
    ConfirmMpesa,
    UseOtherNumber,
    CheckMpesaPrompt,
    Success,
  ];
  return (
    <>
      {components.map((Component, index) => {
        if (index === context) {
          console.log(context, index);
          return (
            <Container
              key={"a" + index}
              status="slide"
              classes={Component === UserInput ? ["relative"] : null}
            >
              <Component />{" "}
            </Container>
          );
        } else {
          return (
            <Container
              key={"a" + index}
              status="hide"
              classes={Component === UserInput ? ["relative"] : null}
            >
              <Component />{" "}
            </Container>
          );
        }
      })}
    </>
  );
}

export default Steps;
