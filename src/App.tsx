import React, { useReducer } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { createUseStyles, useTheme, ThemeProvider } from "react-jss";
import { CalButton } from "./components/CalButton/CalButton";
import { DigitButton } from "./components/DigitButton/DigitButton";
import { theme as themeColor } from "./theme";

const useStyles = createUseStyles(() => ({
  background: {
    backgroundColor: "#06BEDA",
    height: "100vh",
    padding: 50,
  },
  calculatorBody: {
    backgroundColor: "black",
    margin: 0,
  },
  gridContainer: {},
  buttonGrid: {
    height: 105,
    textAlign: "center",
    padding: 15,
  },
  button: {
    backgroundColor: "grey",
    textAlign: "center",
  },
  currentOperand: { color: "white" },
  previousOperand: { color: "gray" },
}));

export enum ACTIONS {
  ADD_DIGIT = "add-digit",
  DEFAULT = "default",
}

export interface ICalculatorAction {
  type: ACTIONS;
  payload: {
    digit?: string;
    operation?: string;
  };
}

interface ICalculatorState {
  currentOperand: string;
  previousOperand: string;
  operation: string;
}

function calculatorReducer(state: ICalculatorState, action: ICalculatorAction) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: state.currentOperand + payload.digit,
      };
    default:
      return state;
  }
}

function App() {
  const styles = useStyles();

  const [state, dispatch] = useReducer(calculatorReducer, {
    currentOperand: "",
    previousOperand: "",
    operation: "",
  });

  return (
    <div className={styles.background}>
      <Button
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: "1" } })
        }
      >
        TEST BUTTON
      </Button>
      <Grid
        container
        className={styles.calculatorBody}
        sx={{
          width: 450,
          padding: 4,
          height: "fit-content",
          borderRadius: 10,
        }}
      >
        <Grid item xs={12} textAlign="end">
          <Typography className={styles.previousOperand}>4321</Typography>
        </Grid>
        <Grid item xs={12} textAlign="end">
          <Typography className={styles.currentOperand} sx={{ fontSize: 50 }}>
            {state.currentOperand}
          </Typography>
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.light.background}
            textColor={themeColor.light.text}
            text="AC"
            actionType={ACTIONS.DEFAULT}
            dispatch={() =>
              dispatch({
                type: ACTIONS.ADD_DIGIT,
                payload: { digit: "1" },
              })
            }
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.light.background}
            textColor={themeColor.light.text}
            text="+/-"
            actionType={ACTIONS.DEFAULT}
            dispatch={() =>
              dispatch({
                type: ACTIONS.ADD_DIGIT,
                payload: { digit: "1" },
              })
            }
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.light.background}
            textColor={themeColor.light.text}
            text="%"
            actionType={ACTIONS.DEFAULT}
            dispatch={() =>
              dispatch({
                type: ACTIONS.ADD_DIGIT,
                payload: { digit: "1" },
              })
            }
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.primary.background}
            textColor={themeColor.primary.text}
            text="÷"
            actionType={ACTIONS.DEFAULT}
            dispatch={dispatch}
          />
        </Grid>
        {/* Row Divider */}
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="1" dispatch={dispatch} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="2" dispatch={dispatch} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="3"
            actionType={ACTIONS.DEFAULT}
            dispatch={() =>
              dispatch({
                type: ACTIONS.ADD_DIGIT,
                payload: { digit: "1" },
              })
            }
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.primary.background}
            textColor={themeColor.primary.text}
            text="×"
            actionType={ACTIONS.DEFAULT}
            dispatch={() =>
              dispatch({
                type: ACTIONS.ADD_DIGIT,
                payload: { digit: "1" },
              })
            }
          />
        </Grid>
        {/* Row Divider */}
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="4"
            actionType={ACTIONS.DEFAULT}
            dispatch={() =>
              dispatch({
                type: ACTIONS.ADD_DIGIT,
                payload: { digit: "1" },
              })
            }
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="5"
            actionType={ACTIONS.DEFAULT}
            dispatch={() =>
              dispatch({
                type: ACTIONS.ADD_DIGIT,
                payload: { digit: "1" },
              })
            }
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="6"
            actionType={ACTIONS.DEFAULT}
            dispatch={() =>
              dispatch({
                type: ACTIONS.ADD_DIGIT,
                payload: { digit: "1" },
              })
            }
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.primary.background}
            textColor={themeColor.primary.text}
            text="-"
            actionType={ACTIONS.DEFAULT}
            dispatch={() =>
              dispatch({
                type: ACTIONS.ADD_DIGIT,
                payload: { digit: "1" },
              })
            }
          />
        </Grid>
        {/* Row Divider */}
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="7"
            actionType={ACTIONS.DEFAULT}
            dispatch={() =>
              dispatch({
                type: ACTIONS.ADD_DIGIT,
                payload: { digit: "1" },
              })
            }
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="8"
            actionType={ACTIONS.DEFAULT}
            dispatch={() =>
              dispatch({
                type: ACTIONS.ADD_DIGIT,
                payload: { digit: "1" },
              })
            }
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="9"
            actionType={ACTIONS.DEFAULT}
            dispatch={() =>
              dispatch({
                type: ACTIONS.ADD_DIGIT,
                payload: { digit: "1" },
              })
            }
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.primary.background}
            textColor={themeColor.primary.text}
            text="+"
            actionType={ACTIONS.DEFAULT}
            dispatch={() =>
              dispatch({
                type: ACTIONS.ADD_DIGIT,
                payload: { digit: "1" },
              })
            }
          />
        </Grid>
        {/* Row Divider */}
        <Grid item xs={6} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="0"
            actionType={ACTIONS.DEFAULT}
            long
            dispatch={() =>
              dispatch({
                type: ACTIONS.ADD_DIGIT,
                payload: { digit: "1" },
              })
            }
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="."
            actionType={ACTIONS.DEFAULT}
            dispatch={() =>
              dispatch({
                type: ACTIONS.ADD_DIGIT,
                payload: { digit: "1" },
              })
            }
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.primary.background}
            textColor={themeColor.primary.text}
            text="="
            actionType={ACTIONS.DEFAULT}
            dispatch={() =>
              dispatch({
                type: ACTIONS.ADD_DIGIT,
                payload: { digit: "1" },
              })
            }
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
