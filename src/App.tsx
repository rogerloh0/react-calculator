import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { createUseStyles, useTheme, ThemeProvider } from "react-jss";
import { CalButton } from "./components/CalButton/CalButton";
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
  currentOperand: { color: "white" },
  previousOperand: { color: "gray" },
}));

function App() {
  const styles = useStyles();
  const themeColor = theme;
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
          <Typography className={styles.previousOperand}>4321</Typography>
        </Grid>
        <Grid item xs={12} textAlign="end">
          <Typography className={styles.currentOperand} sx={{ fontSize: 50 }}>
            1234
          </Typography>
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.light.background}
            textColor={themeColor.light.text}
            text="AC"
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.light.background}
            textColor={themeColor.light.text}
            text="+/-"
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.light.background}
            textColor={themeColor.light.text}
            text="%"
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.primary.background}
            textColor={themeColor.primary.text}
            text="÷"
          />
        </Grid>
        {/* Row Divider */}
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="1"
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="2"
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="3"
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.primary.background}
            textColor={themeColor.primary.text}
            text="×"
          />
        </Grid>
        {/* Row Divider */}
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="4"
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="5"
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="6"
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.primary.background}
            textColor={themeColor.primary.text}
            text="-"
          />
        </Grid>
        {/* Row Divider */}
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="7"
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="8"
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="9"
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.primary.background}
            textColor={themeColor.primary.text}
            text="+"
          />
        </Grid>
        {/* Row Divider */}
        <Grid item xs={6} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="0"
            long
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.dark.background}
            textColor={themeColor.dark.text}
            text="."
          />
        </Grid>
        <Grid item xs={3} className={styles.buttonGrid}>
          <CalButton
            bgColor={themeColor.primary.background}
            textColor={themeColor.primary.text}
            text="="
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
