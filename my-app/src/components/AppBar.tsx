import { Container } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { SearchButton } from "./SearchButton";

const AppBarr = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <SearchButton />
        <Navbar />
        <PersonIcon />
        <ShoppingCartIcon />
      </Container>
    </>
  );
};

export default AppBarr;
