import React, { Dispatch } from "react";
import { CalButton } from "../CalButton/CalButton";
import { theme as themeColor } from "../../theme";
import { ACTIONS, ICalculatorAction } from "../../App";

interface IOperationButtonInterface {
  operation: string;
  primary?: boolean;
  actionType: ACTIONS;
  dispatch: Dispatch<ICalculatorAction>;
  theme: number;
}

export const OperationButton: React.FC<IOperationButtonInterface> = (prop) => {
  return (
    <CalButton
      bgColor={
        prop.primary
          ? themeColor[prop.theme].primary.background
          : themeColor[prop.theme].light.background
      }
      textColor={
        prop.primary
          ? themeColor[prop.theme].primary.text
          : themeColor[prop.theme].light.text
      }
      text={prop.operation}
      operation={prop.operation}
      actionType={prop.actionType}
      dispatch={prop.dispatch}
    />
  );
};
