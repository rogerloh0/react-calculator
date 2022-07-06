import React from "react";
import { Button } from "@mui/material";
import { createUseStyles, useTheme, ThemeProvider } from "react-jss";

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
    >
      {prop.text}
    </Button>
  );
};
