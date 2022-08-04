import { Typography, Grid } from "@mui/material";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import React from "react";

const Header = () => {
  return (
    <>
      <ChildFriendlyIcon
        fontSize="large"
        sx={{
          color: "black",
          textAlign: "center",
          padding: "1rem",
          width: "100%",
        }}
      />
      <Typography
        sx={{
          color: "black",
          textAlign: "center",
          padding: "1rem",
          width: "100%",
          marginTop: "-30px",
          font: "var(--font_3)",
          fontWeight: "bold",
          fontStyle: "italic",
          fontSize: "27px",
        }}
      >
        Little Loves
      </Typography>
    </>
  );
};

<Grid justifyContent="center" alignItems="center"></Grid>;

export default Header;
