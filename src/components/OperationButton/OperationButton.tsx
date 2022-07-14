import React, { Dispatch } from "react";
import { CalButton } from "../CalButton/CalButton";
import { createUseStyles, useTheme, ThemeProvider } from "react-jss";
import { theme as themeColor } from "../../theme";
import { ACTIONS, ICalculatorAction } from "../../App";

interface IOperationButtonInterface {
  operation: string;
  primary?: boolean;
  actionType: ACTIONS;
  dispatch: Dispatch<ICalculatorAction>;
}

export const OperationButton: React.FC<IOperationButtonInterface> = (prop) => {
  return (
    <CalButton
      bgColor={
        prop.primary
          ? themeColor.primary.background
          : themeColor.light.background
      }
      textColor={prop.primary ? themeColor.primary.text : themeColor.light.text}
      text={prop.operation}
      operation={prop.operation}
      actionType={prop.actionType}
      dispatch={prop.dispatch}
    />
  );
};
