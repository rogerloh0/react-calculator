import React, { Dispatch } from "react";
import { CalButton } from "../CalButton/CalButton";
import { theme as themeColor } from "../../theme";
import { ACTIONS, ICalculatorAction } from "../../App";

interface IDigitButtonInterface {
  digit: string;
  dispatch: Dispatch<ICalculatorAction>;
  long?: boolean;
  theme: number;
}

export const DigitButton: React.FC<IDigitButtonInterface> = (prop) => {
  return (
    <CalButton
      bgColor={themeColor[prop.theme].dark.background}
      textColor={themeColor[prop.theme].dark.text}
      text={prop.digit}
      long={prop.long}
      digit={prop.digit}
      actionType={ACTIONS.ADD_DIGIT}
      dispatch={prop.dispatch}
    />
  );
};
