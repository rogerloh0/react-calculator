import React, { Dispatch } from "react";
import { Button } from "@mui/material";
import { createUseStyles } from "react-jss";
import { ACTIONS, ICalculatorAction } from "../../App";

const useStyles = createUseStyles((theme) => ({
  button: {
    textAlign: "center",
  },
}));

interface ICalButtonInterface {
  bgColor: string[];
  textColor: string;
  text: string;
  long?: boolean;
  operation?: string;
  digit?: string;
  dispatch: Dispatch<ICalculatorAction>;
  actionType: ACTIONS;
}

export const CalButton: React.FC<ICalButtonInterface> = (prop) => {
  const style = useStyles();
  return (
    <Button
      className={style.button}
      sx={{
        height: 75,
        width: prop.long ? 175 : 75,
        backgroundColor: prop.bgColor[0],
        fontSize: 30,
        color: prop.textColor,
        borderRadius: 37,
        "&:hover": {
          backgroundColor: prop.bgColor[1],
        },
      }}
      onClick={() => {
        prop.dispatch({
          type: prop.actionType,
          payload: { digit: prop.digit, operation: prop.operation },
        });
      }}
    >
      {prop.text}
    </Button>
  );
};
