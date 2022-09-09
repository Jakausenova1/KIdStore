import React from "react";
import storeItems from "./data/items.json";
import { Grid } from "@mui/material";
import { StoreItem } from "./StoreItem";

const Products = () => {
  return (
    <Grid container spacing={4} sx={{ width: "100%", marginTop: "20px"}}>
      {storeItems.map((item) => (
        <StoreItem {...item} key={item.id} />
      ))}
    </Grid>
  );
};

export default Products;
