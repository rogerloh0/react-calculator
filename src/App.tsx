import { useReducer, useState } from "react";
import _ from "lodash";
import { Grid, Typography, Button } from "@mui/material";
import { createUseStyles } from "react-jss";
import { DigitButton } from "./components/DigitButton/DigitButton";
import { OperationButton } from "./components/OperationButton/OperationButton";
import { theme } from "./theme";

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
  themeSelector: {
    backgroundColor: "black",
    marginTop: 10,
  },
  themeSelectorText: {
    color: "gray",
    fontSize: 30,
    fontWeight: 50,
  },
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
  evaluated: boolean;
}

interface IEvaluateInput {
  currentOperand: string;
  previousOperand: string;
  operation: string;
}

function calculatorReducer(state: ICalculatorState, action: ICalculatorAction) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.evaluated === false) {
        return {
          ...state,
          currentOperand:
            state.currentOperand === "" && payload.digit === "."
              ? "0."
              : _.includes(state.currentOperand, ".") && payload.digit === "."
              ? state.currentOperand
              : state.currentOperand + payload.digit,
        };
      } else {
        return {
          ...state,
          evaluated: false,
          currentOperand: payload.digit === "." ? "0." : payload.digit ?? "",
          previousOperand: "",
          operation: "",
        };
      }
    case ACTIONS.CLEAR:
      return {
        ...state,
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
        ...state,
        evaluated: false,
        previousOperand:
          state.currentOperand === "" || state.previousOperand === ""
            ? state.currentOperand
            : evaluate({
                currentOperand: state.currentOperand,
                previousOperand: state.previousOperand,
                operation: state.operation,
              }),
        operation: payload.operation ?? "",
        currentOperand: "",
      };
    case ACTIONS.EVALUATE:
      if (state.currentOperand === "") {
        return {
          ...state,
          previousOperand: "",
          operation: "",
          currentOperand: state.previousOperand,
        };
      } else if (state.previousOperand === "" || state.operation === "") {
        return { ...state };
      } else {
        return {
          ...state,
          evaluated: true,
          previousOperand: "",
          operation: "",
          currentOperand: evaluate({
            currentOperand: state.currentOperand,
            previousOperand: state.previousOperand,
            operation: state.operation,
          }),
        };
      }
    default:
      return { ...state };
  }
}

function evaluate(input: IEvaluateInput) {
  const prev = parseFloat(input.previousOperand);
  const current = parseFloat(input.currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let result = "";
  switch (input.operation) {
    case "+":
      result = (prev + current).toString();
      break;
    case "-":
      result = (prev - current).toString();
      break;
    case "×":
      result = (prev * current).toString();
      break;
    case "÷":
      result = (prev / current).toString();
      break;
  }

  return result;
}

function App() {
  const styles = useStyles();

  const [themeState, setThemeState] = useState(0);
  const [state, dispatch] = useReducer(calculatorReducer, {
    currentOperand: "",
    previousOperand: "",
    operation: "",
    evaluated: false,
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
            theme={themeState}
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <OperationButton
            operation="+/-"
            actionType={ACTIONS.ALTERNATE_SIGN}
            dispatch={dispatch}
            theme={themeState}
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <OperationButton
            operation="%"
            actionType={ACTIONS.ALTERNATE_SIGN}
            dispatch={dispatch}
            theme={themeState}
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <OperationButton
            operation="÷"
            primary
            actionType={ACTIONS.CHOOSE_OPERATION}
            dispatch={dispatch}
            theme={themeState}
          />
        </Grid>
        {/* Row Divider */}
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="1" dispatch={dispatch} theme={themeState} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="2" dispatch={dispatch} theme={themeState} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="3" dispatch={dispatch} theme={themeState} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <OperationButton
            operation="×"
            primary
            actionType={ACTIONS.CHOOSE_OPERATION}
            dispatch={dispatch}
            theme={themeState}
          />
        </Grid>
        {/* Row Divider */}
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="4" dispatch={dispatch} theme={themeState} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="5" dispatch={dispatch} theme={themeState} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="6" dispatch={dispatch} theme={themeState} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <OperationButton
            operation="-"
            primary
            actionType={ACTIONS.CHOOSE_OPERATION}
            dispatch={dispatch}
            theme={themeState}
          />
        </Grid>
        {/* Row Divider */}
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="7" dispatch={dispatch} theme={themeState} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="8" dispatch={dispatch} theme={themeState} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="9" dispatch={dispatch} theme={themeState} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <OperationButton
            operation="+"
            primary
            actionType={ACTIONS.CHOOSE_OPERATION}
            dispatch={dispatch}
            theme={themeState}
          />
        </Grid>
        {/* Row Divider */}
        <Grid item xs={6} className={styles.buttonGrid}>
          <DigitButton digit="0" long dispatch={dispatch} theme={themeState} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <DigitButton digit="." dispatch={dispatch} theme={themeState} />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <OperationButton
            operation="="
            primary
            actionType={ACTIONS.EVALUATE}
            dispatch={dispatch}
            theme={themeState}
          />
        </Grid>
      </Grid>

      <Grid
        container
        className={styles.themeSelector}
        sx={{
          width: 450,
          padding: 4,
          height: "fit-content",
          borderRadius: 3,
        }}
      >
        <Grid item xs={4}>
          <Typography
            sx={{
              color: "gray",
              fontSize: 15,
              fontWeight: 50,
              textAlign: "center",
            }}
          >
            Theme Selector
          </Typography>
        </Grid>
        {_.map(theme, (item) => (
          <Grid item xs={2}>
            <Button
              onClick={() => setThemeState(item.key)}
              sx={{
                color: "gray",
                fontSize: 15,
                fontWeight: 50,
                textAlign: "center",
              }}
            >
              {item.key + 1}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
