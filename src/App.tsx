import React, { useReducer } from "react";
import _ from "lodash";
import { Button, Container, Grid, Typography } from "@mui/material";
import { createUseStyles, useTheme, ThemeProvider } from "react-jss";
import { CalButton } from "./components/CalButton/CalButton";
import { DigitButton } from "./components/DigitButton/DigitButton";
import { OperationButton } from "./components/OperationButton/OperationButton";
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
  currentOperand: { color: "white", height: 55 },
  previousOperand: { color: "gray", height: 15 },
}));

export enum ACTIONS {
  ADD_DIGIT = "add-digit",
  CHOOSE_OPERATION = "choose-operation",
  EVALUATE = "evaluate",
  ALTERNATE_SIGN = "alternate-sign",
  CLEAR = "clear",
  ADD_PERCENTAGE = "add-percentage",
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
        currentOperand:
          state.currentOperand === "" && payload.digit === "."
            ? "0."
            : _.includes(state.currentOperand, ".") && payload.digit === "."
            ? state.currentOperand
            : state.currentOperand + payload.digit,
      };
    case ACTIONS.CLEAR:
      return {
        currentOperand: "",
        previousOperand: "",
        operation: "",
      };
    case ACTIONS.ALTERNATE_SIGN:
      return {
        ...state,
        currentOperand:
          state.currentOperand === ""
            ? ""
            : _.includes(state.currentOperand, "-")
            ? _.split(state.currentOperand, "-")[1]
            : "-" + state.currentOperand,
      };
    case ACTIONS.CHOOSE_OPERATION:
      return {
        previousOperand: state.currentOperand,
        operation: payload.operation ?? "",
        currentOperand: "",
      };
    case ACTIONS.EVALUATE:
      if (state.currentOperand === "") {
        return {
          previousOperand: "",
          operation: "",
          currentOperand: state.previousOperand,
        };
      } else if (state.previousOperand === "" || state.operation === "") {
        return { ...state };
      } else {
        switch (state.operation) {
          case "+":
            return {
              previousOperand: "",
              operation: "",
              currentOperand: (
                parseInt(state.currentOperand) + parseInt(state.previousOperand)
              ).toString(),
            };
          case "-":
            return {
              previousOperand: "",
              operation: "",
              currentOperand: (
                parseInt(state.previousOperand) - parseInt(state.currentOperand)
              ).toString(),
            };
          case "×":
            return {
              previousOperand: "",
              operation: "",
              currentOperand: (
                parseInt(state.previousOperand) * parseInt(state.currentOperand)
              ).toString(),
            };
          case "÷":
            return {
              previousOperand: "",
              operation: "",
              currentOperand: (
                parseInt(state.previousOperand) / parseInt(state.currentOperand)
              ).toString(),
            };
          default:
            return { ...state };
        }
      }
    default:
      return { ...state };
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
          <Typography className={styles.previousOperand}>
            {state.previousOperand + " " + state.operation}
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="end">
          <Typography className={styles.currentOperand} sx={{ fontSize: 50 }}>
            {state.currentOperand}
          </Typography>
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <OperationButton
            operation="AC"
            actionType={ACTIONS.CLEAR}
            dispatch={dispatch}
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <OperationButton
            operation="+/-"
            actionType={ACTIONS.ALTERNATE_SIGN}
            dispatch={dispatch}
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <OperationButton
            operation="%"
            actionType={ACTIONS.ALTERNATE_SIGN}
            dispatch={dispatch}
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <OperationButton
            operation="÷"
            primary
            actionType={ACTIONS.CHOOSE_OPERATION}
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
          <DigitButton digit="3" dispatch={dispatch} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <OperationButton
            operation="×"
            primary
            actionType={ACTIONS.CHOOSE_OPERATION}
            dispatch={dispatch}
          />
        </Grid>
        {/* Row Divider */}
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="4" dispatch={dispatch} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="5" dispatch={dispatch} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="6" dispatch={dispatch} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <OperationButton
            operation="-"
            primary
            actionType={ACTIONS.CHOOSE_OPERATION}
            dispatch={dispatch}
          />
        </Grid>
        {/* Row Divider */}
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="7" dispatch={dispatch} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="8" dispatch={dispatch} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="9" dispatch={dispatch} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <OperationButton
            operation="+"
            primary
            actionType={ACTIONS.CHOOSE_OPERATION}
            dispatch={dispatch}
          />
        </Grid>
        {/* Row Divider */}
        <Grid item xs={6} className={styles.buttonGrid}>
          <DigitButton digit="0" long dispatch={dispatch} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="." dispatch={dispatch} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <OperationButton
            operation="="
            primary
            actionType={ACTIONS.EVALUATE}
            dispatch={dispatch}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
