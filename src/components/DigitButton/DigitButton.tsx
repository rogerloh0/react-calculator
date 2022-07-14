import React, { Dispatch } from "react";
import { CalButton } from "../CalButton/CalButton";
import { createUseStyles, useTheme, ThemeProvider } from "react-jss";
import { theme as themeColor } from "../../theme";
import { ACTIONS, ICalculatorAction } from "../../App";

interface IDigitButtonInterface {
  digit: string;
  dispatch: Dispatch<ICalculatorAction>;
}

export const DigitButton: React.FC<IDigitButtonInterface> = (prop) => {
  return (
    <CalButton
      bgColor={themeColor.dark.background}
      textColor={themeColor.dark.text}
      text={prop.digit}
      actionType={ACTIONS.ADD_DIGIT}
      dispatch={prop.dispatch}
    />
  );
};
