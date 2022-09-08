import { Grid } from "@mui/material";
import React from "react";
import { cardsData } from "../App";
import Cards from "./Cards";

export const Cardss = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Cards
            title={cardsData.first.title}
            text={cardsData.first.text}
            img={cardsData.first.img}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cards
            title={cardsData.second.title}
            text={cardsData.second.text}
            img={cardsData.second.img}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cards
            title={cardsData.third.title}
            text={cardsData.third.text}
            img={cardsData.third.img}
          />
        </Grid>
      </Grid>
    </>
  );
};
