import { Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" gutterBottom className={classes.tpg}>
        Little Loves
      </Typography>
    </>
  );
};

export default Header;

const useStyles = makeStyles({
  tpg: {
    color: "black",
    textAlign: "center",
    padding: "1rem",
    width: "100%",
    font: "var(--font_3)",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
